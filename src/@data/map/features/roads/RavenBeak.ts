import { RoadFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { RoadProps } from "../../../../Style/ts/MapStyle";

export const RavensBeak: RoadFeature = {
  from: LocationIds.VoronWeosst,
  to: LocationIds.Levinthal,
  id: LocationIds.RavensBeak,
  type: "Feature",
  properties: RoadProps,
  geometry: {
    type: "LineString",
    coordinates: [
      [
        32.34512329101562,
        56.1325416211539,
      ],
      [
        32.367095947265625,
        56.173845556307036,
      ],
      [
        32.369842529296875,
        56.244113008636035,
      ],
      [
        32.603302001953125,
        56.38578245801786,
      ],
      [
        33.35449218749999,
        56.4199784113855,
      ],
      [
        33.7060546875,
        56.480695390196296,
      ],
      [
        34.12353515625,
        56.523139564372194,
      ],
      [
        34.398193359375,
        56.523139564372194,
      ],
      [
        35.101318359375,
        56.523139564372194,
      ],
      [
        35.89233398437499,
        56.43820369358165,
      ],
      [
        36.243896484375,
        56.4199784113855,
      ],
      [
        36.61743164062499,
        56.29215668507645,
      ],
      [
        36.97998046874999,
        56.15166933290848,
      ],
      [
        37.37548828125,
        56.11493571902952,
      ],
      [
        37.72705078125,
        56.03522578369872,
      ],
      [
        38.18847656249999,
        55.91842985630817,
      ],
      [
        38.5400390625,
        55.92458580482951,
      ],
      [
        38.85864257812499,
        56.016807763203204,
      ],
      [
        39.144287109375,
        56.17002298293205,
      ],
      [
        39.539794921875,
        56.35916436114858,
      ],
      [
        39.90234375,
        56.53525774684848,
      ],
      [
        40.3857421875,
        56.674338416158804,
      ],
      [
        40.67138671874999,
        56.73464864702949,
      ],
      [
        40.968017578125,
        56.77078840398196,
      ],
      [
        41.28662109375,
        56.794862261400546,
      ],
      [
        41.38275146484375,
        56.79899840010183,
      ],
      [
        41.39648437499999,
        56.80012635875,
      ],
    ],
  },
};
