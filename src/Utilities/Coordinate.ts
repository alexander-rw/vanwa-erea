import { Position } from "../@types/Deities/Graph/GraphTypes";

export const asCartesian = ([r, theta]: [number, number]): Position => ({
  x: r * Math.cos(theta),
  y: r * Math.sin(theta),
});
