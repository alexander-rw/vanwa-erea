import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";

import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const TowerOfNecromancy: Location = {
  id: LocationIds.TowerOfNecromancy,
  type: DataTypeIds.Location,
  description: [
    `The Tower of Necromancy, attached to the Gwanu'andavë Monastery, lies south east of ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Manifest)}, and is the prime place for necromantic research throughout all of Misthalin.`,
    `The Tower is headed by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LilianaVess)}, the Master Necromancer on the continent. The tower itself is a research centre for necromantic - although good aligned overall, the tower has
    license to break necessary rules, provided proper safety precautions are take.`,
    "The Tower has an incredibly large number of defenses, ",
    ["Magical Artifacts", "The tower houses a number of extremely powerful magical artifacts, and there are adequate protections, including powerful arcane wards, spellcasters and monks to protect the area. The vault that itself holds the items is an incredibly well-constructed adamantine vault."],
  ],
};
