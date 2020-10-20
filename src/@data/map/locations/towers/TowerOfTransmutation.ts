import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const TowerOfTransmutation: Location = {
  id: LocationIds.TowerOfTransmutation,
  type: DataTypeIds.Location,
  description: [
    `The Tower of Transmutation, known to most by its proper name the 'Host Tower of the Arcane' lies slightly south of the ringed city, within the Agrarian a large teal-crystal tree that houses most of the most able transmuters within the kingdom.
    The original transmuters that founded the city built this tower after creating the two large walls that surround the city of ${dataItemToLinkable(DataTypeIds.Location, LocationIds.VoronWeosst)} and its outer rings.`,
    `The tower itself is a huge crystal tree that towers over the nearby stone walls, as well as the surrounding farmland. It was spawned from a crystalline forest seed that was grown, and then
    carved out to live in. The tower is unusual in that a druid conclave known as the Selesnya live in the tower, and tend to the area nearby the tower, as well as providing an alternative point of view
    for the many scholars that study there, teaching a more natural approach to transmutation that allows scholars of the community to be incredibly diverse and creative with their transmutative abilities.`,
    `The tower is headed by two powerful archmages (${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ArchmageQuintus)} and ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ArchmageMorkai)}), and a powerful archdruid, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ArchdruidSydney)}. These three are the teachers of the establishment.`,
    "The Tower has 11 levels, with most being off limits to anyone that is not a member of the tower's wizarding community, and the very upper levels being off limits to all except the three archmages of the tower.",
    ["Courtyard & Stables (Level 1):", "At the base of the tower, a number of trees open up to a clearing, with the two other Selesnya druids living in a small building attached to the stables. The druids look after a number of animals in the stable, and provide horses to wizards that wish to travel to the nearby city and cannot do so by another means."],
    ["Entry Hall (Level 2)", "The entry hall of the tower, this is a large open room with little in, apart from some paintings of current and previous heads of the tower. There is also a two-way mirror for communication to the archmage in this room, although it is rarely answered. The entry hall also contains the Teleportation Sigil for the tower and is often guarded by two mages each day."],
    ["Living Quarters (Levels 3-6)", "The living quarters of most of the wizards that live here. There is usually around 12 students (that live on the 3rd and 4th levels), and a few spare rooms, but not loads of extra space in these areas. The rooms are simply furnished, and mostly crystalline or wooden furniture."],
    ["Teaching Rooms (Level 7-8)", "A number of teaching rooms span across these two levels, with different rooms being used for both seminars and private lessons."],
    ["Audience Hall (Level 9):", "An audience hall for speeches and talks that can hold around 40 people."],
    ["Private quarters (Levels 10-11):", "The private quarters of the three leaders of the tower. The rooms are locked with Arcane Locks, unlockable by command gestures known only to the owners of the rooms themselves, and are protected with rugs of smothering."],
  ],
};
