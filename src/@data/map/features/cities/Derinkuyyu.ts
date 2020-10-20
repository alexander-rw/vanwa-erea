import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Derinkuyyu: MapFeature = {
  id: LocationIds.Derinkuyyu,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          43.781890869140625,
          27.720612424153668,
        ],
        [
          43.721466064453125,
          27.71392601558152,
        ],
        [
          43.683013916015625,
          27.69690421685162,
        ],
        [
          43.66722106933594,
          27.655554511395064,
        ],
        [
          43.67889404296875,
          27.619056485441057,
        ],
        [
          43.736572265625,
          27.60871316531578,
        ],
        [
          43.781890869140625,
          27.612972297774377,
        ],
        [
          43.81965637207031,
          27.647039394312074,
        ],
        [
          43.8299560546875,
          27.69629624635759,
        ],
        [
          43.80523681640625,
          27.717573198352596,
        ],
        [
          43.781890869140625,
          27.720612424153668,
        ],
      ],
    ],
  },
};
