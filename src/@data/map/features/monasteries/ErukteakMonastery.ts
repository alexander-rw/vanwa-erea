import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const ErukteakMonastery: MapFeature = {
  id: LocationIds.ErukteakMonastery,
  type: "Feature",
  properties: {
    ...DefaultCityProps,
    stroke: "#ffffff",
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          29.104006290435787,
          42.05843798126955,
        ],
        [
          29.103620052337646,
          42.058023760775704,
        ],
        [
          29.1041886806488,
          42.05770512778803,
        ],
        [
          29.104467630386353,
          42.05820697401967,
        ],
        [
          29.104006290435787,
          42.05843798126955,
        ],
      ],
    ],
  },
};
