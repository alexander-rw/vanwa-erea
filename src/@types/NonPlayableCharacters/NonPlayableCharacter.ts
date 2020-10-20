import { LocationIds } from "../../Constants/Ids/LocationIds";
import { NpcIds } from "../../Constants/Ids/NpcIds";
import { BaseDataObject } from "../Data/BaseDataObject";
import { DisplayableDataType } from "../Data/DisplayableDataType";
import { WorldEvent } from "../Events/WorldEvent";

export interface NonPlayableCharacter extends BaseDataObject {
  id: NpcIds;
  accent: string;
  defaultLocation: LocationIds;
  description: DisplayableDataType;
  events?: WorldEvent[];
}
