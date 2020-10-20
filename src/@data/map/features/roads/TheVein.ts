import { RoadFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { RoadProps } from "../../../../Style/ts/MapStyle";

export const TheVein: RoadFeature = {
  from: LocationIds.Sanguinesti,
  to: LocationIds.Derinkuyyu,
  id: LocationIds.TheVein,
  type: "Feature",
  properties: RoadProps,
  geometry: {
    type: "LineString",
    coordinates: [
      [
        41.35734558105468,
        23.36810162907169,
      ],
      [
        42.29736328125,
        24.497146320571886,
      ],
      [
        42.7587890625,
        25.418470119273117,
      ],
      [
        43.033447265625,
        26.28356493253137,
      ],
      [
        43.341064453125,
        27.044449217654016,
      ],
      [
        43.5772705078125,
        27.45466493898314,
      ],
      [
        43.665504455566406,
        27.612363860418835,
      ],
      [
        43.679237365722656,
        27.619056485441057,
      ],
    ],
  },
};
