import { Position } from "geojson";
import { MapBrowserEvent } from "ol";
import Map from "ol/Map";
import { MapOptions } from "ol/PluggableMap";
import View from "ol/View";
import Control from "ol/control/Control";
import MousePosition from "ol/control/MousePosition";
import ScaleLine from "ol/control/ScaleLine";
import Zoom from "ol/control/Zoom";
import { createStringXY } from "ol/coordinate";
import BaseLayer from "ol/layer/Base";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import React, { PointerEvent } from "react";
import { match } from "react-router";
import { toast } from "react-toastify";

import { WorldData } from "../../@data/worldData";
import { Location } from "../../@types/Location/Location";
import { MapFeatureWithZIndex } from "../../@types/Map/MapFeature";
import { DisplayableDataObject } from "../../@types/Panel/DisplayableDataObject";
import { FeatureToggles } from "../../Constants/FeatureToggles";
import { DataTypeIds } from "../../Constants/Ids/DataTypeIds";
import { createOlFeature } from "../../OpenLayers/OlMapFeature";
import { userFriendlyDistance } from "../../Utilities/Distance";
import { dataItemToLinkable } from "../../Utilities/LinkableString";
import { screen } from "../../Utilities/Screen";
import { ConnectedPanelUpdater } from "../Panel/ConnectedPanelUpdater";
import { PanelUpdater } from "../Panel/PanelUpdater";

interface P {
  match: match<{ id: string }>;
}

interface S {
  center: Position;
  zoom: number;
  distanceBetween: Position[];
}

class OlMap extends PanelUpdater<P, S> {
  public static readonly WorldviewrMapContainerClassName = "worldviewr-map-container";

  private static readonly MapId: string = "worldviewr-ol-map";

  private olMap: Map;

  private mapFeatures: MapFeatureWithZIndex[];

  private featureSource: VectorSource;

  private featureLayer: VectorLayer;

  constructor(props, state: S) {
    super(props, state);
    this.state = {
      center: [29, 10],
      zoom: 9.2,
      distanceBetween: [],
    };
    this.mapFeatures = WorldData.mapFeatures;
    this.featureSource = new VectorSource({
      features: this.mapFeatures.map(f => createOlFeature(f)),
    });
    this.featureLayer = new VectorLayer({
      source: this.featureSource,
    });
    this.olMap = this.setupMap();
  }

  render(): JSX.Element {
    const { width, height } = screen;
    return (
      <div
        id={OlMap.MapId}
        className={OlMap.WorldviewrMapContainerClassName}
        style={{ width, height }}
      >
        {/* Map Renders here - do all post logic setup after map renders */}
      </div>
    );
  }

  componentDidMount(): void {
    this.olMap.setTarget(OlMap.MapId);
    this.setupMapListeners();
    this.centreOnMapFeatureIfValidId();
    this.log.logStr("Map rendered and mounted.");
  }

  private setupMap(): Map {
    const controls: Control[] = [
      new ScaleLine(),
      new Zoom({ className: "worldviewr-zoom" }),
      new MousePosition({
        className: "worldviewr-mouse-position",
        projection: "EPSG:4326",
        coordinateFormat: createStringXY(4),
      }),
    ];

    const layers = this.getLayers();

    const viewOpts = {
      center: this.state.center,
      zoom: this.state.zoom,
      projection: "EPSG:4326",
    };

    const view = FeatureToggles.EnableMapExtent
      ? new View({ ...viewOpts, extent: [-10, -10, 80, 80] })
      : new View(viewOpts);

    const options: MapOptions = {
      view,
      controls,
      layers,
    };

    return new Map(options);
  }

