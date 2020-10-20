import { NonPlayableCharacter } from "../@types/NonPlayableCharacters/NonPlayableCharacter";
import { DataTypeIds } from "../Constants/Ids/DataTypeIds";
import { LocationIds } from "../Constants/Ids/LocationIds";
import { NpcIds } from "../Constants/Ids/NpcIds";

import { PlayerIds } from "../Constants/Ids/PlayerIds";
import { dataItemToLinkable } from "../Utilities/LinkableString";

const type = DataTypeIds.Npc;

export const npcsData: NonPlayableCharacter[] = [
  {
    id: NpcIds.PrinceDerendil,
    type,
    accent: "English, standard",
    description: [
      "Prince derendil, prince of Kylvoro and the son of the deceased elven king is an elf originally from teardrop island.",
      "He is now the elected governor of Kylvoro, the elvish ambassador town on the west coast of Misthalin",
    ],
    defaultLocation: LocationIds.Kylvoro,
  },
  {
    id: NpcIds.WraithKing,
    type,
    accent: "Wraith King's Accent",
    description: [
      "For untold years, King Ostarion built a kingdom from the remains of his enemies - with Elze as the centre of his kingdom, being a descendant of the original king of Elze. He built his seat built on a writhing mass of constantly tortured, undead bodies."
            + " It was an obsessive's errand, done to pass the long eternities of a monarchy that seemed fated never to end. He believed that as long as he built the strength of his kingdom, he could not die...",
      "But eventually he learned that he had been deluded: that bone itself could perish. Deeply mistrustful of flesh, he sought a more permanent way of extending his reign, and at last settled on pursuit of wraith energy, a form of pure spirit given off by certain dark souls at death."
            + " Should he infuse himself with Wraith Essence, he thought he might create a body as luminous and eternal as his ego. On the millennial solstice known as Wraith-Night, he submitted to a rite of transformation, compelling his subjects to harvest enough souls to fuel his ambition for immortality.",
      "No one knows how many of his champions died, for the only survivor who mattered was the Wraith King, who rose with the sun on the following morn.",
      "Sadly, the transformation did not work - or at least, it appeared not to. He spent years ruling, until eventually he began to wither, his body atrophying and his flesh burning off.",
      "The denizens of his kingdom did not like this - and after an uprising, they buried him alive in his tomb.",
      "He lays trapped there, still alive but filled with rage. When freed, he will stride out with sword drawn, demanding a fealty that extends far beyond death.",
    ],
    defaultLocation: LocationIds.Manifest,
  },
  /*
  {
    Id: NpcIds.Vyse,
    Name: "Vyse",
    Accent: "",
    Deceased: true,
    Description: [
      "",
    ],
  },
  {
    Id: NpcIds.Aghanim,
    Name: "Aghanim",
    Accent: "",
    Deceased: true,
    Description: [
      "",
    ],
  },
  {
    Id: 5,
    Name: "Rubick",
    Accent: "rrrrrrubick. Trills r's a lot. english-ish",
    Deceased: true,
    Description: [
      "",
    ],
  },
  {
    Id: 6,
    Name: "Cult of Vyse",
    Accent: "N/A",
    Deceased: true,
    Description: [
      "",
    ],
  },
  */
  {
    id: NpcIds.VessEarthbrand,
    type,
    accent: "French, gentle",
    description: [
      "The leader and head cleric of the Raven Queen Temple in waterdeep, Vess is a kind and (mostly) patient cleric whom heads the RQ temple in waterdeep.",
    ],
    defaultLocation: LocationIds.Waterdeep,
  },
  {
    id: NpcIds.Durnan,
    type,
    accent: "(bad) Scottish, sassy. Stands up for himself",
    description: [
      "The owner of the yawning portal, Durnan is the gruff, burly and sass owner of the Yawning Portal Inn, one of Waterdeep's most famous Inns. He was also a Masked Lord of Waterdeep, and considered himself the self-appointed gatekeeper to Undermountain. He was known for having explored Undermountain.",
      "He had a strong dislike for hobgoblins. Mirt believed he may have lost family, friends, and neighbors—and even been left homeless—by hobgoblin raids, although Durnan himself would never speak on the subject.",
    ],
    defaultLocation: LocationIds.Waterdeep,
  },
  {
    id: NpcIds.YagraStonefist,
    type,
    accent: "talks in a standard deep voiced english accent, and misses words sometimes.",
    description: [
      "The owner of the yawning portal",
    ],
    defaultLocation: LocationIds.Waterdeep,
  },
  {
    id: NpcIds.OrjanMuleskull,
    type,
    accent: "swedish accent",
    description: [
      "The owner of the Muleskull tavern, Orjan is a kind hearted human man with a large brown beard and slicked back brown hair. He's a simple man, who just wants to run his tavern in peace.",
    ],
    defaultLocation: LocationIds.Waterdeep,
  },
  {
    id: NpcIds.RevolGladgas,
    type,
    accent: "english accent",
    description: [
      "The head cleric of the waterdeep temple of helm, Revol is a ",
    ],
    defaultLocation: LocationIds.Waterdeep,
  },
  {
    id: NpcIds.JaceBeleren,
    type,
    accent: "English, posh",
    description: [
      "Jace is the head of magic in Kylvoro, as well as the Archmage of the Tower Of Abjuration. He is often located in the Archmage's room in kylvoro's Cirrus, but can also be found in the Tower Of Abjuration, or the Tower Of Necromancy.",
      "He is in a relationship with Liliana Vess, the Archmage of the Tower Of Necromancy. The couple met when Jace was newly appointed to the ",
    ],
    defaultLocation: LocationIds.Kylvoro,
  },
  {
    id: NpcIds.ValximFelgolos,
    type,
    accent: "English, normal",
    description: [`Married to ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.TonilaFelgolos)}, Valxim is one of the few dragons still alive on the continent and loves pranks. He is a Copper Dragon, and was born near the end of the third age.  He loves pranking his wife in lighthearted ways. He owns the Crackling Spanner, a tinkerer's store in Hupperdook.`],
    defaultLocation: LocationIds.Hupperdook,
  },
  {
    id: NpcIds.TonilaFelgolos,
    type,
    accent: "Greek / cyrillian",
    description: [`Married to ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ValximFelgolos)}, Tonila is one of the few dragons left still alive on the continent. She is a Steel Dragon, and was born a few hundred years before the end of the third age. She enjoys pranking her husband, and loves the company of Humans. She owns and runs the Ragged Flagon, a tavern in Hupperdook.`],
    defaultLocation: LocationIds.Hupperdook,
  },
  {
    id: NpcIds.MalygosMandros,
    type,
    accent: "Crackling voice, english",
    description: [
      `Previously a high elf necromancer, Malygos currently heads the ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.CultOfTheDragon)}, a Tiamat worshiping cult. He is now half-dragon half-fiend, meaning he cannot enter
      waterdeep due to the Dragonward that surrounds the city.`,
    ],
    defaultLocation: LocationIds.DragonspineMountains,
  },
  {
    id: NpcIds.ElderhoofTribe,
    type,
    accent: "Special (group of people)",
    description: [
      "A collection of centaurs that live in J'farra, the Elderhoof tribe are well known for their elderberry and cranberry beverages",
    ],
    defaultLocation: LocationIds.Jfarra,
  },
  {
    id: NpcIds.ZerynElderhoof,
    type,
    accent: "Speaks slowly, english (kinda like ogre magi)",
    description: [
      `A large male centaur, loyal, stubborn and not super intelligent. Spent a lot of time with ${PlayerIds.EralStormhoof}. He has short brown hair and a grey-white specled horse body.`,
    ],
    defaultLocation: LocationIds.Jfarra,
  },
  {
    id: NpcIds.DrixElderhoof,
    type,
    accent: "English, brash, confident",
    description: ["A brash, large, strong centaur, Drix tends to the Elderhoof farm and was often a friendly Rival of Eral's. horse body is Black with some white 'Socks' near his feet."],
    defaultLocation: LocationIds.Jfarra,
  },
  {
    id: NpcIds.PlipElderhoof,
    type,
    accent: "Shitty scottish, funny, laughs a lot",
    description: ["Plip is a centaur, smaller than the average and generally quiet, but a very hard worker, and an incredibly crafter. Thinks very highly of Eral. Centaur body is dark tan. He ended up becoming a cleric?"],
    defaultLocation: LocationIds.Jfarra,
  },
  {
    id: NpcIds.AuroraElderhoof,
    type,
    accent: "English, softly spoken, but strict. (Speak softly, carry a big stick)",
    description: [`${PlayerIds.EralStormhoof}'s Mother. Centaur body is dark tan. Both parents are strict but supportive of their children.`],
    defaultLocation: LocationIds.Jfarra,
  },
  {
    id: NpcIds.CloverElderhoof,
    type,
    accent: "English, man of few words. Doesn't need to say more than necessary.",
    description: [`${PlayerIds.EralStormhoof}'s Father. Centaur body is dark tan. Both parents are strict but supportive of their children.`],
    defaultLocation: LocationIds.Jfarra,
  },
  {
    id: NpcIds.TristanKenric,
    type,
    accent: "American, booming",
    description: [`A very tall, strong human and a Chosen of helm. He had black hair and wielded a greatsword named "Watcher". He is the Head Cleric at the Temple of Helm, known as the Shieldhall, in ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Derinkuyyu)}`],
    defaultLocation: LocationIds.Derinkuyyu,
  },
  {
    id: NpcIds.BastionHaruman,
    type,
    accent: "American",
    description: [`A human Paladin, twin of Lynel, brown hair, weathered face. One of the head Paladins of Shieldhall in ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Derinkuyyu)}. He wielded a `],
    defaultLocation: LocationIds.Derinkuyyu,
  },
  {
    id: NpcIds.LynelHaruman,
    type,
    accent: "American",
    description: [`A human Paladin, twin of Bastion, brown hair, weathered face. One of the head Paladins of Shieldhall in ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Derinkuyyu)}`],
    defaultLocation: LocationIds.Derinkuyyu,
  },
  {
    id: NpcIds.MatronSylvia,
    type,
    accent: "Prim and proper english, soft spoken, gets her way.",
    description: [`A Wood Elf, Head Priest of Shieldhall in ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Derinkuyyu)}. She has served the temple for over 180 as of 169. Reads people's emotions incredibly well.`],
    defaultLocation: LocationIds.Derinkuyyu,
  },
  {
    id: NpcIds.Nook,
    type,
    accent: "English.",
    description: ["Gnome, short blonde hair, brother of Kel. Worked for the Zhentarim until it was shut down. Works at Sew It Seams."],
    defaultLocation: LocationIds.Waterdeep,
  },
  {
    id: NpcIds.CaltonDourden,
    type,
    accent: "English, strict, violent.",
    description: ["Drow, Minister of Finance from house Do'Urden. Addicted to Noctum, his house name came into downfall after his daugter ran away. TODO survive?"],
    defaultLocation: LocationIds.Menzoberranzan,
  },
  {
    id: NpcIds.Lird,
    type,
    accent: "Deep voiced American, Quiet, stoic, kind, patient.",
    description: ["A Stoic Orc, Lird is a kind man who looked after the Do'Urden estate for many years. He stayed behind in Menzoberranzan after Rae ran away."],
    defaultLocation: LocationIds.Menzoberranzan,
  },
  {
    id: NpcIds.HouseDourden,
    type,
    accent: "Depends on person.",
    description: ["House Do'Urden is one of the largest houses in menzo. tood. look up lore"],
    defaultLocation: LocationIds.Menzoberranzan,
  },
  {
    id: NpcIds.AiaRivetspring,
    type,
    accent: "Scottish, shitty",
    defaultLocation: LocationIds.Waterdeep,
    description: ["Married to Alfen, doesn't take shit from people, loves knitting."],
  },
  {
    id: NpcIds.AlfenRivetspring,
    type,
    accent: "German (bavarian style)",
    defaultLocation: LocationIds.Waterdeep,
    description: ["Married to Aia, Eccentric, flamboyant, loves tinkering with things, black eyes, rough unkempt black hair, tall for a gnome."],
  },
  {
    id: NpcIds.IadrairPirlohil,
    type,
    accent: "English",
    defaultLocation: LocationIds.Waterdeep,
    description: ["Aasimar, blonde hair, dark skin, very handsome, friendly, Runs the Temple of Viryn in Waterdeep."],
  },
];
