import { Position } from "geojson";

import { LocationIds } from "../../Constants/Ids/LocationIds";

export interface FeatureProperties {
  fill: string;
  fillOpacity: number;
  stroke: string;
  strokeOpacity?: number;
  strokeWidth?: number;
  labelPosition?: Position;
}

export type FeaturePropsWithZIndex = FeatureProperties & {
  zIndex: number;
  from?: LocationIds;
  to?: LocationIds;
};
