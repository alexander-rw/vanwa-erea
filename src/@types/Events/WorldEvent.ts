import { v4 } from "uuid";

import { DataTypeIds } from "../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../Constants/Ids/LocationIds";
import { BaseDataObject } from "../Data/BaseDataObject";

import { WorldDate } from "./WorldDate";

export class WorldEvent implements BaseDataObject {
  public readonly happenedAtLocation: LocationIds;

  public readonly date: WorldDate;

  public readonly description: string;

  public readonly type: DataTypeIds;

  public readonly id: string;

  constructor(happenedAtLocation: LocationIds, date: WorldDate, description: string) {
    this.type = DataTypeIds.WorldEvent;
    this.id = v4();
    this.happenedAtLocation = happenedAtLocation;
    this.date = date;
    this.description = description;
  }

  public humanise = (): string => `${this.date.humanise()}. ${this.description}`;

  public static sortEvents(a: WorldEvent, b: WorldEvent): number {
    const ad = a.date;
    const bd = b.date;

    return bd.age - ad.age
      || bd.year - ad.year
      || bd.month - ad.month
      || bd.day - ad.day
      || b.description.localeCompare(a.description);
  }
}
