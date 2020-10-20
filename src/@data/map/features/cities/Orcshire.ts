import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Orcshire: MapFeature = {
  id: LocationIds.Orcshire,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          32.54150390625,
          13.186468107797188,
        ],
        [
          32.51850128173828,
          13.108905124689748,
        ],
        [
          32.60467529296875,
          13.092854552762695,
        ],
        [
          32.62012481689453,
          13.182791106894232,
        ],
        [
          32.54150390625,
          13.186468107797188,
        ],
      ],
    ],
  },
};
