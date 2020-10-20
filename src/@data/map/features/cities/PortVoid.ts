import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const PortVoid: MapFeature = {
  id: LocationIds.PortVoid,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          15.93017578125,
          47.22096718353454,
        ],
        [
          16.026306152343746,
          47.17104415159213,
        ],
        [
          16.038665771484375,
          47.19204554206408,
        ],
        [
          16.061325073242188,
          47.2186353776589,
        ],
        [
          16.0345458984375,
          47.25593196573788,
        ],
        [
          16.007766723632812,
          47.2750362926762,
        ],
        [
          15.959701538085936,
          47.27317275941787,
        ],
        [
          15.924682617187498,
          47.2549998709802,
        ],
        [
          15.93017578125,
          47.22096718353454,
        ],
      ],
    ],
  },
};
