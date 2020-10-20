import { DeityIds } from "../../Constants/Ids/DeityIds";
import { LocationIds } from "../../Constants/Ids/LocationIds";
import { RaceIds } from "../../Constants/Ids/RaceIds";
import { Alignment } from "../Alignment/Alignment";
import { BaseDataObject } from "../Data/BaseDataObject";
import { DisplayableDataType } from "../Data/DisplayableDataType";

export interface Deity extends BaseDataObject {
  id: DeityIds;
  originalRace: RaceIds;
  alignment: Alignment;
  aliases: string[];
  description: DisplayableDataType;
  displayOrder: number;
  linkedToDeityIds: DeityIds[];
  standardPlacesOfWorship?: LocationIds[];
}
