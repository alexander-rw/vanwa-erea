export enum WorldMonth {
  Yuletyelde = 1, // (pronounced "yool-teld") (after yule) (spring)
  Midhrin = 2, // (dews drop) (spring)
  Neldemilsch = 3, // (three milk) (spring)
  Viryncuil = 4, // (viryn's life) (spring)
  Bloodsmoon = 5, // (summer)
  Equinox = 6, // (summer)
  Lasahime = 7, // (leaf change) (autumn)
  Harvestfall = 8, // start of (autumn)
  Narquelion = 9, // (meaning: autumn) (autumn)
  Ilmakyerme = 10, // (Ilmater's prayer) (autumn)
  Ravensule = 11, // (ravens breath) (winter)
  Skadisheim = 12, // (Cold home / winter's breath) (winter)
  Taikitalvi = 13 // (Winter's lullaby) (winter)
}

type ReadableMonth = {
  monthName: string;
  monthValue: number;
};

export const ReadableMonths: ReadableMonth[] = Object
  .values(WorldMonth)
  .map((item, index) => ({ monthName: item.toString(), monthValue: index + 1 }))
  .filter(x => x.monthValue <= 13);
