import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const SeersVillage: MapFeature = {
  id: LocationIds.SeersVillage,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          54.03076171874999,
          57.016814017391106,
        ],
        [
          54.01702880859375,
          57.01158038001568,
        ],
        [
          54.0252685546875,
          57.00485033534416,
        ],
        [
          54.043121337890625,
          57.009337167088546,
        ],
        [
          54.03076171874999,
          57.016814017391106,
        ],
      ],
    ],
  },
};
