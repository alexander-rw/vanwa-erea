import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Alinor: MapFeature = {
  id: LocationIds.Alinor,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          25.20787239074707,
          42.84664613000548,
        ],
        [
          25.183496475219727,
          42.83506610125399,
        ],
        [
          25.185127258300778,
          42.81303288210238,
        ],
        [
          25.227012634277344,
          42.813410660584395,
        ],
        [
          25.236454010009766,
          42.83368138733589,
        ],
        [
          25.227699279785156,
          42.85860149067259,
        ],
        [
          25.20787239074707,
          42.84664613000548,
        ],
      ],
    ],
  },
};
