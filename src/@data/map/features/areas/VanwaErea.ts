import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";

export const VanwaErea: MapFeature = {
  id: LocationIds.VanwaErea,
  type: "Feature",
  properties: {
    stroke: "#000000",
    fill: "#aad3df",
    fillOpacity: 0,
    strokeOpacity: 0.02,
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [0, 70],
        [0, 0],
        [70, 0],
        [70, 70],
        [0, 70],
      ],
    ],
  },
};
