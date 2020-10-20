import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Rorekstead: MapFeature = {
  id: LocationIds.Rorekstead,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          37.766618728637695,
          42.647091553959136,
        ],
        [
          37.74189949035644,
          42.64456622475866,
        ],
        [
          37.735633850097656,
          42.62164417589936,
        ],
        [
          37.75348663330078,
          42.61103276668411,
        ],
        [
          37.78764724731445,
          42.61166444879691,
        ],
        [
          37.79751777648926,
          42.632443217615524,
        ],
        [
          37.79013633728027,
          42.64980616851369,
        ],
        [
          37.766618728637695,
          42.647091553959136,
        ],
      ],
    ],
  },
};
