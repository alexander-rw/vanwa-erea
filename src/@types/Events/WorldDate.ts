import { WorldAge } from "./WorldAge";
import { WorldMonth, ReadableMonths } from "./WorldMonth";

export class WorldDate {
  public static readonly CurrentWorldAge: number = WorldAge.Fifth;

  public static readonly CurrentWorldDate: WorldDate = new WorldDate(WorldAge.Fifth, 172, 2, 5);

  public static readonly DAYS_PER_MONTH: number = 28;

  public static readonly MONTHS_PER_YEAR: number = 13;

  public static readonly DAYS_PER_YEAR: number = WorldDate.DAYS_PER_MONTH * WorldDate.MONTHS_PER_YEAR;

  public static sortChronologically(a: WorldDate, b: WorldDate): number {
    if (b.isAfter(a)) {
      return 1;
    }

    if (b.isBefore(a)) {
      return -1;
    }

    return 0;
  }

  public static daysBetween(first: WorldDate, last: WorldDate): number {
    if (first.age !== last.age) {
      console.log(`First date and last date must be same age to compare: ${first.humanise()}, ${last.humanise()}`);
      return -1;
    }

    const yearDiff = Math.abs(first.year - last.year);
    const monthDiff = Math.abs(first.month - last.month);
    const dayDiff = Math.abs(first.day - last.day);

    return (yearDiff * WorldDate.DAYS_PER_YEAR)
      + (WorldDate.DAYS_PER_MONTH * monthDiff)
      + dayDiff;
  }

  public readonly age: number;

  public readonly year: number;

  public readonly month: number;

  public readonly day: number;

  public constructor(age: number, year: number, month: WorldMonth | number, day: number) {
    this.age = age;
    this.year = year;
    this.month = month;
    this.day = day;

    if (this.age > WorldDate.CurrentWorldAge
      || this.month > WorldDate.MONTHS_PER_YEAR
      || this.day > WorldDate.DAYS_PER_MONTH) {
      throw new Error(`Invalid value provided for date: ${this.age}, ${this.month}, ${this.day}`);
    }
  }

  public iso8601 = (): string => `${this.age}e-${this.year}-${this.month}-${this.day}`;

  public humaniseMonth = (): string => `${ReadableMonths.find(x => x.monthValue === this.month)?.monthName}`;

  public humanise = (): string => `${this.age}e yr ${this.year}, ${this.day} of ${this.humaniseMonth()}`;

  public isSameAge = (otherDate: WorldDate): boolean => this.age === otherDate.age;

  public isSameDate(otherDate: WorldDate): boolean {
    return this.age === otherDate.age
      && this.year === otherDate.year
      && this.month === otherDate.month
      && this.day === otherDate.day;
  }

  public isAfter(otherDate: WorldDate): boolean {
    return this.age > otherDate.age
      && this.year > otherDate.year
      && this.month > otherDate.month
      && this.day > otherDate.day;
  }

  public isBefore(otherDate: WorldDate): boolean {
    return this.age < otherDate.age
      && this.year < otherDate.year
      && this.month < otherDate.month
      && this.day < otherDate.day;
  }

  public daysFrom = (otherDate: WorldDate): number => WorldDate.daysBetween(this, otherDate);
}
