import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const SeaSide: MapFeature = {
  id: LocationIds.SeaSide,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          13.623089790344238,
          54.92714186454645,
        ],
        [
          13.633689880371094,
          54.91194848995955,
        ],
        [
          13.656005859375,
          54.92378797659372,
        ],
        [
          13.644161224365234,
          54.93118588697108,
        ],
        [
          13.623089790344238,
          54.92714186454645,
        ],
      ],
    ],
  },
};
