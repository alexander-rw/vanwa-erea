import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

const sa = "Sanctum Arcanum";

export const TowerOfEnchantment: Location = {
  id: LocationIds.TowerOfEnchantment,
  type: DataTypeIds.Location,
  description: [
    `The ${LocationIds.TowerOfEnchantment} is the largest magic school and organisation in Misthalin, and is located in the Tidehollow, near the source of the river Vvarden in Vvardenrock.
    The ${sa} is the top magical school in Misthalin and is known for its teaching of Enchantment & Charm spells. It is also well known for being the most famous place on the continent for creating incredibly powerful magical items and artifacts.
    The building was constructed of dark, bristling stone and was very castle-like, with side-turrets, flying buttresses, and balconies.
    Members of the `,
    ["Sorcerers, Wizards, and Artificers:", `Importantly, the ${sa} is one of the very few places in the country that is able to suitably educate Sorcerers to a very high degree. The School is headed by three powerful mages:`],
    ["The Grand Artificer:", `The Sanctum of Artificers, headed by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Tezzeret)}, a violent but incredibly accomplished artificer well known for creating powerful weapons of destruction that caused many deaths during the Misthalin-Kharidian war.
    He never has more than three artificer apprentices at one time, and is borderline abusive to many people, his students included.`],
    ["The Grand Magus:", `The Sanctum of Sorcerers, headed by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Rubick)}, the son of the late ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Aghanim)}, whom held the title of Grand Magus before Rubick.`],
    ["The Grand Invoker:", `The Sanctum of Wizards, headed by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.KaelTheInvoker)}, is `],
    ["Head of General Studies", `The school's main teacher of most magical studies, fighting magic, and the school's spokesperson, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.AugrekBouldershoulder)} is a fierce ginger haired dwarf who doesn't take shit from anyone. She's an accomplished Sorcerer and Wizard, and teaches newer students magic for the academy.`],
    "The school was incredibly selective of its students, with new mages needing either a letter of recommendataion from another mage, or to be selected by one of the Grand Heads or the Head of General Studies.",
  ],
};
