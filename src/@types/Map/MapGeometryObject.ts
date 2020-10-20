import {
  Point,
  LineString,
  Polygon,
  MultiPolygon,
  Position,
  MultiLineString,
} from "geojson";
import { Coordinate } from "ol/coordinate";

export type MapGeometryObject = Point | LineString | Polygon | MultiPolygon | MultiLineString;

export type CoordinateTypes = Coordinate[][] | number[];

export type PositionTypes = Position | Position[] | Position[][] | Position[][][];
