const STRING_SPACE = " ";

export const stringToSeparatedCapitals = (input: string, delimiter: string = STRING_SPACE): string => input
  .split("")
  .map(c => (c === c.toUpperCase() ? `${delimiter}${c}` : c))
  .join("");

export const stringToTitleCase = (input: string, joinVal = ""): string => input
  .split(" ")
  .map(word => word.toLowerCase())
  .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
  .join(joinVal);

export const stringToSentenceCase = (input: string): string => input
  .split(" ")
  .map((word, index) => (index === 0
    ? `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
    : word.toLowerCase()))
  .join(" ");

export const humaniseString = (key: string): string => stringToTitleCase(stringToSeparatedCapitals(key), " ");

export const isStringNullOrEmpty = (s: string): boolean => s === null || s === undefined || s === "";

const suffixes = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th",
};

export const numberToOrdinalSuffix = (n: number): string => {
  const orninalRules = Intl.PluralRules("en", { type: "ordinal" });
  return `${n}${suffixes[orninalRules.select(n)]}`;
};
