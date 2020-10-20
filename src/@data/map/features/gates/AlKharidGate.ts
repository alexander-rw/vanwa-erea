import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const AlKharidGate: MapFeature = {
  id: LocationIds.AlKharidGate,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          64.3359375,
          15.16227572090282,
        ],
        [
          64.3853759765625,
          15.13576435459581,
        ],
        [
          64.4183349609375,
          15.18348242106006,
        ],
        [
          64.35791015625,
          15.220589019578128,
        ],
        [
          64.3359375,
          15.16227572090282,
        ],
      ],
    ],
  },
};
