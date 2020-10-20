import { ExtendedFeature } from "d3-geo";

import { LocationIds } from "../../Constants/Ids/LocationIds";

import { FeatureProperties, FeaturePropsWithZIndex } from "./FeatureProperties";
import { MapGeometryObject } from "./MapGeometryObject";

export interface MapFeature extends ExtendedFeature<MapGeometryObject, FeatureProperties> {
  id: LocationIds;
}

export interface MapFeatureWithZIndex extends ExtendedFeature<MapGeometryObject, FeaturePropsWithZIndex> {
  id: LocationIds;
  roadProperties?: {
    from: LocationIds;
    to: LocationIds;
    length: number;
  };
}

export interface RecursiveMapFeature {
  feature: MapFeature;
  features?: RecursiveMapFeature[];
}

export interface RoadFeature extends MapFeature {
  from: LocationIds;
  to: LocationIds;
}
