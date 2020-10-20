import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";

export const DreoxidicSea: MapFeature = {
  id: LocationIds.DreoxidicSea,
  type: "Feature",
  properties: {
    fill: "#696a92",
    fillOpacity: 1,
    stroke: "#696a92",
    strokeOpacity: 0.8,
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [56.9604492188, 70],
        [70, 60.0537109375],
        [70, 70],
        [56.9604492188, 70],
      ],
    ],
  },
};
