import { Location } from "../@types/Location/Location";

export function first<T>(x: T[], predicate: (arg0: T, ...args) => boolean): T {
  const items = x.filter(predicate);
  return items.length > 0
    ? items[0]
    : {} as T;
}

export const mapArray = <T, U>(array: T[], mapFn: (t: T) => U): U[] => array.map(mapFn);

export const fromDisplayableDataType = (location: Location): [string, string] => {
  const { description, id } = location;
  const data = description[0];
  return [`${id}:`, Array.isArray(data) ? data[1] : data];
};
