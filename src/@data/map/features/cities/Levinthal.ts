import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Levinthal: MapFeature = {
  id: LocationIds.Levinthal,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          41.476478576660156,
          56.8491597250992,
        ],
        [
          41.403865814208984,
          56.84080416853166,
        ],
        [
          41.39631271362304,
          56.799938367998436,
        ],
        [
          41.51802062988281,
          56.79918639556634,
        ],
        [
          41.5363883972168,
          56.82483893194794,
        ],
        [
          41.52608871459961,
          56.850755518121424,
        ],
        [
          41.476478576660156,
          56.8491597250992,
        ],
      ],
    ],
  },
};
