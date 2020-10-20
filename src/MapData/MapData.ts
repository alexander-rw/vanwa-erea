import { Position } from "geojson";

import { recursiveMapFeatures, roads } from "../@data/map/mapFeatures";
import {
  RecursiveMapFeature,
  MapFeatureWithZIndex,
  MapFeature,
  RoadFeature,
} from "../@types/Map/MapFeature";

import { FeatureToggles } from "../Constants/FeatureToggles";
import { LocationIds } from "../Constants/Ids/LocationIds";
import { calculateLineStringLength } from "../Utilities/Distance";
import { log } from "../Utilities/Logger";


export class MapData {
  public static asFlatFeatures = (): MapFeatureWithZIndex[] => {
    const dataWithZIndex: MapFeatureWithZIndex[] = [];

    MapData.assignZIndexRecursively(recursiveMapFeatures, 1, dataWithZIndex);
    log.logStr(`Parsed map features recursively. Total: ${dataWithZIndex.length}`);

    MapData.applyRoadsToData(roads, dataWithZIndex);
    log.logStr(`Parsed map roads. Total: ${dataWithZIndex.length}`);

    dataWithZIndex.sort((a, b) => MapData.sortByZIndexThenById(a, b));

    log.info(`Features size ~ ${Math.ceil(JSON.stringify(dataWithZIndex).length / 1024)} kb`);

    if (FeatureToggles.LogFullMapFeatures) {
      log.warn({ type: "FeatureCollection", features: [...dataWithZIndex] });
    }

    if (FeatureToggles.LogBasicMapFeatures) {
      const toFind: LocationIds[] = [
        LocationIds.VanwaErea,
        LocationIds.Icaros,
        LocationIds.PortSarim,
      ];

      const toPrintFeatures = toFind
        .map(findId => dataWithZIndex.find(x => x.id === findId))
        .filter(x => x !== undefined);

      log.warn({
        type: "FeatureCollection",
        features: toPrintFeatures,
      });
    }

    return dataWithZIndex;
  };

  private static sortByZIndexThenById(a: MapFeatureWithZIndex, b: MapFeatureWithZIndex): number {
    if (a.properties.zIndex > b.properties.zIndex) {
      return 1;
    } if (a.properties.zIndex < b.properties.zIndex) {
      return -1;
    }

    return a.id.localeCompare(b.id);
  }

  private static assignZIndexToFeature = (feature: MapFeature,
    depth: number): MapFeatureWithZIndex => ({
    ...feature,
    properties: {
      ...feature.properties,
      zIndex: depth,
    },
  });

  private static assignZIndexRecursively = (recursiveFeat: RecursiveMapFeature,
    depth: number,
    flatMap: MapFeatureWithZIndex[]): void => {
    flatMap.push(MapData.assignZIndexToFeature(recursiveFeat.feature, depth));

    if (recursiveFeat.features && recursiveFeat.features.length > 0) {
      recursiveFeat.features.forEach(f => MapData.assignZIndexRecursively(f, depth + 1, flatMap));
    }
  };

  private static applyRoadsToData(roadFeatures: RoadFeature[], dataWithZIndex: MapFeatureWithZIndex[]): void {
    const roadsWithExtraData: MapFeatureWithZIndex[] = roadFeatures.map((f) => {
      const length = calculateLineStringLength(f.geometry.coordinates as Position[]);

      return {
        ...f,
        properties: {
          ...f.properties,
          zIndex: 100,
        },
        roadProperties: {
          from: f.from,
          to: f.to,
          length,
        },
      };
    });

    dataWithZIndex.push(...roadsWithExtraData);
  }
}
