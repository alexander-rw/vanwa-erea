import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { TowerProps } from "../../../../Style/ts/MapStyle";

export const TowerOfEvocation: MapFeature = {
  id: LocationIds.TowerOfEvocation,
  type: "Feature",
  properties: TowerProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          49.52842712402344,
          15.172382304432034,
        ],
        [
          49.52568054199219,
          15.172713659643415,
        ],
        [
          49.52259063720703,
          15.17155391413011,
        ],
        [
          49.52138900756836,
          15.169400084146261,
        ],
        [
          49.52138900756836,
          15.166749186339327,
        ],
        [
          49.5241355895996,
          15.165092358326449,
        ],
        [
          49.528083801269524,
          15.165423724967928,
        ],
        [
          49.53031539916992,
          15.166749186339327,
        ],
        [
          49.53117370605469,
          15.169565764155164,
        ],
        [
          49.530487060546875,
          15.171885270640606,
        ],
        [
          49.52842712402344,
          15.172382304432034,
        ],
      ],
    ],
  },
};
