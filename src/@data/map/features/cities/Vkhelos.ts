import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Vkhelos: MapFeature = {
  id: LocationIds.Vkhelos,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          8.455352783203125,
          20.964004409178308,
        ],
        [
          8.463592529296875,
          20.951179993976236,
        ],
        [
          8.570709228515625,
          20.983238969861358,
        ],
        [
          8.631134033203125,
          20.960157200061882,
        ],
        [
          8.701171874999998,
          21.08578142839556,
        ],
        [
          8.664093017578125,
          21.21642046916312,
        ],
        [
          8.463592529296875,
          21.224101526391557,
        ],
        [
          8.353729248046875,
          21.161361200807214,
        ],
        [
          8.345489501953123,
          21.04349121680354,
        ],
        [
          8.455352783203125,
          20.964004409178308,
        ],
      ],
    ],
  },
};
