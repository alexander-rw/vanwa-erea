import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Vvardenbridge: MapFeature = {
  id: LocationIds.Vvardenbridge,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          61.1773681640625,
          14.184511891326222,
        ],
        [
          61.1553955078125,
          14.1525555222226,
        ],
        [
          61.2103271484375,
          14.136575651477944,
        ],
        [
          61.24328613281249,
          14.189837515179631,
        ],
        [
          61.1773681640625,
          14.184511891326222,
        ],
      ],
    ],
  },
};
