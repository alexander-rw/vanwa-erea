import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const PortDremora: MapFeature = {
  id: LocationIds.PortDremora,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          63.65684509277344,
          65.38829302424038,
        ],
        [
          63.63693237304687,
          65.38200104249867,
        ],
        [
          63.65547180175781,
          65.37112952127674,
        ],
        [
          63.678131103515625,
          65.37256024174353,
        ],
        [
          63.65684509277344,
          65.38829302424038,
        ],
      ],
    ],
  },
};
