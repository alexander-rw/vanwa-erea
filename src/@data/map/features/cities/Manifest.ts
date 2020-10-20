import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Manifest: MapFeature = {
  id: LocationIds.Manifest,
  type: "Feature",
  properties: DefaultCityProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          29.00407791137695,
          10.142100665181424,
        ],
        [
          29.091796875,
          10.10475413038688,
        ],
        [
          29.10381317138672,
          10.145987158732352,
        ],
        [
          29.073257446289062,
          10.198703620830878,
        ],
        [
          29.00665283203125,
          10.200055210450843,
        ],
        [
          28.982276916503906,
          10.174036103430222,
        ],
        [
          29.00407791137695,
          10.142100665181424,
        ],
      ],
    ],
  },
};
