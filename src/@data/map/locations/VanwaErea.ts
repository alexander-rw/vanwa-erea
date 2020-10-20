import { groupBy } from "lodash";

import { WorldDate } from "../../../@types/Events/WorldDate";
import { WorldEvent } from "../../../@types/Events/WorldEvent";
import { ReadableMonths } from "../../../@types/Events/WorldMonth";
import { Location } from "../../../@types/Location/Location";
import { DataTypeIds } from "../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../Constants/Ids/LocationIds";
import { separator } from "../../../Style/ts/separator";
import { fromDisplayableDataType } from "../../../Utilities/Array";
import { dataItemToLinkable } from "../../../Utilities/LinkableString";
import { events } from "../../events";

import { KharidianEmpire } from "./KharidianEmpire";
import { Kylvoro } from "./cities/Kylvoro";
import { Vvardenrock } from "./cities/Vvardenrock";
import { Waterdeep } from "./cities/Waterdeep";

const id = LocationIds.VanwaErea;

const es = Object.entries(groupBy(events, (e: WorldEvent) => e.date.age))
  .map((value: [string, WorldEvent[]]) => {
    const [key, groupedEvents] = value;
    const last = groupedEvents[0];
    const first = groupedEvents[groupedEvents.length - 1];
    const epochDurationDays: number = WorldDate.daysBetween(first.date, last.date);
    return {
      age: parseInt(key, 10),
      firstDate: first,
      lastDate: last,
      epochDurationDays,
      epochDurationYears: Math.floor(epochDurationDays / WorldDate.DAYS_PER_YEAR),
      cataclysmicEvent: last.description,
      epochInfo: first.description,
    };
  }).filter(x => x.age !== 0);

const f = es[es.length - 1];

