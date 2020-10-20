import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const TowerOfConjuration: Location = {
  id: LocationIds.TowerOfConjuration,
  type: DataTypeIds.Location,
  description: [
    ["Player Description:", `A green-grey, sickly glowing tower looms over the horizon as you approach. The air smells thick and slightly putrid, and an uneasy feeling sits in your bones.
    As you approach the tower, the trees around you begin to turn white, then cream. They begin to look like bone, as if creatures have been flayed and pieced together in an almost
    unholy fashion. Finally, you reach the tower - A 4 sided, 80 ft tall pillar that shifts in an out, as if it is breathing. There is an eye symbol on each side of the tower.
    Each of the eyes watches over the sickly land that surrounds it, and you feel as if this tower is piercing your very souls.`],
    "An incredibly ancient tower, one of the oldest areas of magic on the continent - the Tower Of Invocations held and taught most of the mages before and during the first age, and was the driving force for the Age Of Arcanum, ",
    `Originally built by King of Elze, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.WraithKing)}, the town that eventually became Manifest after events of Ostarion's un-death, the conjuration tower was built as a way of experimenting with
    conjouring creatures from beyond the material plane. It evenually worked, and the Queen Of Pain used her first true foray into manupulating Ostarian and collapsing an empire to gain enough power to usurp the other sucubi lords in the abyss and gain her position of power that she has held since.
    As a result of this, and Ostarion's self-infusal of Wraith Essence (and inevitably his downfall), the tower was untouched for centuries, until the start of the Age of Arcanum.`,
    ["Tower Makeup", `The tower itself is constructed from the bones of creatures that the Empire of Elze had slain to enact his ritual, which has then grown an ectoplasmic mold around. The tower is a sickly radiant green, and although not dangerous, is physically ofputting to most people who have not experienced the cold glow of the substance before.
    Trees near the tower grow bone-like bark and creatures that are born near the tower have bone protrusions growing from their bodies, often detrimentally to the health of the animal. Sapient creatures are not affected by this for an unknown reason.`],
    `The tower is run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.SavosAren)}, a kind hearted drow wizard whom has headed the college for most of his life. The master wizard of the tower is ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Tolfdir)}, and the librarian is ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.UragGroShub)}, a female orc.`,
    "Locations in and near the tower include:",
    ["The Midden:", "A hidden area below the college that houses the slain un-dead body of Ostarion, and causes the environmental effects of the area that unsettle so many people."],
    ["The courtyard:", "The central courtyard is dominated by a statue of the first Archmage of the College, Shalidor, who is also the supposed founder of the city of Elze, which eventually became Manifest."],
  ],
};
