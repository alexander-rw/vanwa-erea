import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const NaktamunGate: MapFeature = {
  id: LocationIds.NaktamunGate,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          62.47993469238281,
          30.946402457631088,
        ],
        [
          62.4847412109375,
          30.920487316910396,
        ],
        [
          62.50053405761719,
          30.92402161334387,
        ],
        [
          62.49366760253906,
          30.94993579614793,
        ],
        [
          62.47993469238281,
          30.946402457631088,
        ],
      ],
    ],
  },
};
