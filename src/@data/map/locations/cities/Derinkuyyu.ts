import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const Derinkuyyu: Location = {
  id: LocationIds.Derinkuyyu,
  type: DataTypeIds.Location,
  description: [
    `Originally a mithral mine belonging to Clan Battlehammer, this underground town became a safe haven for various dwarf, gnomes and centaurs that live in the area.
    It sits beneath the Fourthpeak mountain as part of the ${dataItemToLinkable(DataTypeIds.Location, LocationIds.CentaursSpine)}. The mine eventually became overrun by a black dragon called
    Haerinvureem (known as Shimmergloom to most people). The cirty was originally set up from the remnants of Mithral Hall, an underground dwarven settlement, that was eventually expanded after the end of the second age. The city's main exports are iron, some mithril, and animals such as horses, camels and cows, which are reared on the plains outside the city.
    The city is overseen by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Bradwarden)}, a well respected warrior.`,
    ["Built For Centaurs:", "With the city being the place with the highest centaur population in the continent, most of the city has ramps rather than stairs, and single storey houses with large openings to house the larger bodied centaurs compared to most humanoids."],
    ["Derinkuyyu Entrance:", "With the town being built and carved into the side of a mountain, the entrance is a huge stone and metal door with a carved bust of helm inlaid into the side of the mountain. Most guards do not require documentation for people entering or exiting the city except in times of peril where it is deemed necessary."],
    ["The Undercity:", `In the centre of the mountain lay the Undercity, the main living quarters for the miners and permanent residents. What was already a large natural cave was carved out further by the town founders.
    The walls had ledges carved into them like a colosseum, with several small homes carved into each of the giant steps. This town had the capacity to house some 10,000 individuals. In the middle of the chamber, at the lowest level, were the workshops and furnaces where the majority of the forging and labour took place. The glow of the forge lit and warmed the entire Undercity. Towering over the Undercity was a single bridge allowing miners to navigate across the city rather than around it.`],
    ["Temple Of Helm:", `Known as the Shieldhall, The main temple of helm on the continent sits here. The many Clerics, paladins and preists of helm train here. The temple of helm sits nearby the entrance to the Undercity, and Helm's holy symbol was displayed prominently in the stonework, on wall-mounted pennants and on suits of armor that lined the halls.
    The walls were built for acoustics that block all but the most raucous sounds, creating an impressive, but peaceful place of worship.`],
    ["Temple Of Moradin:", `due to the large Dwarven/Gnomish population, a large temple to Moradin, similar to ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Hupperdook)}'s, can be found next to the Temple of Helm.`],
    ["Smaller General Temple:", "A smaller temple for general worship of other deities sits next to the two other temples."],
    ["Mining Tunnels & Underdark Entrance:", "The City has a number of tunnels that lead deep into the earth. Some of these lead to the underdark, although most lead to dead ends. Many people from far and wide travel to derinkuyyu to try and become rich by excavating veins of mithril, adamantine, or other precious metals or gems buried in the ground."],
    // ["Hidden Obsidian Man:", "An obsidian man sits in the hidden formation of ancient obsidian monoliths that originally existed on the surface, but ended up buried during an earthquake in the second age. The monoliths have not been discovered yet."],
    ["Shimmergloom's Lair:", "The skeleton of Shimmergloom can be viewed in public, although it is heavily guarded by Clerics and Paladins of Helm round the clock. The dragon was supposedly slain by the founder of Derinkuyyu, Bruenor Battlehammer."],
    ["Battlerager Training School:", "The Battlerager clan owns and trains people in this school. It is known for its unusual teaching of the Battlerager fighting style, but also teaches other ways of combat."],
    ["The Durned Elf:", `One of the few taverns in the area, the Durned Elf is located near the centre of the Undercity. It is run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.DrizztDourden)}, a drow of great renound in the area.`],
    ["The Hauty Horse:", "A tavern more accepting of locals (mostly centaurs) than outsiders, this place is sticky, raucuous, and lies off the beaten track."],
    ["Garumn's Gorge:", `Garumn's Gorge was a massive natural cavern within the east side of the mountain. Although unconfirmed, it was almost undoubtedly named after the Sixth King of Mithral Hall, Garumn Battlehammer. The 330m (1000ft) deep cave could only be crossed via a small bridge. This bridge led to the east entrance, and could be used as a great defensive tool.
    The bridge was also blocked by a portcullis, which was operated from a room on the other side of Mithral Hall. Down one side of the gorge, there was a waterfall known as Bruenor Falls. Bruenor Falls led to a small basin of water at the bottom of the gorge, which in turn trickled out through caves in the mountain into the River Surbrin.
    During Shimmergloom's reign, the gorge was known as Shimmergloom's Run. A cave at the bottom of the gorge lead to the deep mines east of the Undercity.`],
    ["The Magic Mouth:", "A magic shop in Derinkuyyu, set up in around 5e 135, run by a woman called Asta (NG Gnome, born 5e 99, scottish accent, short temper). The sister shop of the Magic Mouth in Waterdeep, this shop is often well stocked and well kept."],
    ["City Song (Often sung in taverns nearby):", ""],
    "We've dug our holes and hallowed caves,",
    "Put goblin foes in shallow graves,",
    "This day our work is just begun,",
    "In the mines where silver rivers run",
    "Beneath the stone the metal gleams,",
    "Torches shine on sliver streams,",
    "Beyond the eyes of the spying sun,",
    "In the mines where silver rivers run",
    "The hammers chime on Mithral pure,",
    "As dwarven mines in days of yore,",
    "A craftsman's work is never done,",
    "In the mines where silver rivers run",
    "To dwarven gods we sing our praise,",
    "Put another goblin in a shallow grave,",
    "We know our work has just begun,",
    "In the land where silver rivers run.",
  ],
  population: "~ 10,000 (30% dwarves, 27% centaurs, 19% gnomes, 22% humans, 2% others). Very few elves save for the occasional drow.",
};
