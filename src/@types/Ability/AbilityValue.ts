export interface AbilityValue {
  value: number;
  modifier: number;
}

export const modFromValue = (value: number): AbilityValue => ({ value, modifier: Math.floor((value - 10) / 2) })