  private setupMapListeners(): void {
    this.olMap.on("moveend", () => {
      this.setState({
        center: this.olMap.getView().getCenter(),
        zoom: this.olMap.getView().getZoom(),
      });

      if (FeatureToggles.LogMapViewInfo) {
        this.log.info(this.state);
      }
    });

    this.olMap.on("click", (e: MapBrowserEvent) => ((e.originalEvent as unknown as PointerEvent).shiftKey
      ? this.displayMapDistanceToast(e)
      : this.featuresUnderKey(e)));

    this.olMap.on("pointermove", (e: MapBrowserEvent) => {
      if (FeatureToggles.LogFeatureNamesOnHover) {
        this.olMap.forEachFeatureAtPixel(e.pixel, (f) => {
          this.log.info(`Hovered over feature ${f.get("name")}`);
        });
      }
    });
  }

  private displayMapDistanceToast(e: MapBrowserEvent): void {
    this.setState(prevState => ({ distanceBetween: [...prevState.distanceBetween, e.coordinate] }));

    const { state } = this;

    if (state.distanceBetween.length >= 2) {
      const [initial, final] = state.distanceBetween;
      const {
        walking,
        horse,
        windwalk,
        distance,
      } = userFriendlyDistance(initial, final);

      toast(distance);

      if (FeatureToggles.ShowWalkingSpeedToast) {
        toast(walking);
      }

      if (FeatureToggles.ShowHorseSpeedToast) {
        toast(horse);
      }

      if (FeatureToggles.ShowWindwalkSpeedToast) {
        toast(windwalk);
      }

      this.setState({ distanceBetween: [] });
    }
  }

  private featuresUnderKey(e: MapBrowserEvent): void {
    const feats: any[] = []; // eslint-disable-line @typescript-eslint/no-explicit-any

    this.olMap.forEachFeatureAtPixel(
      this.olMap.getPixelFromCoordinate(e.coordinate),
      (feature) => {
        feats.push({ zIndex: feature.get("zIndex"), id: feature.get("name") });
      });

    const featIds: string[] = feats.sort((a, b) => b.zIndex - a.zIndex).map(f => f.id);

    if (featIds.length > 0) {
      const locations = WorldData.getDataObjectsByType(DataTypeIds.Location)
        .filter(loc => featIds.includes(loc.id))
        .map(l => l as Location);
      if (locations.length > 0) {
        const locationDataObject = this.getDisplayLocations(locations);
        this.updatePanelWithDataObject(locationDataObject);
      }
    }
  }

  private getDisplayLocations = (locations: Location[]): DisplayableDataObject => {
    if (locations.length === 1 || FeatureToggles.DisplaySingleLocationUnderMapClick) {
      const { type, id } = locations[0];
      return WorldData.toDisplayableObject(WorldData.getByTypeAndId(type, id));
    }

    return { locations: locations.map((l: Location) => dataItemToLinkable(l.type, l.id)) };
  };

  private getLayers = (): BaseLayer[] => {
    const layers: BaseLayer[] = [];

    if (FeatureToggles.ShowOpenStreetMapLayer) {
      layers.push(new TileLayer({ source: new OSM() }));
    }

    layers.push(this.featureLayer);

    return layers;
  };

  private centreOnMapFeatureIfValidId(): void {
    const paramFeatureId = this.props.match.params.id;

    if (paramFeatureId) {
      const feat = this.mapFeatures.find(x => x.id.toLowerCase() === paramFeatureId.toLowerCase());
      if (feat) {
        const panelDataObject = WorldData.getByTypeAndId(DataTypeIds.Location, feat.id);
        if (panelDataObject !== undefined) {
          toast(`Updating location to: ${feat.id}`, { autoClose: 600 });
          setTimeout(() => this.updatePanelWithDataObject(WorldData.toDisplayableObject(panelDataObject)), 600);
        }
      }

      const featOnMap = this.featureSource.getFeatures().find(x => x.get("name") === feat?.id);
      if (featOnMap) {
        this.olMap.getView().fit(featOnMap.getGeometry().getExtent(), { padding: [250, 250, 250, 250] });
      }
    }
  }
}

export const OpenLayersMap = ConnectedPanelUpdater(OlMap);
