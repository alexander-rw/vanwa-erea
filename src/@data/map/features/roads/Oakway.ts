import { RoadFeature } from "../../../../@types/Map/MapFeature";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { RoadProps } from "../../../../Style/ts/MapStyle";

export const Oakway: RoadFeature = {
  from: LocationIds.BurghDeRott,
  to: LocationIds.RevarisGate,
  id: LocationIds.Oakway,
  type: "Feature",
  properties: RoadProps,
  geometry: {
    type: "LineString",
    coordinates: [
      [
        61.43383026123047,
        38.989302551359515,
      ],
      [
        61.68823242187499,
        39.11301365149975,
      ],
      [
        61.89697265624999,
        39.21523130910491,
      ],
      [
        62.1112060546875,
        39.32579941789298,
      ],
      [
        62.17163085937499,
        39.37252570201878,
      ],
      [
        62.33642578125001,
        39.50827899034114,
      ],
      [
        62.42980957031251,
        39.60145584096999,
      ],
      [
        62.5341796875,
        39.71141252523694,
      ],
      [
        62.6495361328125,
        39.80009595634838,
      ],
      [
        62.720947265625,
        39.926588421909436,
      ],
      [
        62.8143310546875,
        40.07386810509482,
      ],
      [
        62.874755859375,
        40.166281254206545,
      ],
      [
        62.9791259765625,
        40.329795743702064,
      ],
      [
        63.03955078125,
        40.463666324587685,
      ],
      [
        63.09997558593751,
        40.59727063442024,
      ],
      [
        63.12744140625,
        40.74725696280421,
      ],
      [
        63.15490722656251,
        40.84706035607122,
      ],
      [
        63.149757385253906,
        40.89716528918467,
      ],
    ],
  },
};
