import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Atmorra: MapFeature = {
  id: LocationIds.Atmorra,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          30.936813354492184,
          20.96143961409684,
        ],
        [
          30.925827026367184,
          20.922321041811546,
        ],
        [
          30.958099365234375,
          20.912058741251847,
        ],
        [
          30.986251831054688,
          20.92937596585931,
        ],
        [
          30.98968505859375,
          20.95823355839321,
        ],
        [
          30.97663879394531,
          20.981956742832327,
        ],
        [
          30.936813354492184,
          20.96143961409684,
        ],
      ],
    ],
  },
};