export const VanwaErea: Location = {
  id,
  type: DataTypeIds.Location,
  description: [
    "Vanwä Erëa (Elvish for 'Dead God') is the second, and primary, world in the solar system of Cala Palúrë (Elvish for 'The Light Plane'). ",
    ["Calendar", `The world of ${id} has a regular calendar, with 13 calendar months that each span 28 days. Weeks are not a concept in ${id}; most people refer to each day as the number of the month (eg 15 of X month). The months are as follows:`],
    ...ReadableMonths.map(m => `${m.monthName} (${m.monthValue})`),
    "Months 1-4 are spring; 5-6 summer; 7-10 autumn; 11-13 winter.",
    ["A history of the world:", `${id} has existed for thousands of years, with the end of each age being marked by a generally cataclysmic event that is mentioned below. Approximate lengths of time for each age, as well as their names, are included for reference:`],
    ...es.sort((x, y) => x.age - y.age)
      .filter(x => x.age !== 5).map(x => `Age: ${x.epochInfo} Approximate length (years): ${x.epochDurationYears}. Event information: ${x.cataclysmicEvent}`),
    `Age: Fifth age. At the start of the fifth age, the Kharid-Misthalin war comes to a close as three strange metallic skinned creatures descend on the continent and take over command of the country. Misthalin calls a truce with the continent, and the continent begins to rebuild itself.
    Approximate length (years): ${f.epochDurationYears}. And so begins your current adventure...`,
    ["A collections of different places:", `${id} is a mish-mash of different countried and collectives; the main country, Misthalin (elvish for Mists Reclaimed) is a collection of smaller cities and places that are Governed by the rule of the monarchy seated in Vvardenrock, and sits west of the Kharidian Empire. The contient that these two countries sit on is called Icorus. Mid way through the fourth age, after hundreds of years of minor wars between different factions, Misthalin was mostly united into a single governing body, seated in the city of Keltar. The only non-united country that eventally remained was the Kharidian Empire, then ruled by their king, Kharid the Unconquerable, who sat on the throne of Vvardenrocks castle, a city
    he had invaded and pillaged for himself many years previously. Eventually the Kharid-Misthalin war erupted, causing the Kharidian Empire to be pushed back. At the end of the war, three god-like beings descended on Kharid's hiding spot near the Scintillant Wastes, killed him, and called an end to the war. A few years later, they erected an anti-magic gate that stretched the length of the continent
    to stop outsiders entering their country, except at designated points. The now rulers of the country are highly magic-phobic, and rarely allow passage to and from their country unless it is for necessary trade.`],
    ["The Crying Island:", `Named for it's teardrop-like shape, the Crying Island is the origin land of the Elves, and a densely forrested island with only three small settlements: ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Hraclos)} (its capital), ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Menzoberranzan)} (the underground settlement and home to most of the drow population) and ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Vkhelos)}, a small port town on the south of the island.
    The Crying island holds a relatively steady and settled relationship with Misthalin, having not been at war with the continent since the middle of the third age, but does not get too involved with the affairs of the mainland. The country mostly acts via proxy in Misthalin via the elvish ambassador, located in the diplomatic mountain city of ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Kylvoro)}.`],
    fromDisplayableDataType(Vvardenrock),
    fromDisplayableDataType(Waterdeep),
    fromDisplayableDataType(Kylvoro),
    fromDisplayableDataType(KharidianEmpire),
    separator,
    ["A world of Obelisks:", `Obsidian obelisks litter the landscape of ${id}. The obelisks themselves get more commonplace as you head east. The obelisks have writing on them, in a language untranslateable even by the most powerful spellcasters. The function of the obelisks is unknown.`],
    separator,
    [`Metals in ${id}:`, `As well as most of the standard metals that exist on earth, a number of other metals and gemstones with interesting properties exist in the world of ${id}...`],
    ["Adamantine:", "This dark green-black, extremely durable metal can be found in rare mineral veins deep underground. Items forged from adamantine are exceptionally strong compared to non-adamantine versions. Legendary dwarven warriors donned armor forged from adamantine."],
    ["Mithral:", `A black and speckled blue ore that forges into a silver-blue metal, mithral deposits can be found in the mines and mountains of ${id}. While dwarves also craft using mithral, it is the material of choice for smiths who use it to craft beautiful and deadly weapons and armor. The Misthgard of Misthalin are known for their silver-blue mithral breastplates inlaid with a light magenta "Smoke" pattern. Mithral is lighter in weight than steel, allowing for more dexterous use of some weapons.`],
    ["Dimeritium:", `This strange dark bronze colored metal was first discovered in craters formed from meteorites, and has since been found in very small deposits underground. Dimeritium has a natural property that can disrupt magic. Thus, it can be detrimental to creatures that can cast spells.
    It's natural antimagic properties make it difficult to research. Samples are actively sought by arcane scholars and artificer guilds, while those who are against the use of magic would use it to hunt mages if they got their hands on it. Dimeritium is exceedingly rare.`],
    // ["Orsimium:", "More of a glass-like crystal than a metal, Orsimium is extremely hard and very sharp, and does not lose its keen edge with use. Orc tribes hold the secret to the forging of this mysterious substance. Certain orcs would know that Orsimium must be forged from an ore called Zardazik, only found very close to volcanoes and must be painstakingly crafted."],
    ["Orichalcum:", `Orichalcum is a rare teal-colored metal that has been determined to have natural magical properties. The metal is said to have been brought from the Elemental Plane of Water by the Tritons, who used it in their underwater cities and introduced it to the sea elves. It is sought after by many spellcasters and is a popular area of study for artificers. While no deposits occur naturally on land, it is rumored that the floor of the Sea and the ruins that inhabit it are rich with orichalcum.
    Orichalcum can absorb and redirect magical energies, and is sometimes able to function akin to a ring of spell storing, or as a type of arcane focus that boosts spell save DCs.`],
    ["Cold Iron:", "An iron only found in comets that have landed on the planet, Cold Iron must be forged in a 'Frozen Forge', using some form of extreme cold. There are few items that are made of Cold Iron that still exist, and so items that are made of it are extremely sought out, to the point that some would kill for a Cold Iron Weapon. Cold Iron is extremely damaging to Fey creatures and elves. Most Cold Iron weapons were lost during the war during the third age between the Crying Island and the mainland."],
    // ["Naquadah:", "Naquadah is a rare, super-dense mineral. Its most basic use is as a weapon: Naquadah greatly amplifies energy, making it extremely potent if paired with explosives. Due to its unique properties, Naquadah forms the basis for many advanced technologies; the Stargates and Obelisks themselves are composed almost entirely of Naquadah. Naquadah can be used as an arcane power source, and looks like a glowing purple ore (or a flourescent green-yellow liquid when refined). It is very unstable and can explode if it is not properly maintained."],
    separator,
    ["Types Of Magic:", "The two standard types of magic are Sylvan magic, or Draconic Magic. Dragons taught the first non-elves to pull raw power from the Weave, whereas elves learnt to gently bend and mold the weave to their will. Sylvan and Draconic magic are different, but produce the same effects - and while most arcane spellcasters will learn about both, they will nearly always only master a single one during their livetimes."],
    // ["Other types of Magic:", "Other types of magic include: Truespeaking (a form of magic that taps directly into the weave), Psionics (related to pure will, similar to truespeech), Onomancy (a subsect of truespeech that relates to true names), bardic magic (A magic similar to Arcane magic but relies on playing the weave like an instrument), and Druidic magic (A form of divine magic that is linked to Yddragsil)."],
    "A world full of duality, of clouded second sight; The circle of 14 come together, to turn darkness into light.",
    // Aphelios and Alune
    "Twins of lunar ascendancy, from a tribe now torn apart; one guided by the other, connected by head and heart.",
    // Eral
    "A child of community, born in fruiting orchards green; a child of thunder and honor, meant to uncover the unseen.",
    // Elise & Leela
    "Twins of smoke and mirror, one assassin, and one gish; separated by country and life, but bound by arcane wish.",
    // Farona
    "A child of a damaged town, born before a fateful night; a child contacted by a trapped being, of frozen power and might.",
    // Galen
    "A child of warrior parents, of green skin and white hair; a child able to piece together knowledge not found elsewhere.",
    // Pana
    "A child whose past and present colludes with devils in the dark; who walks the line of life and death, a contrast that is stark.",
    // Rae
    "A child born into darkness, a house above many others; Chosen by the trickster, and hidden from her half brother.",
    // Rhaec
    "A child of burning bright eyes, born of a place wartorn; A child now an orphan, and celestial heart reborn.",
    // Taraen
    "A child born in a misty land, ruled by a monster undead; a child whose martial skills and prowess can inspire dread.",
    // Yue
    "A child of great trees and forests, of a place beyond the veil; a child trained in a feywild tribe of sun, wind, and hail.",
    // Frederic
    "And finally, a young child, of burning auburn hair; a child of ancient wisdom, and celestial affair.",
    "Three linked by lycanthropes, with deaths near their birthplace; two linked by a planar shift reaching beyond time and space.",
    "Two linked by a woven past, a city atop rock and bone; two linked by a heart of ice, a soul trapped in a stone.",
    "Two linked by the essence of a firebird not seen; two linked by a sphinx, skin a shining tourmaline.",
    "Two whose families were together in distant past; all of you linked to stop the darkness that must not last.",
    "For if the darkness is not lit up like it was, again; In two hundred summers, outworlders shall destroy this plane.",
    "Trust only your circle, for things are not what they seem; Blue skinned horrors near a dark lake, adept at making schemes.",
    "- Derek Halfspan, the first Palantir.",
  ],
};

