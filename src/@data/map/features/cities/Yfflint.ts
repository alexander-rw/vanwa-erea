import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Yfflint: MapFeature = {
  id: LocationIds.Yfflint,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          46.29638671874999,
          15.029685756555674,
        ],
        [
          46.25415802001953,
          14.984254708094547,
        ],
        [
          46.28643035888672,
          14.93781885643826,
        ],
        [
          46.36127471923828,
          14.928198744947622,
        ],
        [
          46.38633728027343,
          14.967339955323169,
        ],
        [
          46.369171142578125,
          15.01609061613553,
        ],
        [
          46.29638671874999,
          15.029685756555674,
        ],
      ],
    ],
  },
};
