
import { MapFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { TowerProps } from "../../../../Style/ts/MapStyle";

export const TempleOfNevermore: MapFeature = {
  id: LocationIds.TempleOfNevermore,
  type: "Feature",
  properties: TowerProps,
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          46.51885986328124,
          42.88602714832883,
        ],
        [
          46.45294189453125,
          42.85784648372956,
        ],
        [
          46.44470214843749,
          42.8215952943695,
        ],
        [
          46.483154296875,
          42.817566071581616,
        ],
        [
          46.51885986328124,
          42.8215952943695,
        ],
        [
          46.54083251953125,
          42.837709559849614,
        ],
        [
          46.5435791015625,
          42.86589941517495,
        ],
        [
          46.531734466552734,
          42.878480017739044,
        ],
        [
          46.51885986328124,
          42.88602714832883,
        ],
      ],
    ],
  },
};
