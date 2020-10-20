import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const YawningCrossroads: MapFeature = {
  id: LocationIds.YawningCrossroads,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          57.30468749999999,
          30.581179257386985,
        ],
        [
          57.36236572265626,
          30.58177039501452,
        ],
        [
          57.358245849609375,
          30.626686305637364,
        ],
        [
          57.305374145507805,
          30.622550184776674,
        ],
        [
          57.30468749999999,
          30.581179257386985,
        ],
      ],
    ],
  },
};
