import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const Vvardenbridge: Location = {
  id: LocationIds.Vvardenbridge,
  type: DataTypeIds.Location,
  description: [
    "Vvardenbridge, a small town, ...",
    "Places in the town include:",
    ["Bob's brilliant Axes:", "A general store run by TEXAN BOB"],
    ["Vvardenbridge Combat Academy:", ` Run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LadyDeathknell)}, the vvardenbridge combat academy is a combat school that sits near the Tower Of Illusion in Vvardenbridge.
    The school is mostly run by Lady Deathknell, and is a place that teaches fighters, rangers and rogues.`],

  ],
  population: "600 (78% human, 8% elf, 6% half-elf, 4% dwarf, 2% gnome, 2% other)",
};
