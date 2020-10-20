import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Hupperdook: MapFeature = {
  id: LocationIds.Hupperdook,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          49.48345184326172,
          15.214957188490652,
        ],
        [
          49.382171630859375,
          15.093339268117337,
        ],
        [
          49.515380859375,
          15.00979013562827,
        ],
        [
          49.61700439453125,
          15.122507426658462,
        ],
        [
          49.48345184326172,
          15.214957188490652,
        ],
      ],
    ],
  },
};
