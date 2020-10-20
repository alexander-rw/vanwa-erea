import { Position } from "geojson";
import { toRadians } from "ol/math";

import { ReadableDistance } from "../@types/Distance/ReadableDistance";

import { WALKING_SPEED_KM_PER_DAY, HORSE_SPEED_KM_PER_DAY, WINDWALK_SPEED_KM_PER_DAY } from "./Movement";

export const EarthRadiusKm = 6371;

export const greatCircleDistance = ([initLat, initLng]: [number, number], [finalLat, finalLng]: [number, number]): number => {
  const φ1 = toRadians(initLat);
  const φ2 = toRadians(finalLat);
  const Δφ = toRadians(finalLat - initLat);
  const Δλ = toRadians(finalLng - initLng);

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2)
        + Math.cos(φ1) * Math.cos(φ2)
        * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const arcLength = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EarthRadiusKm * arcLength;
};

export const calculateLineStringLength = (coordinates: Position[]): number => {
  let distance = 0;

  for (let i = 0; i < coordinates.length; i += 1) {
    const currentIndex = i;
    const nextIndex = i + 1;
    if (nextIndex >= coordinates.length) {
      break;
    }
    const [curX, curY] = coordinates[currentIndex];
    const [nextX, nextY] = coordinates[nextIndex];
    distance += greatCircleDistance([curY, curX], [nextY, nextX]);
  }

  return distance;
};

export const userFriendlyDistance = (initial: Position, final: Position): ReadableDistance => {
  const [initX, initY] = initial;
  const [finX, finY] = final;
  const d = greatCircleDistance([initY, initX], [finY, finX]);

  const distanceValues = [
    WALKING_SPEED_KM_PER_DAY,
    HORSE_SPEED_KM_PER_DAY,
    WINDWALK_SPEED_KM_PER_DAY,
  ].map(dist => d / dist)
    .map((timeInDays: number) => {
      if (timeInDays < 1) {
        const timeInHours = timeInDays * 24;

        if (timeInHours < 1) {
          return `${Math.ceil(timeInHours * 60)} minutes`;
        }
        return `${Math.ceil(timeInHours)} hours`;
      }

      return `${timeInDays.toFixed(1)} days`;
    });

  const [walking, horse, windwalk] = distanceValues;

  return {
    walking: `Walking: ${walking}`,
    horse: `Horse: ${horse}`,
    windwalk: `Windwalk: ${windwalk}`,
    distance: `${d.toFixed(1)} km`,
  };
};
