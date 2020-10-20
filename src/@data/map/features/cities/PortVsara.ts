import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const PortVsara: MapFeature = {
  id: LocationIds.PortVsara,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          42.89131164550781,
          7.017756953860871,
        ],
        [
          43.062286376953125,
          7.094760217247822,
        ],
        [
          43.144683837890625,
          7.221480842014356,
        ],
        [
          43.13507080078124,
          7.338631773903349,
        ],
        [
          42.92564392089844,
          7.346122940503172,
        ],
        [
          42.782135009765625,
          7.254177200007931,
        ],
        [
          42.773895263671875,
          7.172431875064502,
        ],
        [
          42.89131164550781,
          7.017756953860871,
        ],
      ],
    ],
  },
};
