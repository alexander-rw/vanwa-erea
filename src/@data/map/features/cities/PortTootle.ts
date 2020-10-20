import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const PortTootle: MapFeature = {
  id: LocationIds.PortTootle,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          49.8779296875,
          6.176054301961396,
        ],
        [
          49.93011474609375,
          5.987606891658272,
        ],
        [
          50.200653076171875,
          6.10232188451477,
        ],
        [
          50.310516357421875,
          6.309838680093361,
        ],
        [
          50.134735107421875,
          6.429942184960368,
        ],
        [
          49.92462158203125,
          6.375353167891235,
        ],
        [
          49.8779296875,
          6.176054301961396,
        ],
      ],
    ],
  },
};
