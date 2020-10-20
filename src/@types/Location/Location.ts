import { LocationIds } from "../../Constants/Ids/LocationIds";
import { BaseDataObject } from "../Data/BaseDataObject";
import { DisplayableDataType } from "../Data/DisplayableDataType";
import { WorldEvent } from "../Events/WorldEvent";
import { NonPlayableCharacter } from "../NonPlayableCharacters/NonPlayableCharacter";

export interface Location extends BaseDataObject {
  id: LocationIds;
  description: DisplayableDataType;
  population?: string;
  npcs?: NonPlayableCharacter[];
  events?: WorldEvent[];
}
