import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Illidara: MapFeature = {
  id: LocationIds.Illidara,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          51.7236328125,
          15.008463695004872,
        ],
        [
          51.53343200683594,
          14.879096301785548,
        ],
        [
          51.69342041015625,
          14.708478197970294,
        ],
        [
          51.8170166015625,
          14.705821604736103,
        ],
        [
          51.9927978515625,
          14.764259178591587,
        ],
        [
          52.01751708984375,
          14.88108715909066,
        ],
        [
          52.0037841796875,
          15.050905707724771,
        ],
        [
          51.94061279296875,
          15.16492667481092,
        ],
        [
          51.822509765625,
          15.143718113174689,
        ],
        [
          51.7236328125,
          15.008463695004872,
        ],
      ],
    ],
  },
};
