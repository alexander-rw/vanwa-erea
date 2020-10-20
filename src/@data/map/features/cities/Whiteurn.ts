import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Whiteurn: MapFeature = {
  id: LocationIds.Whiteurn,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          36.2109375,
          16.25686733062344,
        ],
        [
          36.193084716796875,
          16.238409119210182,
        ],
        [
          36.21574401855468,
          16.224564323873658,
        ],
        [
          36.234283447265625,
          16.242364596100327,
        ],
        [
          36.2109375,
          16.25686733062344,
        ],
      ],
    ],
  },
};
