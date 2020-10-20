import { polygonCentroid } from "d3";
import Feature from "ol/Feature";
import { Coordinate } from "ol/coordinate";
import GeometryType from "ol/geom/GeometryType";
import LineString from "ol/geom/LineString";
import Point from "ol/geom/Point";
import Polygon from "ol/geom/Polygon";
import { Circle as CircleStyle } from "ol/style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import Text from "ol/style/Text";

import { FeaturePropsWithZIndex } from "../@types/Map/FeatureProperties";
import { MapFeatureWithZIndex } from "../@types/Map/MapFeature";
import { CoordinateTypes, PositionTypes } from "../@types/Map/MapGeometryObject";
import { hexToByte } from "../Utilities/Color";

const createTextStyle = (olFeature: Feature, props: FeaturePropsWithZIndex): Text | undefined => {
  if (props.labelPosition) {
    return new Text({
      stroke: new Stroke({
        color: hexToByte("#ffffff", 1),
        width: 2,
      }),
      fill: new Fill({
        color: hexToByte("#000000", 1),
      }),
      overflow: true,
      text: olFeature.get("name"),
    });
  }

  return undefined;
};

const olPoint = (id: string, coordinates: PositionTypes, properties: FeaturePropsWithZIndex): Feature => {
  const coords = coordinates as unknown;
  const olFeature = new Feature({
    id,
    name: id,
    geometry: new Point(coords as number[]),
    labelPoint: polygonCentroid(coords as [number, number][]),
  });

  olFeature.setStyle(new Style({
    image: new CircleStyle({
      radius: 0.1,
      stroke: new Stroke({
        color: hexToByte(properties.stroke, properties.strokeOpacity || 1),
        width: 2,
      }),
    }),
    zIndex: properties.zIndex,
    text: createTextStyle(olFeature, properties),
  }));

  return olFeature;
};

const olLineString = (id: string, coordinates: PositionTypes, properties: FeaturePropsWithZIndex): Feature => {
  const coords = coordinates as unknown as Coordinate[];
  const olFeature = new Feature({
    id,
    name: id,
    geometry: new LineString(coords),
  });

  olFeature.setStyle(new Style({
    stroke: new Stroke({
      color: hexToByte(properties.stroke, properties.strokeOpacity || 1),
      width: properties.strokeWidth || 2,
    }),
    zIndex: properties.zIndex,
    text: createTextStyle(olFeature, properties),
  }));

  return olFeature;
};

const olPolygon = (id: string, coordinates: PositionTypes, properties: FeaturePropsWithZIndex): Feature => {
  const coords = coordinates as unknown;
  const geometry = new Polygon(coords as CoordinateTypes);

  const olFeature = new Feature({
    id,
    name: id,
    geometry,
  });

  olFeature.setStyle(new Style({
    fill: new Fill({
      color: hexToByte(properties.fill, properties.fillOpacity),
    }),
    stroke: new Stroke({
      color: hexToByte(properties.stroke, properties.strokeOpacity),
      width: properties.strokeWidth,
    }),
    zIndex: properties.zIndex,
    text: createTextStyle(olFeature, properties),
  }));

  olFeature.set("zIndex", properties.zIndex);

  return olFeature;
};

export const createOlFeature = (feat: MapFeatureWithZIndex): Feature => {
  const { id, properties, geometry: { coordinates, type } } = feat;

  switch (type) {
    case GeometryType.POINT:
      return olPoint(id, coordinates, properties);
    case GeometryType.LINE_STRING:
      return olLineString(id, coordinates, properties);
    case GeometryType.POLYGON:
    default:
      return olPolygon(id, coordinates, properties);
  }
};

export const highlightStroke: Stroke = new Stroke({
  color: "#32cd32",
  width: 3.8,
});
