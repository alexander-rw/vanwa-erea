import { WorldDate } from "../../../../@types/Events/WorldDate";
import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const TowerOfEvocation: Location = {
  id: LocationIds.TowerOfEvocation,
  type: DataTypeIds.Location,
  description: [
    `Ultimyr Academy, the premier place for Evocation studies in Misthalin, is a large tower in Hupperdook that sits on the upper shelf. Up until ${new WorldDate(5, 169, 5, 10).humanise()}, it was run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Velethuil)}.`,
    `The academy is now run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.DemnokLannik)}, the previous chief curator of the academy.`,
  ],
};
