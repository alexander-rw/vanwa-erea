import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Basilaris: MapFeature = {
  id: LocationIds.Basilaris,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          38.88816833496094,
          37.50999818321275,
        ],
        [
          38.871002197265625,
          37.4982866541374,
        ],
        [
          38.86344909667969,
          37.46913603922164,
        ],
        [
          38.927650451660156,
          37.46314104528325,
        ],
        [
          38.929710388183594,
          37.501010429493284,
        ],
        [
          38.92833709716797,
          37.52579221894634,
        ],
        [
          38.88816833496094,
          37.50999818321275,
        ],
      ],
    ],
  },
};
