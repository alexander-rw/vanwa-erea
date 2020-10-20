import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Misruul: MapFeature = {
  id: LocationIds.Misruul,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          28.82761001586914,
          47.8174196757853,
        ],
        [
          28.80134582519531,
          47.800587555516934,
        ],
        [
          28.82125854492188,
          47.777751717642104,
        ],
        [
          28.853015899658203,
          47.77913599344391,
        ],
        [
          28.855419158935543,
          47.80185591898276,
        ],
        [
          28.82761001586914,
          47.8174196757853,
        ],
      ],
    ],
  },
};
