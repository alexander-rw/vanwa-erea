import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const Illidara: Location = {
  id: LocationIds.Illidara,
  type: DataTypeIds.Location,
  description: [
    `The town of Illidara is built on the runs of a much older settlement. Hundreds of years ago, old Phandalin as a small but thriving human town whose people were firmly allied with the
    dwarves and gnomes of Hupperdook. At the end of the second age, Orcs laid waste to many places round the continent including Phandalin. For ages, the town was uninhabited, but eventually was rebuilt as a waypoint between
    ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Hupperdook)} and other cities to allow for easier trade. A bustling frontier settlement has grown up on the site of the old town, and is home now to farmers, woodcutters,
    fur traders, and prospectors drawn by stories of gold and platinum in the foothills of the ${dataItemToLinkable(DataTypeIds.Location, LocationIds.SiberquelRidge)}.`,
    ["Player Description:", `The town consists of forty or fifty simple log buildings, some built on old fieldstone foundations. More old ruins-crumbling stone walls covered in ivy and briars-surround the newer houses and shops, showing how this must have been a much larger town in centuries past.
    Most of the newer buildings are set on the sides of the cart track, which widens into a muddy main street of sorts as it climbs toward a ruined manor house on a hillside at the east side of town.
    As you approach, you see children playing on the town green and townsfolk tending to chores or running errands at shops. Many people look up as you approach, but all return to their business as you go by.`],
    "Areas in Illidara include:",
    ["Statue of Illidan:", `A huge statue of the famous Mage Illidan, who helped stop the Orc Raid at the end of the second age and banished Graz'zt to the underwater tomb in the ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Bloodlake)},
    this status is a dark marble statue made as tribute and is often visited by pilgrims of Viryn.`],
    ["Barthen's Provisions:", "Run by Gundren Rockseeker, this general store is also an area for resupplying and distributing items produced in Hupperdook for the inevitable redistribution to other places round the continent. The shop is named after Barthen Rockseeker, a dwarf that died in the attack of Sanguinesti of 5e 136."],
    ["Stonehill Inn:", `A small inn, run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ToblenStonehill)}, a dwarf of dark skin and soft speech. Characters that pass a DC20 perception check can see that the door to the inn was damaged and rebuilt, probably a few years ago. This is a result of the thugs that previously inhabited the town but were driven out.`],
    ["Tresendar Manor:", "A large ruins of a manor that sat here many hundreds of years ago, the manor is now currently uninhabited. Characters who find the manor's secret area will be able to find the Redbrand hideout (See LMOP Redbrand Hideout), but there are no alive NPCs in here."],
    ["Godshrine:", "A small half-covered stone building with a number of small busts of gods, the Godshrine is the main area in Illidara that people will go to for worship. See 'LMOP:Shrine Of Luck' for more info and quest hooks."],
    ["The Sleeping Giant Inn:", "A now closed taproom, this building is currently up for sale. It previously belonged to an inkeeper, Grista, but she retired on the profits she made after fighting back against the Redbrands. Her aim is to move to Waterdeep."],
    ["Edermath Orchard", `Run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.BoothbyEdermath)}, the Edermath orchard produces locally sourced wine, cider and fruits for Hupperdook, Illidara and Draynor Village, as well as sending the `],
  ],
  population: "~ 200 (50% human, 26% dwarf, 22% gnome, 2% other races)",
};
