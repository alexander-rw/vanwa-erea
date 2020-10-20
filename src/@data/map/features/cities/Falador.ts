import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Falador: MapFeature = {
  id: LocationIds.Falador,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          53.839874267578125,
          25.5114606200392,
        ],
        [
          53.84880065917969,
          25.4265321395547,
        ],
        [
          53.96209716796875,
          25.443274612305746,
        ],
        [
          53.94836425781249,
          25.527571660479637,
        ],
        [
          53.839874267578125,
          25.5114606200392,
        ],
      ],
    ],
  },
};
