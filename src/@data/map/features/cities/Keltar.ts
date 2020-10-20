import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Keltar: MapFeature = {
  id: LocationIds.Keltar,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          37.91656494140625,
          47.580462888194106,
        ],
        [
          37.8863525390625,
          47.56841883409362,
        ],
        [
          37.91107177734375,
          47.54548115043221,
        ],
        [
          37.938194274902344,
          47.564944072920376,
        ],
        [
          37.91656494140625,
          47.580462888194106,
        ],
      ],
    ],
  },
};
