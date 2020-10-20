import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const BurghDeRott: MapFeature = {
  id: LocationIds.BurghDeRott,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          61.44927978515625,
          38.982897808179985,
        ],
        [
          61.434173583984375,
          38.989302551359515,
        ],
        [
          61.424560546875,
          38.977026284557624,
        ],
        [
          61.43966674804688,
          38.972755779745064,
        ],
        [
          61.44927978515625,
          38.982897808179985,
        ],
      ],
    ],
  },
};
