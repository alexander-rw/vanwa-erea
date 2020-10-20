import { RoadFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { RoadProps } from "../../../../Style/ts/MapStyle";

export const BloodfruitAvenue: RoadFeature = {
  from: LocationIds.Jfarra,
  to: LocationIds.Rorekstead,
  id: LocationIds.BloodfruitAvenue,
  type: "Feature",
  properties: RoadProps,
  geometry: {
    type: "LineString",
    coordinates: [
      [
        36.05343818664551,
        37.76135133865817,
      ],
      [
        36.112060546875,
        37.900865092570065,
      ],
      [
        36.177978515625,
        38.05674222065296,
      ],
      [
        36.2109375,
        38.20365531807149,
      ],
      [
        36.36474609375,
        38.62545397209084,
      ],
      [
        36.485595703125,
        38.96795115401593,
      ],
      [
        36.661376953125,
        39.35129035526705,
      ],
      [
        36.80419921875,
        39.68182601089365,
      ],
      [
        36.903076171875,
        39.774769485295465,
      ],
      [
        36.97998046874999,
        40.052847601823984,
      ],
      [
        37.10083007812499,
        40.47202439692057,
      ],
      [
        37.210693359375,
        40.763901280945866,
      ],
      [
        37.28759765625,
        41.13729606112276,
      ],
      [
        37.452392578125,
        41.541477666790286,
      ],
      [
        37.55126953125,
        41.83682786072714,
      ],
      [
        37.650146484375,
        42.147114459220994,
      ],
      [
        37.716064453125,
        42.48830197960227,
      ],
      [
        37.73323059082031,
        42.55409191714403,
      ],
      [
        37.74559020996094,
        42.587971985214814,
      ],
      [
        37.75331497192383,
        42.61096959812047,
      ],
    ],
  },
};