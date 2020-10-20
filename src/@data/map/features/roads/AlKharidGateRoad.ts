import { RoadFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { RoadProps } from "../../../../Style/ts/MapStyle";

export const AlKharidGateRoad: RoadFeature = {
  from: LocationIds.Vvardenbridge,
  to: LocationIds.AlKharidGate,
  id: LocationIds.AlKharidGateRoad,
  type: "Feature",
  properties: RoadProps,
  geometry: {
    type: "LineString",
    coordinates: [
      [
        61.24191284179687,
        14.189837515179631,
      ],
      [
        61.27349853515624,
        14.185843309021124,
      ],
      [
        61.33941650390625,
        14.195163013871356,
      ],
      [
        61.41632080078126,
        14.216463756160174,
      ],
      [
        61.52343749999999,
        14.212470019701122,
      ],
      [
        61.776123046875,
        14.216463756160174,
      ],
      [
        62.18811035156251,
        14.33890401019508,
      ],
      [
        62.54516601562499,
        14.43468021529728,
      ],
      [
        62.81982421875001,
        14.455958231194037,
      ],
      [
        62.9791259765625,
        14.466596475463248,
      ],
      [
        63.16040039062499,
        14.466596475463248,
      ],
      [
        63.336181640625,
        14.466596475463248,
      ],
      [
        63.4844970703125,
        14.466596475463248,
      ],
      [
        63.63830566406251,
        14.498508149446216,
      ],
      [
        63.77563476562499,
        14.599531422729925,
      ],
      [
        63.8909912109375,
        14.647368383896632,
      ],
      [
        63.96240234375,
        14.716447783648723,
      ],
      [
        64.039306640625,
        14.769570907465978,
      ],
      [
        64.10522460937499,
        14.83330151553516,
      ],
      [
        64.1876220703125,
        14.960706354429746,
      ],
      [
        64.281005859375,
        15.093339268117337,
      ],
      [
        64.3088150024414,
        15.130793103807026,
      ],
      [
        64.32769775390625,
        15.150014626805946,
      ],
      [
        64.3359375,
        15.162607091959151,
      ],
    ],
  },
};
