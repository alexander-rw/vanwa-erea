import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { separator } from "../../../../Style/ts/separator";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const Hupperdook: Location = {
  id: LocationIds.Hupperdook,
  type: DataTypeIds.Location,
  description: [
    `The dwarf-gnomish community of Hupperdook is built along the southern base of the Silberquel Ridge, marked by the ever-rising columns of dark smoke and steam. Predating the empire, Hupperdook remained autonomous until the Crown absorbed the community through diplomatic
    agreements over in the late fourth age. This smoke-stacked city is now the heart of industry in the empire, manufacturing technological marvels and large-scale weapons of war for the Misthalin Empire. The gnomish culture within Hupperdook prizes hard work and hard play.
    Family trades vary from coal mining and clockwork development to practical enchantment and the brewing of zesty libations. Within the bounds of the city, a general air of upbeat anticipation frames the day-to-day activities of residents as they bound their way toward dusk. `,
    `As per the accord enabling it to become part of the Misthalin Empire, Hupperdook is one of the only imperial cities allowed to choose its own leadership, the other being Waterdeep. Hupperdook's leader, Starosta Emma Zezbok, is a bombastic gnome whose parents, the previous leaders of
    the city, negotiated the absorption of the city into the empire. She has held her seat since the early fifth age. Emma has sharp mind for problem solving and a love of debauchery-and cares little for politics outside the city walls or for the
    short-lived "Kings of Men," so long as they leave her and her people alone, although she doesn't take lightly to wrongdoings within her walls.
    Due to the independent nature of the city, the Misthguard presence is relatively small, and the volunteers of the Citizens' Watch pick up the slack. This has led to some tension between the two law enforcement factions, but many of the Misthguard forgive any slights
    when the evening drinks begin to flow.`,
    `The city is built into the side of a mountain called the Silberquel Mountains. It is organized into a lower tier and an upper tier. At the base of the mountain above the lower tier, there are plains – the "Assembly Yard",
    fenced off but viewable when travelling towards the life or staircases that lead up into the city. `,
    "Areas in and near Hupperdook include:",
    [`${dataItemToLinkable(DataTypeIds.Location, LocationIds.SiberquelRidge)} & Silver Falls:`, `The Huge mountain range that Hupperdook is built on, the Siberquel Ridge is a huge mountain range that is the start of the ${dataItemToLinkable(DataTypeIds.Location, LocationIds.SlaversTears)} river. The river is fed by Silver Falls,
    a huge waterfall that glistens off the sun as it cascades down the side of the mountain. `],
    ["College of Valor:", "Located on the plains outside hupperdook, the College Of Valor trains bards and fighters alike. It is well known in the area for its large collection of tomes, but many people are not allowed to visit the grounds without written permission from someone with the ability to grant access to the archives."],
    separator,
    ["The Lower Tier:", `Lower Hupperdook sits at ground level and is divided into two sections. The soot-stained, dusty Ironlot is where the majority of mining, metalwork, and smallscale production takes place amid residential neighborhoods peppered with a dozen ash-piping smoke
    stacks. The larger war machines and siege engines are constructed in the Assembly Yard, while more volatile projects are tested within the pock-marked turf known as the Craterfield.`],
    ["The Ironlot", `is where war machines are developed and designed. The lot itself is a large, stone shelf about 30-40 feet above the plain. A single, large metal platform takes people and materials from the lower to upper tier.
    A number of residential houses sit nearby the Ironlot, usually owned or rented by the poorer members of the city.`],
    ["The Omni-Smelter", `is both a temple to Moradin (and other dwarven gods, as well as part of the Gnomish pantheon). The Smelter is situated within the mountain on the lower tier, and the temple itself holds a 70 foot bust of Moradin
    carved into the stone of the cave. Two tungsten melting pots are held by the arms of Moradin, and have funnels to direct molten metal into wherever is needed (usually ingot or equipment molds made of iron).
    The left section of the temple is accessible by the public every day, from 8am to 3.30pm, and is usually used as a prayer or commune area. A high priest of Moradin sits here, although they also answer prayers and communes for other gods from people in the city.
    Smaller busts line the left wall, of a host of gods, including minor dwarven and gnome gods, Ilmater, Viryn, Helm, and a few others. There is a notable absence of elvish gods within this area. A few pews are lined here, which face towards Moradin's bust. The forgeworkers are always busy, even during prayer time –
    so visiting the temple will not be a quiet experience. Behind a small (4 foot) iron fence sits the forging area – an area that only forgeworkers are allowed to access.
    Visitors to the forge must hand over any weapons, and will be reprimanded if they bring any weapons into the forge against this order. Many people will strike the entry anvil with a weapon before they hand it over.`],
    ["Hammers of Moradin:", `The dwarven fighting guild of Hupperdook, with the entrance located very close to the Temple of Moradin. They are an elite military order dominated by paladins and fighters with chapters in nearly every dwarven stronghold and members drawn from every dwarven clan.
    The Hammers serve both as commanders of dwarven armies and as an elite strike force skilled in dealing with anything from large groups of goblins to great wyrms to malevolent fiends from the Lower Planes. The order is dedicated to the defense of existing dwarven holdings and the carving out of new dwarven territories.
    Individual chapters have a great deal of local autonomy but, in times of great crisis, a Grand Council (the reigning Grand Guildmasters and senior Hammers of the affected region) assemble to plot strategy and divine Moradin's will. Their leaders are not called Guildmaster instead they go by the term Master Hammer.
    Priests of Moradin who do not join the fighter guild must show skill with weapons. They are not usually sent out to pick on and slay some creature - that is more the way of Clanggedin. Usually they only have to spar with a Hammer in front of their Guildmaster (and, frequently, the gathered Initiates), the object being to get a certain number of blows past the Master's guard in the time before a gong is struck.
    Demonstrations of the mastery in other Skills usually involves the priest working at the Temple for a week and attempting to produce an item specified by the Testing Priest.`],
    ["The Armavault", `is built into the far eastern side of the mountain's base. A solid iron door (25-30 feet tall and 60 feet wide) jammed into the mountain marks its entrance. It is very well-protected, with two dozen Mistguard and a number of other protectees stationed at the base of the door.
    Most of the city's funds and spare materials are stored inside the Armavault, as well as war machines specifically set aside to defend the city in case of attack. Some of Hupperdook's factories use the natural volcanic activity in the Underbellows as a consistent heat source, maintaining their forges and furnaces beneath the city.`],
    ["Gearhold Prison", "is towards the southern end of the Iron Lot. Similar to the Armavault, its entrance is also a solid iron door built into the mountain base, but smaller (only 15 feet tall and 10 feet wide), and is built underground into where the plains meets the Iron Lot."],
    separator,
    ["The Adamantine Elevator", "The city lifts many items and people from the lower tier to the Upper tier via the Adamantine Elevator. The Elevator is staffed by Luke (CG Dwarven Guard, light brown beard & hair)."],
    ["The Upper Tier", `The more charming, residential region of Upper Hupperdook sits about two hundred feet above the ground atop a platform of leveled rock. This level of the city has two regions: Silver Falls Grove, where the massive Silver Falls descend from atop the mountainside and
    spill into a small lake surrounded by residential living towers and trees - and the Idleworks Shelf, a recreational region of sprawling commerce, colorful markets, and social gatherings.`],
    ["The Silver Falls:", `Silver Falls is a massive waterfall cascading a thousand feet from the top of the mountain, into a large lake, where columns of steam are rising up.
    Beside the waterfall there is a steam engine-type mechanism built into the surrounding rock that they use to fuel the furnaces and elements of the technology within this city.
    Around the waterfall are numerous thin, tall and metallic, three to four story towers hat have balconies and little windows.
    Inside live and sleep most of the city's residents and their families. There are very few buildings here that are not residential homes or the occasional food establishment`],
    ["The Idlework Shelf:", `The Idlework Shelf is a lively district and the center of Hupperdook culture.
    Most of the city's taverns, inns, and merchants can be found here. There are open pavilions decorated for an event or a festival.`],
    "Famous areas in the Idlework Shelf include:",
    [`${dataItemToLinkable(DataTypeIds.Location, LocationIds.TowerOfEvocation)},`, `A famous magic academy run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.DemnokLannik)}, and was previously run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Velethuil)} until his dissapearance (and eventual death).`],
    ["The Blushing Tankard:", `run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.IreenaClawmop)}, the blushing tankard is the most prominent and lively establishment in the whole of Hupperdook. With enough space to seat over 100 people, and often
    getting extremely rowdy and lively in the evenings, the Blushing Tankard is well regarded by many locals for its tasty food, great staff, and fun atmosphere. People can be found gambling, drinking and singing/dancing nearly every night.`],
    ["The Ragged Flagon", `A much quieter Tavern, run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.TonilaFelgolos)}`],
    ["Crackling Spanner", `A thin gnomish man (Actually ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ValximFelgolos)}) sells ten sparklers for 25 copper on a stall outside his tinkerer's shop. The store is attached to the Bent Binders.`],
    ["Bent Binders", `A bookstore that is closed in the Evening. It's owned by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.BrijdarTosslefizz)}, and ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ValximFelgolos)}.`],
    ["The Shusters Butcher", "A small building that is boarded up."],
  ],
  population: "~ 12,000 (42% dwarves, 29% gnomes, 22% humans, 5% elf/half-elf, 2% other races)",
};
