import { WorldDate } from "../@types/Events/WorldDate";

describe("WorldDate", () => {
  it("daysBetween should calculate time durations in days correctly", () => {
    expect(WorldDate.daysBetween(new WorldDate(5, 1, 1, 1), new WorldDate(5, 2, 1, 1))).toEqual(364);
    expect(WorldDate.daysBetween(new WorldDate(5, 1, 1, 1), new WorldDate(5, 1, 1, 2))).toEqual(1);
    expect(WorldDate.daysBetween(new WorldDate(5, 1, 2, 1), new WorldDate(5, 1, 1, 1))).toEqual(28);
    expect(WorldDate.daysBetween(new WorldDate(5, 2, 2, 1), new WorldDate(5, 2, 1, 15))).toEqual(28 + 14);
    expect(WorldDate.daysBetween(new WorldDate(5, 2, 2, 19), new WorldDate(5, 2, 1, 15))).toEqual(28 - 19 + 15);
  });

  it("daysBetween returns -1 when the ages do not match", () => {
    const date1 = new WorldDate(4, 1, 1, 1);
    const date2 = new WorldDate(5, 1, 1, 1);
    expect(WorldDate.daysBetween(date1, date2)).toEqual(-1);
  });
});
