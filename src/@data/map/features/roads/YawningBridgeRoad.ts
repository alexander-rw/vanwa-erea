import { RoadFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { RoadProps } from "../../../../Style/ts/MapStyle";

export const YawningBridgeRoad: RoadFeature = {
  from: LocationIds.YawningCrossroads,
  to: LocationIds.WhiteBrickWaterway,
  id: LocationIds.YawningBridgeRoad,
  type: "Feature",
  properties: RoadProps,
  geometry: {
    type: "LineString",
    coordinates: [
      [
        57.36305236816406,
        30.58295265945674,
      ],
      [
        57.34657287597657,
        30.572902952176655,
      ],
      [
        57.31773376464844,
        30.55989590270129,
      ],
      [
        57.30125427246094,
        30.54866113850446,
      ],
      [
        57.27447509765625,
        30.539790669306914,
      ],
      [
        57.24357604980469,
        30.53032794236421,
      ],
      [
        57.193450927734375,
        30.52204730013766,
      ],
      [
        57.13920593261719,
        30.51613212366921,
      ],
      [
        57.08633422851562,
        30.50607549756194,
      ],
      [
        57.052001953125,
        30.4912844521002,
      ],
      [
        57.014923095703125,
        30.482408745388476,
      ],
      [
        56.99501037597656,
        30.479449996609706,
      ],
    ],
  },
};
