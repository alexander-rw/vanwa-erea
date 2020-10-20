import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const AeolDriasMonastery: MapFeature = {
  id: LocationIds.AeolDriasMonastery,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          26.275691986083984,
          38.926764818846806,
        ],
        [
          26.26959800720215,
          38.92269161234988,
        ],
        [
          26.276121139526367,
          38.91668153637508,
        ],
        [
          26.28101348876953,
          38.92249128468549,
        ],
        [
          26.275691986083984,
          38.926764818846806,
        ],
      ],
    ],
  },
};
