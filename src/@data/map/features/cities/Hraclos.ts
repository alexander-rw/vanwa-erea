import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Hraclos: MapFeature = {
  id: LocationIds.Hraclos,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          7.193298339843749,
          27.81235710596082,
        ],
        [
          7.05047607421875,
          27.938607062267074,
        ],
        [
          6.9268798828125,
          27.943459889766487,
        ],
        [
          6.671447753906249,
          27.899776596718088,
        ],
        [
          6.4764404296875,
          27.749177005163983,
        ],
        [
          6.481933593749999,
          27.50096297646164,
        ],
        [
          6.70989990234375,
          27.23753666659069,
        ],
        [
          7.02301025390625,
          27.169138779897086,
        ],
        [
          7.261962890625,
          27.33029517000439,
        ],
        [
          7.341613769531249,
          27.569156172901426,
        ],
        [
          7.27569580078125,
          27.732160709580906,
        ],
        [
          7.193298339843749,
          27.81235710596082,
        ],
      ],
    ],
  },
};
