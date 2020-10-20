import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const GwanuandaveMonastery: MapFeature = {
  id: LocationIds.GwanuandaveMonastery,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          30.151119232177734,
          9.69315164289011,
        ],
        [
          30.14219284057617,
          9.678599209711619,
        ],
        [
          30.167083740234375,
          9.66878442203505,
        ],
        [
          30.17360687255859,
          9.682152769044515,
        ],
        [
          30.151119232177734,
          9.69315164289011,
        ],
      ],
    ],
  },
};
