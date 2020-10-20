import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const SeersVillage: Location = {
  id: LocationIds.SeersVillage,
  type: DataTypeIds.Location,
  description: [
    "Seer's Village, a tiny village in the north of misthalin, is a strange Place. The town, if some call it that, is little more than two buildings, one looming over the other almost hungrily in its still stance.",
    ["Febold Feboldson's House:", "A tiny shack with three rooms, the Feboldson house is home to the Feboldson family - whom provide the food for most of the (few) inhabitants of the village."],
    [`${LocationIds.TowerOfDivination}:`, `The Palantir's Eye, the premier place for Divination in Misthalin, is a small two-storey stone building with very little space. The building is simple; A ground-floor room with three beds, a small living space, and
     cooking area, and an upstairs that contains the scrying pool and a small experimentation desk for its inhabitants. The Prime Seer is ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.NefirTheOracle)}, and Palantir's Eye is also home to ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.IshKafelTheDarkSeer)}, a moon elf archdruid whom protects the area and acts as a consul for ${NpcIds.NefirTheOracle}.
     There has not been another prime seer for an extremely long time; it is a process that must be carefully chosen, and the next Prime Seer must be chosen by the current prime seer, as well as Ish'Kafel, the Dark Seer.`],
    `There is also a small stables outside the ${LocationIds.TowerOfDivination}, although it only holds two horses for the inhabitants of Febold's house if they need to use the animals for farming work.`,
  ],
};
