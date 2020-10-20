import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { TowerProps } from "../../../../Style/ts/MapStyle";

export const TowerOfAbjuration: MapFeature = {
  id: LocationIds.TowerOfAbjuration,
  type: "Feature",
  properties: TowerProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          20.16443967819214,
          55.24737470910176,
        ],
        [
          20.164053440093994,
          55.24728908772931,
        ],
        [
          20.16368865966797,
          55.2470444542204,
        ],
        [
          20.16368865966797,
          55.24657964640584,
        ],
        [
          20.164074897766113,
          55.24637170430819,
        ],
        [
          20.16463279724121,
          55.24637170430819,
        ],
        [
          20.165019035339355,
          55.246542950820576,
        ],
        [
          20.165297985076904,
          55.24679981920599,
        ],
        [
          20.165297985076904,
          55.2470444542204,
        ],
        [
          20.16510486602783,
          55.247252392798956,
        ],
        [
          20.164825916290283,
          55.24735024587131,
        ],
        [
          20.16443967819214,
          55.24737470910176,
        ],
      ],
    ],
  },
};
