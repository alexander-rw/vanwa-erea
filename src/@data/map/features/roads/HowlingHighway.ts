import { RoadFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { RoadProps } from "../../../../Style/ts/MapStyle";

export const HowlingHighway: RoadFeature = {
  from: LocationIds.PortSarim,
  to: LocationIds.PortDremora,
  id: LocationIds.HowlingHighway,
  type: "Feature",
  properties: RoadProps,
  geometry: {
    type: "LineString",
    coordinates: [
      [
        60.24490356445312,
        58.84839149694277,
      ],
      [
        60.24679183959961,
        58.85469580715314,
      ],
      [
        60.250396728515625,
        58.8606438924711,
      ],
      [
        60.252628326416016,
        58.86774474539531,
      ],
      [
        60.262069702148445,
        58.87617511626634,
      ],
      [
        60.53466796874999,
        59.153403092050375,
      ],
      [
        60.8203125,
        59.366793908532124,
      ],
      [
        61.14990234374999,
        59.678835236960765,
      ],
      [
        61.61132812500001,
        60.07580342475969,
      ],
      [
        61.72119140625,
        60.392147922518845,
      ],
      [
        61.94091796875,
        60.74842446462361,
      ],
      [
        62.05078125,
        61.03701223240187,
      ],
      [
        62.24853515624999,
        61.39671887310411,
      ],
      [
        62.46826171874999,
        61.78351338713719,
      ],
      [
        62.62207031249999,
        62.04213770379758,
      ],
      [
        62.8857421875,
        62.35980451003884,
      ],
      [
        63.2373046875,
        62.74466511739286,
      ],
      [
        63.58886718749999,
        62.90522700054292,
      ],
      [
        64.00634765625,
        63.342272727869,
      ],
      [
        64.423828125,
        63.75334975181205,
      ],
      [
        64.44580078125,
        64.09140752262307,
      ],
      [
        64.64355468749999,
        64.41592147626879,
      ],
      [
        64.5611572265625,
        64.63329214257156,
      ],
      [
        64.368896484375,
        64.75773249838018,
      ],
      [
        64.193115234375,
        64.89092778318255,
      ],
      [
        64.0447998046875,
        65.0025821781929,
      ],
      [
        63.8580322265625,
        65.11608336877725,
      ],
      [
        63.73168945312501,
        65.24750816096882,
      ],
      [
        63.6492919921875,
        65.34622250665987,
      ],
      [
        63.656158447265625,
        65.3719879629086,
      ],
    ],
  },
};