/*
  ["The Prophecy:", "-----------"],
    "A world full of duality, of clouded second sight; The circle of 14 come together, to turn darkness into light.",
    // Aphelios and Alune
    "Twins of lunar ascendancy, from a tribe now torn apart; one guided by the other, connected by head and heart.",
    // Eral
    "A child of community, born in fruiting orchards green; a child of thunder and honor, meant to uncover the unseen.",
    // Elise & Leela
    "Twins of smoke and mirror, one assassin, and one gish; separated by country and life, but bound by arcane wish.",
    // Farona
    "A child of a damaged town, born before a fateful night; a child contacted by a trapped being, of frozen power and might.",
    // Galen
    "A child of warrior parents, of green skin and white hair; a child able to piece together knowledge not found elsewhere.",
    // Pana
    "A child whose past and present colludes with devils in the dark; who walks the line of life and death, a contrast that is stark.",
    // Rae
    "A child born into darkness, a house above many others; Chosen by the trickster, and hidden from her half brother.",
    // Rhaec
    "A child of burning bright eyes, born of a place wartorn; A child now an orphan, and celestial heart reborn.",
    // Taraen
    "A child born in a misty land, ruled by a monster undead; a child whose martial skills and prowess can inspire dread.",
    // Yue
    "A child of great trees and forests, of a place beyond the veil; a child trained in a feywild tribe of sun, wind, and hail.",
    // Frederic
    "And finally, a young child, of burning auburn hair; a child of ancient wisdom, and celestial affair.",
    "Three linked by lycanthropes, with deaths near their birthplace; two linked by a planar shift reaching beyond time and space.",
    "Two linked by a woven past, a city atop rock and bone; two linked by a heart of ice, a soul trapped in a stone.",
    "Two linked by the essence of a firebird not seen; two linked by a sphinx, skin a shining tourmaline.",
    "Two whose families were together in distant past; all of you linked to stop the darkness that must not last.",
    "For if the darkness is not lit up like it was, again; In two hundred summers, outworlders shall destroy this plane.",
    "Trust only your circle, for things are not what they seem; Blue skinned horrors near a dark lake, adept at making schemes.",
    "- Derek Halfspan, the first Palantir.",
*/
