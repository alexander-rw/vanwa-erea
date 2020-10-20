import { RoadFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { RoadProps } from "../../../../Style/ts/MapStyle";

export const Dryroad: RoadFeature = {
  from: LocationIds.AlKharidGate,
  to: LocationIds.AlKharid,
  id: LocationIds.Dryroad,
  type: "Feature",
  properties: RoadProps,
  geometry: {
    type: "LineString",
    coordinates: [
      [
        64.41902160644531,
        15.18348242106006,
      ],
      [
        64.48974609375,
        15.167577595475697,
      ],
      [
        64.775390625,
        15.188783763403267,
      ],
      [
        64.918212890625,
        15.167577595475697,
      ],
      [
        65.093994140625,
        15.125158878585296,
      ],
      [
        65.247802734375,
        15.061514891072227,
      ],
      [
        65.4345703125,
        15.029685756555674,
      ],
      [
        65.58837890625,
        15.029685756555674,
      ],
      [
        65.7861328125,
        15.029685756555674,
      ],
      [
        66.082763671875,
        14.923554399044052,
      ],
      [
        66.214599609375,
        14.88108715909066,
      ],
      [
        66.434326171875,
        14.88108715909066,
      ],
      [
        66.588134765625,
        14.912938374530889,
      ],
      [
        66.829833984375,
        14.891704754215477,
      ],
      [
        67.08251953125,
        14.891704754215477,
      ],
      [
        67.236328125,
        14.955399325942631,
      ],
      [
        67.313232421875,
        14.987239525774244,
      ],
      [
        67.32833862304688,
        15.013769408093117,
      ],
      [
        67.3297119140625,
        15.032338365918722,
      ],
      [
        67.33383178710938,
        15.050905707724771,
      ],
      [
        67.34481811523438,
        15.060188772055131,
      ],
    ],
  },
};
