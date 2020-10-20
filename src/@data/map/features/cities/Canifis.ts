import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Canifis: MapFeature = {
  id: LocationIds.Canifis,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          60.513038635253906,
          63.84066844285508,
        ],
        [
          60.48763275146484,
          63.803863843567306,
        ],
        [
          60.599212646484375,
          63.79673970662015,
        ],
        [
          60.64075469970703,
          63.853682419810575,
        ],
        [
          60.513038635253906,
          63.84066844285508,
        ],
      ],
    ],
  },
};
