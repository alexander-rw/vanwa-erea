import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const DevarquePrison: MapFeature = {
  id: LocationIds.DevarquePrison,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          25.3125,
          36.31505598748668,
        ],
        [
          25.31764984130859,
          36.31062962026213,
        ],
        [
          25.31764984130859,
          36.31415690198353,
        ],
        [
          25.312929153442383,
          36.318029811815386,
        ],
        [
          25.3125,
          36.31505598748668,
        ],
      ],
    ],
  },
};
