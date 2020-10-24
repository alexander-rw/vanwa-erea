import { Location } from "../@types/Location/Location";

export function first<T>(x: T[], predicate: (arg0: T, ...args: unknown[]) => boolean): T {
  const items = x.filter(predicate);
  return items.length > 0
    ? items[0]
    : {} as T;
}

export const mapArray = <T, U>(arr: T[], fn: (t: T) => U): U[] => arr.map(fn);

export const fromDisplayableDataType = (location: Location): [string, string] => {
  const { description, id } = location;
  const data = description[0];
  return [`${id}:`, Array.isArray(data) ? data[1] : data];
};
