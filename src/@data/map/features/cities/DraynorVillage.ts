import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const DraynorVillage: MapFeature = {
  id: LocationIds.DraynorVillage,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          59.03228759765625,
          13.894077328726347,
        ],
        [
          59.0185546875,
          13.862080472921035,
        ],
        [
          59.05975341796874,
          13.846080390642838,
        ],
        [
          59.07623291015624,
          13.880745842025602,
        ],
        [
          59.03228759765625,
          13.894077328726347,
        ],
      ],
    ],
  },
};
