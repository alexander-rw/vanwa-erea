import { Location } from "../../../@types/Location/Location";
import { DataTypeIds } from "../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../Constants/Ids/LocationIds";

export const KharidianEmpire: Location = {
  id: LocationIds.KharidianEmpire,
  type: DataTypeIds.Location,
  description: [
    `Sitting to the east of Misthalin, the Kharidian Empire is an empire that spans nearly all of the Desert of Kharid - Named so after their first ruler, Kharid the Unconquerable, back at the start of the 2nd age. Kharid The Unconquerable lived for over 1000 years, and pillaged settlement after settlement around Misthalin as time went on.
    After the civil war between Misthalin and the Kharidian Empire at the end of the fourth age, Kefnet the Mindful, Rhonas the Indomitable, and Isperia the Supreme Judge took control of the empire - uniting its people, and stopping the use of any non-divine magic.`,
    /* `Unbeknownst to many people, the real reason that Keftnet and the other Avatars took control is because a group of people threatened to unleash the three 'protectors' of the Kharidian Desert -
    The Scarab, The Locust, and The Scorpion Titans. These three titans form the Azorius Titans, an original trio of God-Killer titans formed in the Age before Ages, when the gods waged war with the titans. The Azorius Titans would have obliterated most if not all life on the continent had it not been for the avatars' ruthless takeover, a takeover that stopped the
    The Avatars themselves were formed from the body of the Azorius titans; created initially in an attempt to try and turn the tide of the Kharid-Misthalin war. */
    "The three Avatars each control an important pillar of the new law that was forced upon the land, in the form of The Azorius Senate.",
    ["Kefnet the Mindful", "heads the Jelenn Column, which forms the laws;"],
    ["Rhonas the Indomitable", "heads the Lyev Column, which enforces the laws;"],
    ["Isperia the Supreme Judge", "heads the Sova Column, which judges the law-breakers."],
    "Kefnet is in charge of the overall decisions, but the three Avatars talk amongst each other and decide what is necessary between them.",
  ],
};
