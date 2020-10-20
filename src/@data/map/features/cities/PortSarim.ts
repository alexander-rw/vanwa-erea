import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const PortSarim: MapFeature = {
  id: LocationIds.PortSarim,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          60.24490356445312,
          58.84839149694277,
        ],
        [
          60.244946479797356,
          58.8450390900006,
        ],
        [
          60.2528429031372,
          58.8450390900006,
        ],
        [
          60.25275707244872,
          58.84854689866644,
        ],
        [
          60.24490356445312,
          58.84839149694277,
        ],
      ],
    ],
  },
};
