import { WorldAge } from "../@types/Events/WorldAge";
import { WorldDate } from "../@types/Events/WorldDate";
import { WorldEvent } from "../@types/Events/WorldEvent";
import { DataTypeIds } from "../Constants/Ids/DataTypeIds";
import { DeityIds } from "../Constants/Ids/DeityIds";
import { LocationIds } from "../Constants/Ids/LocationIds";
import { NpcIds } from "../Constants/Ids/NpcIds";
import { PlayerIds } from "../Constants/Ids/PlayerIds";
import { dataItemToLinkable } from "../Utilities/LinkableString";

type WorldEventConstructor = {
  loc: LocationIds;
  dateVals: [number, number, number, number];
  description: string;
};

const eventConstructors: WorldEventConstructor[] = [
  {
    loc: LocationIds.VanwaErea,
    dateVals: [2, 1193, 13, 28],
    description: `The day of green flame (the Ustaquelet, 'Day of Burnt Corpses' in elvish) culminated in the continent being blanketed in green fire. The event caused the death of many creatures, wiped out some smaller settlements, and caused the complete destruction of many places. The world was blanketed in
    a huge amount of dark smoke, causing the death of many people and the inevitable driving underground of many others. This event is cataclysmic, signalling the end of the ${WorldAge.Second}nd age.`,
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [3, 1709, 6, 19],
    description: `The least cataclysmic of all of the events so far, The Tyrannical Black Dragon Shakorexis, as well as large other number of dragons, are killed, signalling the end of the ${WorldAge.Third}rd age.`,
  },
  {
    loc: LocationIds.Underdark,
    dateVals: [5, 166, 4, 2],
    description: `Derendil is kidnapped by renegade drow in the underdark. The drow are part of an experimental faction set up by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Slathos)}.`,
  },
  {
    loc: LocationIds.Underdark,
    dateVals: [5, 166, 9, 2],
    description: `Derendil is experimented on by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Grazilaxx)}, using the Dreoxidic Dagger. This begins his transformation into a Quaggoth.`,
  },
  {
    loc: LocationIds.Underdark,
    dateVals: [5, 169, 4, 13],
    description: `Kubo, Starfire and Groundwater wake up in the underdark with ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.PrinceDerendil)}. They eventually escape and make their way up to the surface, arriving in ${LocationIds.VvardenbridgeSwamp} and making their way to ${LocationIds.Vvardenbridge}. They meet Kel and Ornn.`,
  },
  {
    loc: LocationIds.Underdark,
    dateVals: [5, 169, 4, 14],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.PrinceDerendil)} moves to the ${dataItemToLinkable(DataTypeIds.Location, LocationIds.TowerOfIllusion)} to begin his reversal back to Elf.`,
  },
  {
    loc: LocationIds.Vvardenbridge,
    dateVals: [5, 169, 4, 15],
    description: `Rumors of a dragon-demon begin to circulate ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Vvardenbridge)}. (Actually the result of FFBI scaring one of the farmers just outside Vvardenbrige).`,
  },
  {
    loc: LocationIds.Kylvoro,
    dateVals: [5, 169, 13, 28],
    description: `After dying but being revived by ${PlayerIds.Kel}, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.PrinceDerendil)} is appointed Elvish Ambassador of Kylvoro (Lórien Kylvoro).`,
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [5, 170, 1, 1],
    description: "After a long battle with his health, King Roald dies. His daughter, Lady Elizabeth Roald, is appointed queen.",
  },
  {
    loc: LocationIds.Vvardenbridge,
    dateVals: [5, 169, 4, 16],
    description: `The Orcs of the nightsilver woods, led by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Jrethra)}, visit Vvardenbridge and befriend the locals`,
  },
  {
    loc: LocationIds.DraynorVillage,
    dateVals: [5, 169, 4, 17],
    description: `The Ezelnär Amulet gets stolen from Count Draynor's Manor in ${dataItemToLinkable(DataTypeIds.Location, LocationIds.DraynorVillage)} by the FFBI.`,
  },
  {
    loc: LocationIds.DraynorPath,
    dateVals: [5, 169, 4, 20],
    description: "The Black Knight encounters the FFBI near the Draynor Path Bridge, and is defeated but buried incorrectly by Groundwater.",
  },
  {
    loc: LocationIds.Illidara,
    dateVals: [5, 169, 4, 28],
    description: "The FFBI arrive at Illidara, and Blue flies above the town during a storm. Some residents of the town see this as a sign of omens about dragons returning; others see it as demonic invasion or something more benevolent.",
  },
  {
    loc: LocationIds.Illidara,
    dateVals: [5, 169, 5, 22],
    description: "Demon statue is carved and put up in Illidara's town square to pay Homage to the supposed shadow demon (actually Blue) that appeared during a storm a month prior.",
  },
  {
    loc: LocationIds.Illidara,
    dateVals: [5, 168, 13, 27],
    description: `The ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LightbrewFamily)} are kidnapped by underlings of ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Slathos)}.`,
  },
  {
    loc: LocationIds.DraynorVillage,
    dateVals: [5, 169, 5, 8],
    description: `Hammers of Moradin make their way to draynor village. They destroy ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.CountDraynor)}, and then are murdered in broad daylight by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LeelaViitala)}. Of the four that went to Draynor Village, one survived.`,
  },
  {
    loc: LocationIds.DraynorVillage,
    dateVals: [5, 169, 5, 8],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LeelaViitala)} murders the hammers of Moradin sent to investigate her in broad daylight, then runs away from Draynor Village after burning her house down to hide evidence of her activities.`,
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [5, 1, 1, 1],
    description: `The ${WorldAge.Fifth}th age begins after a truce is called and the Misthalin-Kharid war beings to wind to a halt.`,
  },
  {
    loc: LocationIds.DraynorVillage,
    dateVals: [5, 161, 8, 26],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LeelaViitala)} moves from the ${dataItemToLinkable(DataTypeIds.Location, LocationIds.KharidianEmpire)} to ${dataItemToLinkable(DataTypeIds.Location, LocationIds.DraynorVillage)} to begin working as a Spy for the Kharidian Empire.`,
  },
  {
    loc: LocationIds.Hupperdook,
    dateVals: [5, 169, 5, 10],
    description: `The FFBI end up uncovering ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Velethuil)}'s plan with ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ValeriaFolre)}. After a fight, he flees the city.`,
  },
  {
    loc: LocationIds.Kylvoro,
    dateVals: [5, 169, 12, 19],
    description: `The FFBI end up finding out about and stopping ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Velethuil)}'s plan with ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ValeriaFolre)} to attempt sacrifice to the Green Flame Orb in an attempt to unbalance the Blood War.
    A number of people die around the continent; including ones in positions of power, and the country is throwin into turmoil.`,
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [5, 43, 7, 21],
    description: `After a near-deadly fight, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Velethuil)}'s planeswalker spark ignites and he planeshifts to ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Hraclos)}. Already an accomplished mage,
    he ends up moving from ${dataItemToLinkable(DataTypeIds.Location, LocationIds.CryingIsland)} to ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Vvardenrock)}, and studies at the Sanctum Arcanum.`,
  },
  {
    loc: LocationIds.Hupperdook,
    dateVals: [5, 156, 13, 23],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Velethuil)}, now a high ranking member of the ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.AdactumArconnate)}, is appointed as head mage to ${dataItemToLinkable(DataTypeIds.Location, LocationIds.TowerOfEvocation)}.`,
  },
  {
    loc: LocationIds.Vvardenrock,
    dateVals: [5, 46, 9, 1],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Velethuil)} meets ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.VgeraBaerne)} at the Sanctum Arcanum. They end up becoming very close friends. `,
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [0, 1, 1, 1],
    description: "Vanwa Erea's crystal sphere is created.",
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [0, 100, 1, 1],
    description: `The Dawn War begins (and ends) around this time. During the Dawn War, the previous god of Death, Charon, is killed by a Dawn Titan. Vecna, a powerful lich, attempts to usurp
    control of the power of Death at this point, but is stopped by The Raven Queen, Moradin,  At the end of the Dawn War, The Dawn Titans are expelled from the Prime Material Plane, and humanoid races begin to move across Vanwa Erea.
    To stop the usurping of a god happening another time, the Raven Queen and the Weaver uses the last spark of the overgod, Dhaksha, to wipe the rest of the gods minds of this event.`,
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [1, 1, 1, 1],
    description: "Start of the First Age (Age of Growth) (Elvish - Lúmë Olastë).",
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [1, 1894, 13, 28],
    description: "The Dead God (Demon Lord Orcus) begins his invasion of the material plane. He gathers the attention of the Raven Queen, who finds a group of heroes to defeat him.",
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [1, 1902, 9, 24],
    description: "Orcus and the Raven Queen's heroes fight, with Orcus being defeated.",
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [1, 1939, 4, 1],
    description: "Seizing the opportunity of the weakening of the country with Orcus' invasion of Vanwa Erea, Grazz't, Athux and Tarraketh attempt to invade the prime material plane. They are eventually stopped by Illidan, and a number of the monks of Turstarkuri.",
  },
  {
    loc: LocationIds.Bloodlake,
    dateVals: [1, 1939, 4, 2],
    description: `Illidan imprisons Grazz't son, Athux, in the ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Bloodlake)}. This causes the lake to become corrupted, eventually darkening and acidifying the lake and the soil nearby.`,
  },
  {
    loc: LocationIds.BlackenedWastes,
    dateVals: [1, 1939, 4, 3],
    description: `Illidan imprisons Tarraketh in the tomb of Tarraketh, and drives Grazz't back to the Abyss. While cataclysmic, this saves the lives of many many people, signalling the end of the ${WorldAge.First}st age.`,
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [2, 1, 1, 1],
    description: "Start of the Second Age (Age of Exploration) (Elvish - Lúmë Rovanda).",
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [3, 1, 1, 1],
    description: "Start of the Third Age (Age of Arcanum) (Elvish - Lúmë Sairina).",
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [4, 1, 1, 1],
    description: "Start of the Fourth Age (Age of Conflict) (Elvish - Lúmë Aüth).",
  },
  {
    loc: LocationIds.MithrilMeldway,
    dateVals: [5, 169, 5, 16],
    description: "Tibus Tiberius, a human necromancer from waterdeep, is killed in the Temple of Nekh Talosh, a secluded temple to Helm, after attempting to steal the life force from a group of adventurers known as the FFBI.",
  },
  {
    loc: LocationIds.PortVsara,
    dateVals: [5, 171, 12, 1],
    description: "The currently unnamed first group of idiots (Rae, Rhaec etc - Light & Darkness) get kidnaped and then board a boat to Barovia.",
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 168, 5, 19],
    description: "Faerrel Dunblade, one of the Sons of house Dunblade, was killed in a street fight.",
  },
  {
    loc: LocationIds.Albatan,
    dateVals: [5, 148, 4, 15],
    description: `${PlayerIds.Rhaecondorius} is born in ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Albatan)}. `,
  },
  {
    loc: LocationIds.Albatan,
    dateVals: [5, 156, 9, 23],
    description: `${PlayerIds.Rhaecondorius} and his family are foced to Flee ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Albatan)} because his father was a lil bit stabbed.`,
  },
  {
    loc: LocationIds.SalusiFormiae,
    dateVals: [5, 156, 9, 23],
    description: `${PlayerIds.Rhaecondorius} and his family flee north to the Salus-Formiae.`,
  },
  {
    loc: LocationIds.SalusiFormiae,
    dateVals: [5, 171, 4, 27],
    description: `${PlayerIds.Rhaecondorius} Leaves the ${LocationIds.SalusiFormiae}.`,
  },
  {
    loc: LocationIds.EndlessSnows,
    dateVals: [5, 31, 1, 14],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.TheAlhoon)}, a specialist group of Illithids lead by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Slathos)}, arrive in the Endless Snows of northern ${LocationIds.Icaros}. They're the only group of Illithids on Vanwa Erea.`,
  },
  {
    loc: LocationIds.VvardenbridgeSwamp,
    dateVals: [5, 169, 4, 13],
    description: "CURRENT UNNAMED SECOND GROUP (Pana, Nix etc) get transported to Barovia after boarding Captain Morgan's ship at Vvardenbrige Swamp Docks.",
  },
  {
    loc: LocationIds.Manifest,
    dateVals: [5, 123, 7, 23],
    description: `${PlayerIds.PanaMandros} is born in Manifest, the youngest of four children (Siblings being Vanan, Sylceran, Erpetor)`,
  },
  {
    loc: LocationIds.Falador,
    dateVals: [5, 125, 7, 23],
    description: `${PlayerIds.PanaMandros} and the Man'dros family move to Falador`,
  },
  {
    loc: LocationIds.Levinthal,
    dateVals: [5, 150, 7, 14],
    description: `${PlayerIds.PanaMandros} runs away from falador, arriving at Levinthal and meeting ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.RhasaLucundus)}`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 158, 7, 14],
    description: `${PlayerIds.PanaMandros} moves to Waterdeep.`,
  },
  {
    loc: LocationIds.KharidianEmpire,
    dateVals: [5, 1, 1, 1],
    description: "The Dreoxidic Sword is in the Kharidian Empire.",
  },
  {
    loc: LocationIds.Naktamun,
    dateVals: [5, 144, 6, 11],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.QilueVeladorn)} sacrifices her life so that ${PlayerIds.Nix} may live. Nix's sister, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LeelaViitala)}, who had also recently been "Made", is sent to learn how to be an Assassin at a very young age.`,
  },
  {
    loc: LocationIds.KharidianEmpire,
    dateVals: [5, 150, 9, 11],
    description: "Qina, a rogue Halfing, has a mishap with a portal and ends up in the Kharidian Empire. He is Captured and experimented on.",
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 144, 8, 13],
    description: `${PlayerIds.Nix} finds themself on the doorstep of the ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LunereFamily)}.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 167, 8, 13],
    description: `${PlayerIds.Nix} and ${PlayerIds.PanaMandros} meet, and become friends.`,
  },
  {
    loc: LocationIds.Falador,
    dateVals: [5, 137, 12, 15],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.MalygosMandros)}, in dealings with Tiamat and the Cult of the Dragon, summons some demons in Falador. This garnered the attention of the Clerics of Helm and Yddragsil, but they never found the source of the demons.`,
  },
  {
    loc: LocationIds.Derinkuyyu,
    dateVals: [5, 137, 12, 15],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.MalygosMandros)}, in dealings with Tiamat and the Cult of the Dragon, summons some demons in Falador. This garnered the attention of the Clerics of Helm and Yddragsil, but they never found the location of him.`,
  },
  {
    loc: LocationIds.Jfarra,
    dateVals: [5, 137, 12, 15],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.MalygosMandros)}, in dealings with Tiamat and the Cult of the Dragon, summons some demons in Falador. This garnered the attention of the Clerics of Helm and Yddragsil, but they never found the location of him.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 156, 2, 22],
    description: `The ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LunereFamily)} are murdered in their home by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.MalygosMandros)}'s followers of the Cult of the Dragon, in disguise. They were looking for TODO: ????`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 156, 3, 21],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.TuveldSilwitch)} takes over the ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LunereFamily)} business in a coup.`,
  },
  {
    loc: LocationIds.Jfarra,
    dateVals: [5, 146, 8, 14],
    description: `${PlayerIds.EralStormhoof} was born in ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Jfarra)}`,
  },
  {
    loc: LocationIds.Derinkuyyu,
    dateVals: [5, 169, 1, 1],
    description: `${PlayerIds.EralStormhoof} leaves Derinkuyyu to travel to Vvardenbridge, eventually meeting the others.`,
  },
  {
    loc: LocationIds.Sanguinesti,
    dateVals: [5, 122, 4, 21],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.TristanKenric)} is born in Sanguinesti.`,
  },
  {
    loc: LocationIds.Sanguinesti,
    dateVals: [5, 169, 5, 9],
    description: `The False Hydra that had existed in ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Sanguinesti)} for a few months eats its last victim, and then leaves the town.`,
  },
  {
    loc: LocationIds.Sanguinesti,
    dateVals: [5, 136, 9, 9],
    description: `Sanguinesti is attacked by a bunch of Devils. ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.TristanKenric)} goes north a couple of months later to become a Cleric of Helm.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 162, 11, 4],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Xanathar)} hires a group to break into the manor of Amelia Rosetti, daughter of the late Ralmar Rosetti, a powerful noble of Waterdeep, who had died previously. ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.MraizeCoppermind)} (Disguised as Xanathar) and the party succeeded. Mraize took Amelia and extracted the information about the Stone Of Golgorr, which was stored in her family vault.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 117, 9, 13],
    description: `The thieves guild is dismantled by a number of high up members of the city of ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Waterdeep)}.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 170, 2, 21],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Durnan)} tips off some characters to try and shut down the Shadow Thieves of Waterdeep. It is successful, leaving Xanathar's Guild as the only Magical trading guild in the City.`,
  },
  {
    loc: LocationIds.Derinkuyyu,
    dateVals: [5, 169, 11, 22],
    description: `${dataItemToLinkable(DataTypeIds.Location, LocationIds.Derinkuyyu)}'s Small Temple to ${DeityIds.Yddragsil} and ${DeityIds.Moradin} is attacked by a Death Knight, and a few acolytes of the temple end up dying before an Elvish Paladin (Blue) kills it.`,
  },
  {
    loc: LocationIds.DragonspineMountains,
    dateVals: [5, 169, 11, 24],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Grazilaxx)} experiments with the Dreoxidic Sword/Dagger, creating the Spider Dragon. It ends up killing Ornn / Blue (Sword and Dagger are both in the cave at this time)`,
  },
  {
    loc: LocationIds.Basilaris,
    dateVals: [5, 169, 11, 24],
    description: `The Kobolds (Zack, Jason, Timmy, Billy, Tammy, Rocky & Kat) are found in the Dragonspine mountains (After being created as a fusion of Dragonborn eggs and Gnomes, the ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LightbrewFamily)}). While young, the Bearded Boogeyman (Actually ${PlayerIds.Ornn}) immolates Adam (one of the original Kobolds), and this causes the legend of the Bearded Boogeyman to begin.`,
  },
  {
    loc: LocationIds.Kylvoro,
    dateVals: [5, 143, 13, 16],
    description: `${PlayerIds.FaronaSevenson} was born (Daughter of ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.BryseisSevenson)} and ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Velethuil)}). `,
  },
  {
    loc: LocationIds.Kylvoro,
    dateVals: [5, 152, 1, 1],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Velethuil)}, ${PlayerIds.FaronaSevenson}'s Father, has the last time of contact with Farona and ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.BryseisSevenson)}`,
  },
  {
    loc: LocationIds.Kylvoro,
    dateVals: [5, 152, 1, 2],
    description: `${PlayerIds.FaronaSevenson} is given 'Starfall', a 'Sentient' sword. In actuality, the sword is just a wyvern claw that her mother found years ago, but the belief in starfall activates Icingdeath's sentience which eventually finds ${PlayerIds.FaronaSevenson}'s conciousness.`,
  },
  {
    loc: LocationIds.Hupperdook,
    dateVals: [5, 69, 13, 13],
    description: `${PlayerIds.Ornn} is born in ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Hupperdook)}.`,
  },
  {
    loc: LocationIds.Hupperdook,
    dateVals: [5, 49, 7, 22],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ThorinboltFireforge)} is born in Hupperdook. He is the Brother of ${PlayerIds.Ornn}.`,
  },
  {
    loc: LocationIds.Hupperdook,
    dateVals: [5, 69 + 34 + 25, 1, 5],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ThorinboltFireforge)} is annointed Head Overseer of Guilds in Hupperdook.`,
  },
  {
    loc: LocationIds.Hupperdook,
    dateVals: [5, 69 + 34, 4, 9],
    description: `${PlayerIds.Ornn} loses his hand (and his brother, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.GimeonFireforge)}), Underground near hupperdook somewhere in the Underdark.`,
  },
  {
    loc: LocationIds.Hupperdook,
    dateVals: [5, 69 + 68, 4, 9],
    description: `${PlayerIds.Ornn}, after spending many years in isolation forging things, Ornn is gifted his Hand Of Moradin by Moradin.`,
  },
  {
    loc: LocationIds.Hupperdook,
    dateVals: [5, 69 + 38, 9, 17],
    description: `Broin Fireforge (${PlayerIds.Ornn}'s Father) dies of grief / stress as a result of the events that occurred with Ornn and ${NpcIds.GimeonFireforge}.`,
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [5, 171 - 87, 11, 28],
    description: "The Fey Moon Eclipses the Prime Material Plane moon, and darkens the continent. Some people see this as a bad omen, others as a good omen.",
  },
  {
    loc: LocationIds.CrystallineForest,
    dateVals: [5, 171 - 87, 11, 28],
    description: `${PlayerIds.Aphelios} and his twin ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Alune)} are born into the ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LunariTribe)}.`,
  },
  {
    loc: LocationIds.ArgurrosMountains,
    dateVals: [5, 171 - 57, 11, 28],
    description: `${PlayerIds.Aphelios} finds the Noctum Pool.`,
  },
  {
    loc: LocationIds.CrystallineForest,
    dateVals: [5, 171 - 57, 12, 4],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LunariTribe)} are attacked by a group of Evil Lycanthropes.`,
  },
  {
    loc: LocationIds.Basilaris,
    dateVals: [5, 169 - 17, 5, 1],
    description: `${PlayerIds.Groundwater} is born (Experimented on human child with the Dreoxidic Sword - making a Blue/Bronze 'Dragonborn')`,
  },
  {
    loc: LocationIds.CrystallineForest,
    dateVals: [5, 71, 1, 1],
    description: `${PlayerIds.Yue} is born in the Feywild. Eventually, she travels from the Feywild to Port V'Sara (5e 171, start of campaign 2).`,
  },
  {
    loc: LocationIds.CrystallineForest,
    dateVals: [5, 71 + 15, 1, 1],
    description: `${PlayerIds.Yue} is taken from his home in the Feywild by the ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Ajaibs)} (headed by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Metthilur)}, posing as Sildur) and begins training.`,
  },
  {
    loc: LocationIds.MonasteryOfSaintCuthbert,
    dateVals: [5, 169 - 29, 11, 13],
    description: `${PlayerIds.Fremlan} is born in the Monastery of St Cuthbert. His mother is killed as a result of this.`,
  },
  {
    loc: LocationIds.Levinthal,
    dateVals: [5, 154, 9, 13],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.RhasaLucundus)} and ${PlayerIds.PanaMandros} find Fremlan, as a young boy, at the side of the road on their way back to Levinthal. They take him in and bring him to Levinthal.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 169, 13, 27],
    description: `${PlayerIds.Fremlan} moves to Waterdeep.`,
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [5, 71, 9, 9],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LilianaVess)} ends up planeshifting to Vanwa Erea as a result of her fight in Ravnica. She ought alongside ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.JaceBeleren)}, although he did not end up appearing on the same plane until much later. Liliana quickly became well known across the wizarding sphere as a powerful necromancer, eventually becoming the head of the ${dataItemToLinkable(DataTypeIds.Location, LocationIds.TowerOfNecromancy)}.`,
  },
  {
    loc: LocationIds.TowerOfNecromancy,
    dateVals: [5, 101, 1, 1],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LilianaVess)} is appointed head of the ${dataItemToLinkable(DataTypeIds.Location, LocationIds.TowerOfNecromancy)}.`,
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [5, 154, 4, 13],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.JaceBeleren)} ends up planeshifting to Vanwa Erea as a result of his fight in Ravnica. Although he plane shifted at the same time as Liliana, he arrived on Vanwa Erea much later than her.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 121, 3, 9],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.DrizztDourden)}, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.VgeraBaerne)}, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Velethuil)}, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Durnan)}, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.BryseisSevenson)}, under the adventuring group name The Wayfaring Strangers, begin adventuring across the continent.`,
  },
  {
    loc: LocationIds.Menzoberranzan,
    dateVals: [5, 92, 2, 19],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.DrizztDourden)} is born into house Do'Urden.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 136, 1, 1],
    description: `After a number of years on and off adventuring with the Wayfaring strangers, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Durnan)} moves back to Waterdeep and takes over command of the Yawning Portal.`,
  },
  {
    loc: LocationIds.Derinkuyyu,
    dateVals: [5, 136, 9, 1],
    description: `After a number of years on and off adventuring with the Wayfaring strangers, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.DrizztDourden)} moves to Derinkuyyu and buys a tavern, naming it the Durned Elf.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 157, 5, 20],
    description: "Khelben Arunsun, after a long and prosperous life, dies of old age next to his wife, Larael Silverhand, and family. Khelben was around 800 years old when he died, and had served as the Open Lord of Waterdeep for nearly 600 of those years.",
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 157, 5, 21],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.VajraSafahr)}, at age 17, is named the next Blackstaff, after Khelben Arunsun's death the day before. `,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 157, 5, 21],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LaeralSilverhand)} is named the Open Lord of Waterdeep, after Khelben Arunsun's death the day before. `,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 170, 11, 19],
    description: `A travelling merchant (Actually ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Nihloor)} in disguise) trades the Waterdeep City Watch for a race of Magically engineered griffons - actually magical implanted Sleeper Agents for future use. He trades them to Jendric Rosznar.`,
  },
  {
    loc: LocationIds.SeersVillage,
    dateVals: [4, 278, 12, 27],
    description: "Khelben Arunsun is born.",
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [4, 478, 8, 17],
    description: "Khelben Arunsun becomes the Blackstaff of Waterdeep, as well as the Open Lord of Waterdeep.",
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [4, 772, 1, 21],
    description: "After a sahaguin attack, Khelben Arunsun animates the walking statues of Waterdeep. The swordmaiden was destroyed; causing the remaining statue to be renamed to the 'Sahguin Humbled'.",
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [4, 900, 8, 13],
    description: "The Misthalin-Kharid war begins",
  },
  {
    loc: LocationIds.VanwaErea,
    dateVals: [4, 921, 13, 8],
    description: `The Misthalin-Kharid war ends, signalling the end of the ${WorldAge.Third}th Age.`,
  },
  {
    loc: LocationIds.DragonspineMountains,
    dateVals: [3, 691, 11, 14],
    description: "The black dragon, and founder of the Purple Dragon Knights, Thauglor, is born. Thauglor died during Green flame day nearly 1000 years later.",
  },
  {
    loc: LocationIds.Basilaris,
    dateVals: [3, 381, 1, 16],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.AurothTheWinterWyvern)} is born.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 161, 10, 28],
    description: `${NpcIds.MraizeCoppermind}, after many years working at the ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.XanatharsGuild)}, replaces ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Xanathar)} and pretends to pose as him.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 169, 12, 12],
    description: `${NpcIds.MraizeCoppermind} shoots Kel in Xanathar's hideout, and then ends up running away. ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Nihloor)} takes over Xanathar's guild (Posing as Nihls Suberton),`,
  },
  {
    loc: LocationIds.Kylvoro,
    dateVals: [5, 148, 9, 21],
    description: `${PlayerIds.Starfire} is born in Kylvoro.`,
  },
  {
    loc: LocationIds.Kylvoro,
    dateVals: [5, 160, 2, 1],
    description: "Jarnn Raskopolous is elected the new leader of Kylvoro, and moves into the Cirrus. The Tension between elves and tieflings rises here.",
  },
  {
    loc: LocationIds.Kylvoro,
    dateVals: [5, 164, 13, 7],
    description: "A large emerald explosion (The Ezelnär Orb) explodes, killing 37 people (Humans, Gnomes and Elves). This causes a lot of racial tension in the city.",
  },
  {
    loc: LocationIds.Kylvoro,
    dateVals: [5, 164, 13, 14],
    description: `Jarnn Raskopolous instigates the tiefling purge of Kylvoro, killing many Tieflings and causing many more to be pushed out of the city. Jarnn was the father of Jakob Raskopolous (Jakob was eventually replaced by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ValeriaFolre)}).`,
  },
  {
    loc: LocationIds.TempleOfNevermore,
    dateVals: [5, 167, 6, 12],
    description: `${PlayerIds.Starfire} finds the Temple of Nevermore, and becomes a Warlock of Nevermore.`,
  },
  {
    loc: LocationIds.Orcshire,
    dateVals: [5, 171 - 24, 2, 13],
    description: `${PlayerIds.Galen} is born.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 169, 12, 10],
    description: "Vincent Trench (Actually Rakshasa Valantajar, owner of the Tiger's Eye) is killed / sent back to hell.",
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 169, 12, 19],
    description: `${PlayerIds.Galen} gets gifted the Tiger's Eye, and renames it Ma'rreks Eye. The shop's sign has had the word "Tiger" shoddily drawn over, and is noticeable to any players that find it.`,
  },
  {
    loc: LocationIds.Orcshire,
    dateVals: [5, 164, 2, 13],
    description: `${PlayerIds.Galen} leaves Orcshire after his 17th birthday, and heads to Waterdeep.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 164, 2, 27],
    description: `${PlayerIds.Galen} arrives in Waterdeep.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 168, 12, 12],
    description: `${PlayerIds.Nix} and ${PlayerIds.PanaMandros} leave Waterdeep.`,
  },
  {
    loc: LocationIds.Hupperdook,
    dateVals: [5, 169 - 54, 2, 7],
    description: `${PlayerIds.Kel} is born in ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Hupperdook)}.`,
  },
  {
    loc: LocationIds.VvardenbridgeSwamp,
    dateVals: [5, 168, 13, 16],
    description: `${PlayerIds.Kel} makes the pact with the Raven Queen.`,
  },
  {
    loc: LocationIds.Hupperdook,
    dateVals: [5, 160, 12, 8],
    description: `${PlayerIds.Kel} helps ${NpcIds.MraizeCoppermind} steal the experimental guns in Hupperdook's Armory. Kel moved to Vvardenbridge immediately after this.`,
  },
  {
    loc: LocationIds.Vvardenbridge,
    dateVals: [5, 166, 9, 1],
    description: `${PlayerIds.Kel} spends a few weeks in the Vvardenbridge jail.`,
  },
  {
    loc: LocationIds.Vkhelos,
    dateVals: [5, 171, 8, 17],
    description: `${PlayerIds.Rae} ran away from home, after attacking her father, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.CaltonDourden)}.`,
  },
  {
    loc: LocationIds.Menzoberranzan,
    dateVals: [5, 145, 12, 1],
    description: `${PlayerIds.Rae} is born into house Do'Urden.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 171, 11, 1],
    description: `Jendrick Rosznar, an exotic animals trader and exile of House Rosznar, is murdered (by ${NpcIds.Nihloor} and some cranium rats, but made to look like it was done by the Rat King).`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 171, 11, 14],
    description: `The FFBI and ${NpcIds.ArveneMorrow} uncover a plot to try and smuggle slaves out of waterdeep on a Rosznar ship, the Bullrush. They eventually apprehend the smugglers, but have a run in with a mind flayer subjugate of ${NpcIds.Nihloor}.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 171, 11, 14],
    description: "Part of the Dock Ward is quarantined to deal with the rat plague outbreak, caused by the Rat King and the Lord of Plagues.",
  },
  {
    loc: LocationIds.Derinkuyyu,
    dateVals: [5, 172, 2, 3],
    description: `Both parties teleport to Derinkuyyu. The group meet ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.DrizztDourden)} in the Durned Elf, notified the Temple of Helm (and ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.TristanKenric)}).`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 172, 2, 4],
    description: "Both parties teleport to Waterdeep, talk for a while, then part ways.",
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 172, 3, 21],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.TuveldSilwitch)} flees the city.`,
  },
  {
    loc: LocationIds.Waterdeep,
    dateVals: [5, 172, 3, 20],
    description: `${dataItemToLinkable(DataTypeIds.Npc, NpcIds.TuveldSilwitch)} kills off Selith and Reli, in a supposed "Alley stabbing".`,
  },
  {
    loc: LocationIds.Rorekstead,
    dateVals: [5, 172, 4, 11],
    description: `Blue dragon attack on Rorekstead.`,
  },
  {
    loc: LocationIds.PortVsara,
    dateVals: [5, 172, 4, 9],
    description: `Elkain moves to Port V'Sara, and takes over the Ett-Inn.`,
  },
];

export const events: WorldEvent[] = eventConstructors
  .map(ec => new WorldEvent(ec.loc, new WorldDate(...ec.dateVals), ec.description))
  .sort((a, b) => WorldEvent.sortEvents(a, b));
