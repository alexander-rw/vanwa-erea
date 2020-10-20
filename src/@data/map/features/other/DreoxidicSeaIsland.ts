// the small island that housed the forge of the githyanki / dreoxidic sword
import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { IsleOfCrandor } from "../areas/IsleOfCrandor";

export const DreoxidicSeaIsland: MapFeature = {
  id: LocationIds.DreoxidicSeaIsland,
  type: "Feature",
  properties: IsleOfCrandor.properties,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          68.5294,
          69.0042,
        ],
        [
          68.5267,
          69.0010,
        ],
        [
          68.5338,
          69.0009,
        ],
        [
          68.5294,
          69.0042,
        ],
      ],
    ],
  },
};
