import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const RevarisGate: MapFeature = {
  id: LocationIds.RevarisGate,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          63.2098388671875,
          40.93011520598305,
        ],
        [
          63.1494140625,
          40.896905775860006,
        ],
        [
          63.19885253906249,
          40.84706035607122,
        ],
        [
          63.24829101562501,
          40.88444793903562,
        ],
        [
          63.2098388671875,
          40.93011520598305,
        ],
      ],
    ],
  },
};
