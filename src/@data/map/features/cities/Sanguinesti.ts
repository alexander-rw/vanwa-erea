import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Sanguinesti: MapFeature = {
  id: LocationIds.Sanguinesti,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          41.331939697265625,
          23.36747130375967,
        ],
        [
          41.31340026855469,
          23.361798241134068,
        ],
        [
          41.29966735839844,
          23.351081794194258,
        ],
        [
          41.297607421875,
          23.33595121941127,
        ],
        [
          41.30516052246094,
          23.323971625023002,
        ],
        [
          41.31889343261719,
          23.312621539317988,
        ],
        [
          41.340179443359375,
          23.308207355392696,
        ],
        [
          41.36077880859375,
          23.313882707809807,
        ],
        [
          41.37245178222656,
          23.328385285476894,
        ],
        [
          41.37519836425781,
          23.344147161473412,
        ],
        [
          41.36970520019531,
          23.3592768020801,
        ],
        [
          41.35734558105468,
          23.36684097545155,
        ],
        [
          41.331939697265625,
          23.36747130375967,
        ],
      ],
    ],
  },
};
