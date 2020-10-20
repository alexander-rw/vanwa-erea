import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Jfarra: MapFeature = {
  id: LocationIds.Jfarra,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          36.0412073135376,
          37.75880673169249,
        ],
        [
          36.02790355682373,
          37.75412442617119,
        ],
        [
          36.023826599121094,
          37.74397841428505,
        ],
        [
          36.03472709655761,
          37.740109668882475,
        ],
        [
          36.05009078979492,
          37.740992032124666,
        ],
        [
          36.05764389038086,
          37.74991688438296,
        ],
        [
          36.05343818664551,
          37.76131741114108,
        ],
        [
          36.0412073135376,
          37.75880673169249,
        ],
      ],
    ],
  },
};
