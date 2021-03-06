import { RoadFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { RoadProps } from "../../../../Style/ts/MapStyle";

export const AtmorranTrail: RoadFeature = {
  from: LocationIds.Yfflint,
  to: LocationIds.Atmorra,
  id: LocationIds.AtmorranTrail,
  type: "Feature",
  properties: RoadProps,
  geometry: {
    type: "LineString",
    coordinates: [
      [
        46.25518798828125,
        14.985912945277482,
      ],
      [
        46.03271484375,
        15.199386048559994,
      ],
      [
        45.74707031249999,
        15.30537953043674,
      ],
      [
        45.1318359375,
        15.390135715305217,
      ],
      [
        44.45068359375,
        15.623036831528264,
      ],
      [
        44.14306640625,
        15.792253570362446,
      ],
      [
        43.57177734374999,
        16.06692895745012,
      ],
      [
        43.30810546875,
        16.36230951024085,
      ],
      [
        42.95654296875,
        16.509832826905846,
      ],
      [
        42.36328124999999,
        16.846605106396304,
      ],
      [
        41.7041015625,
        17.16178591271515,
      ],
      [
        41.30859375,
        17.308687886770034,
      ],
      [
        40.42968749999999,
        17.58119402650602,
      ],
      [
        39.90234375,
        17.832374329567518,
      ],
      [
        39.04541015625,
        18.187606552494625,
      ],
      [
        38.4521484375,
        18.396230138028827,
      ],
      [
        37.72705078125,
        18.437924653474408,
      ],
      [
        36.67236328125,
        19.041348796589013,
      ],
      [
        36.0791015625,
        19.2489223284628,
      ],
      [
        35.31005859375,
        19.601194161263145,
      ],
      [
        34.82666015625,
        19.746024239625427,
      ],
      [
        33.68408203125,
        20.035289711352377,
      ],
      [
        33.0908203125,
        20.05593126519445,
      ],
      [
        32.3876953125,
        20.20034600649375,
      ],
      [
        31.772460937500004,
        20.50935458871459,
      ],
      [
        31.39892578125,
        20.817741019786485,
      ],
      [
        31.113281249999996,
        20.92039691397189,
      ],
      [
        31.039123535156246,
        20.937713175055322,
      ],
      [
        31.00067138671875,
        20.951821240845895,
      ],
      [
        30.98968505859375,
        20.95823355839321,
      ],
    ],
  },
};
