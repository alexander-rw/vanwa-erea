import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { DefaultCityProps } from "../../../../Style/ts/MapStyle";

export const Uzer: MapFeature = {
  id: LocationIds.Uzer,
  type: "Feature",
  properties: {
    ...DefaultCityProps,
    fillOpacity: 1,
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          63.75366210937499,
          59.369592780878754,
        ],
        [
          63.75640869140625,
          59.3527960830432,
        ],
        [
          63.78662109375001,
          59.35139598294652,
        ],
        [
          63.81134033203125,
          59.356996036895836,
        ],
        [
          63.81134033203125,
          59.37099213046821,
        ],
        [
          63.797607421875,
          59.380785961506966,
        ],
        [
          63.77563476562499,
          59.380785961506966,
        ],
        [
          63.75366210937499,
          59.369592780878754,
        ],
      ],
    ],
  },
};
