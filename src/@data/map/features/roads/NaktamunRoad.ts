import { RoadFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { RoadProps } from "../../../../Style/ts/MapStyle";

export const NaktamunRoad: RoadFeature = {
  from: LocationIds.YawningCrossroads,
  to: LocationIds.NaktamunGate,
  id: LocationIds.NaktamunRoad,
  type: "Feature",
  properties: RoadProps,
  geometry: {
    type: "LineString",
    coordinates: [
      [
        57.36236572265626,
        30.582361529037794,
      ],
      [
        58.20556640625,
        30.619004797647808,
      ],
      [
        59.0185546875,
        30.675715404167743,
      ],
      [
        59.88647460937499,
        30.713503990354965,
      ],
      [
        60.72143554687499,
        30.779598396611537,
      ],
      [
        61.754150390625,
        30.80791068136646,
      ],
      [
        62.337799072265625,
        30.876297595828756,
      ],
      [
        62.45315551757813,
        30.925788712587014,
      ],
      [
        62.473411560058594,
        30.94286898846197,
      ],
      [
        62.479591369628906,
        30.946696907497792,
      ],
    ],
  },
};
