import { Alignment } from "../@types/Alignment/Alignment";
import { Deity } from "../@types/Deities/Deity";

import { FeatureToggles } from "../Constants/FeatureToggles";

import { DataTypeIds } from "../Constants/Ids/DataTypeIds";
import { DeityIds } from "../Constants/Ids/DeityIds";
import { LocationIds } from "../Constants/Ids/LocationIds";
import { RaceIds } from "../Constants/Ids/RaceIds";

const dhaksha: Deity = {
  id: DeityIds.Dhaksha,
  alignment: Alignment.TrueNeutral,
  aliases: [
    "The Creator",
    "The First One",
    "The Great Old One",
  ],
  displayOrder: 0,
  description: [
    "Dhaksha is the creator of all, the first, the original god. It originally created Skitskurr, then the other deities as humanoids or equivalents, but was killed by asmodeus at the end of the 0th age.",
    "All deities forgot about this; all except Skitskurr; assuming that they were the first deities to exist. Skitskurr does not correct this fact, for a multitude of reasons,"
    + " the most important being to stop another war from happening.",
  ],
  linkedToDeityIds: [
    DeityIds.TheWeaver,
    DeityIds.Asmodeus,
    DeityIds.QueenOfPain,
    DeityIds.Moradin,
    DeityIds.Ilmater,
    DeityIds.Helm,
    DeityIds.Viryn,
    DeityIds.Malacath,
    DeityIds.OkoTheTrickster,
    DeityIds.Selemene,
  ],
  originalRace: RaceIds.Other,
  type: DataTypeIds.Deity,
};

const originals: Deity[] = [
  {
    id: DeityIds.TheWeaver,
    alignment: Alignment.TrueNeutral,
    aliases: [
      "The Weaver",
      "God Of Magic",
      "The Divine Artisan",
      "The One Who Repairs",
    ],
    displayOrder: 1,
    description: [
      "The fabric of creation needs constant care, lest it grow tattered; for when it unravels, whole worlds come undone. It is the work of the Weaver to keep the fabric tight, to repair worn spots in the mesh of reality. It also defends from the things that gnaw and lay their eggs in frayed regions, whose young can quickly devour an entire universe if the Weaver let its attention lapse. Skitskurr is The Master Weaver, charged with keeping creation tightly woven, unfaded and malleable.",
      "After Dhaksha created Skitskurr, they set to work - Molding the prime material plane to their whim, and greating the original races.",
      "It still maintains the weave. A truly neutral God - Skitskurr will act to protect the balance of the universe and the weave wherever necessary. Skitskurr is not a communicative god – even its chosen are rarely if ever spoken to, for the God of Magic is far too busy to meddle in the affairs of mortals.",
    ],
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Yddragsil,
    ],
    originalRace: RaceIds.Other,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.TowerOfAbjuration],
  },
  {
    id: DeityIds.Sardior,
    alignment: Alignment.TrueNeutral,
    aliases: [
      "The Ruby Dragon",
    ],
    displayOrder: 102,
    description: [
      "Sardior was the dragon god of night, psionics, and secrets, and he was also the Master of gem dragons.",
      "Sardior was said to be a unique ruby dragon. In his natural form, he had a long and sinewy body covered with deep ruby red scales.",
      "At a distance, he was often mistaken for an ancient red dragon, but his playful demeanor soon betrayed his true self. He was also reputed to be a great conversationalist, and many who met him were unprepared for his sharp wit.",
      "Sardior's demesne was a huge floating castle named the Ruby Palace, which orbited the world and always lay in the shadows from the sun. On the nights it was seen, viewers often mistook it for a small red moon.",
      "Periodically, Sardior moved his fortress through the planes, visiting the djinni Citadel of Ice and Steel.",
      "Sardior birthed the first dragons and taught them how to cast magic. He eventually gave birth to Tiamat and Bahumat, the two dragons that became gods of their respective dragon types.",
    ],
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Tiamat,
      DeityIds.Bahamut,
    ],
    originalRace: RaceIds.Dragon,
    type: DataTypeIds.Deity,
  },
  {
    id: DeityIds.Tiamat,
    alignment: Alignment.ChaoticEvil,
    aliases: [
      "The Avaricious",
      "The Chromatic Dragon",
      "The Dragon Queen",
    ],
    displayOrder: 101,
    description: [
      "Tiamat was the lawful evil dragon goddess of greed, queen of evil dragons and a reluctant servant of the devil Asmodeus. Originally, she was a member of the Draconic pantheon, but eventually became enraged at her brother-god Bahumat and father-god Sardior for being treated unfairly",
      "Tiamat was also the eternal rival of her brother Bahamut, ruler of the good metallic dragons.",
    ],
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Sardior,
      DeityIds.Bahamut,
    ],
    originalRace: RaceIds.Dragon,
    type: DataTypeIds.Deity,
  },
  {
    id: DeityIds.Bahamut,
    alignment: Alignment.LawfulGood,
    aliases: [
      "The Platinum Dragon",
    ],
    displayOrder: 103,
    description: [
      "Bahamut was the dragon god of justice, law, good dragons, metallic dragons, wisdom, and enlightened justice (justice tempered with mercy and punishment with forgiveness).",
      "His natural form was that of a platinum dragon, said by many to be the only one of his kind.",
      "He was friends with his father Sardior, and also the eternal rival of his sister Tiamat, queen of the chromatic dragons.",
    ],
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Sardior,
      DeityIds.Tiamat,
    ],
    originalRace: RaceIds.Dragon,
    type: DataTypeIds.Deity,
  },
];

const standardPantheon: Deity[] = [
  {
    id: DeityIds.Helm,
    alignment: Alignment.LawfulGood,
    aliases: [
      "The Watcher",
      "The Vigilant One",
      "He Of The Unsleeping Eyes",
      "The Great Guard",
    ],
    displayOrder: 13,
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Ilmater,
      DeityIds.Viryn,
      DeityIds.Moradin,
    ],
    description: [
      "Helm, also known as the Vigilant One and The Watcher, is the god of guardians and protectors. He is worshiped by guards and paladins both, long being seen as a cold and focused deity who impartially took the role of defender and sometimes also enforcer. He is one of the most communicative gods of the Misthalin Pantheon, with many praying to him for general advice.",
      "A very old deity, Helm is the eternal sentry and was always seen wearing a full suit of armor that represented the weight of his heavy responsibility. Yet Helm always got the job at hand done without complaint. The people widely admire these qualities in what they see as a humble and reassuring god. Helm is particularly fond of children, and often forgave their minor transgressions.",
    ],
    originalRace: RaceIds.Human,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.Derinkuyyu],
  },
  {
    id: DeityIds.TheRavenQueen,
    alignment: Alignment.LawfulNeutral,
    aliases: [
      "(SECRET) Kala",
      "The Feathered One",
      "The Goddess of Death",
      "The Matron Of Ravens",
    ],
    displayOrder: 5,
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Yddragsil,
    ],
    description: [
      "The Raven Queen is the deity of the afterlife, passing, ravens, and winter. Although a complete account of the Raven Queen's motivations and origins was not generally known, it was believed that she was a powerful sorceress who took the place of Charon, the original deity of death, after a climactic battle between the gods in the 0th age.",
      "One of the Raven Queen's divine realms in the Shadowfell was a castle known as the Fortress of Memories. It was a place of overwhelming sorrow, overflowing with memories taken from mortals and fragments of dead deities, material objects collected by the shadar-kai and brought to her as gifts, and apparitions of creatures and places associated with strongly emotional stories. Swarms of ravens occasionally flew out of the fortress, taking her cryptic messages to the far reaches of the multiverse and acting as the Queen's eyes and ears while away.",
      "The Raven Queen was also said to claim a domain in the Shadowfell known as Letherna, a fortress of black ice within a frozen forest through which the souls of the deceased had to pass before reaching the afterlife.",
      "One of the Raven Queen's greatest enemies was the demon lord Orcus, who constantly sought control of the Shadowfell. He hoped to find a weakness in her domain by discovering her true name.",
      "Another devout enemy of the Raven Queen was the immortal lich Vecna, who envied her for her unique abilities to tap into the flow of souls and to harvest knowledge. One of his goals was to overthrow the Queen and rule the entire Shadowfell from her Fortress of Memories. Vecna's servants constantly battled with the Raven Queen's shadar-kai followers.",
      "Other wizards and necromancers craved the Raven Queen's knowledge and domain over souls. Attempts at conquering the Fortress of Memories were constant, but were always thwarted by her more fanatical shadar-kai defenders.",
      "Clerics of the raven queen were called ",
    ],
    originalRace: RaceIds.ElfEladrin,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.Manifest, LocationIds.Hraclos],
  },
  {
    id: DeityIds.Moradin,
    alignment: Alignment.LawfulGood,
    aliases: [
      "The All Father",
      "The Creator",
      "Dwarffather",
      "Soul Forger",
    ],
    displayOrder: 12,
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Ilmater,
      DeityIds.Viryn,
      DeityIds.Helm,
    ],
    description: [
      "Moradin is the god of the dwarves and gnomes. A harsh but fair judge, he was strength and force of will embodied. Moradin inspired dwarven inventions and constantly sought to improve that race, encouraging their good nature,"
        + " intelligence, and harmonious existence with other good races while battling their pride and isolationist tendencies. Moradin's holy day was on the crescent moon and he was worshipped at forges and hearths.",
    ],
    originalRace: RaceIds.Dragon,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.Hupperdook, LocationIds.Derinkuyyu],
  },
  {
    id: DeityIds.Viryn,
    alignment: Alignment.ChaoticGood,
    aliases: [
      "Metatron",
      "The Angelic One",
    ],
    displayOrder: 14,
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Ilmater,
      DeityIds.Moradin,
      DeityIds.Helm,
    ],
    description: [
      "Viryn is the God of the Celesitals, aasimar, the sun, agriculture, and harvest. He is the deity most commonly worshiped by humans and aasimar, and his priests are well received wherever they go. Paladins and rangers are found among his worshipers. Many people worship Viryn in hopes of good fortune and harvest.",
      "The main tenants of Viryn are: ",
      "- Alleviate suffering wherever you find it.",
      "- Bring Pelor’s light into places of darkness, showing kindness, mercy, and compassion.",
      "- Be watchful against evil",
      "Followers of Viryn are known as Crusaders. When not in formal dress, Crusaders favor light-colored tunics, particularly sky blues, whites, or grays. Some dress in commoner's clothing, especially when serving as community healers or in disguise. On formal occasions, they wear a black cloak emblazoned with the symbol of the sun. They blend into the darkness, only the shining symbols visible to their foes.",
    ],
    originalRace: RaceIds.AasimarProtector,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.Vvardenrock, LocationIds.ErukteakMonastery],
  },
  {
    id: DeityIds.Ilmater,
    alignment: Alignment.NeutralGood,
    aliases: [
      "The Crying God",
      "The Broken God",
      "The One Who Endures",
    ],
    displayOrder: 13,
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Viryn,
      DeityIds.Moradin,
      DeityIds.Helm,
    ],
    description: [
      "Ilmater was the god of those who suffered, the oppressed, and the persecuted, who offered them relief and support, encouraged them to endure, and who encouraged others to help them, to take their burdens or take their places.",
      "He was also the god most worshipped by Humans and many other races - as he was the god that best embodied normality, compassion and resilience that normal people would need to live their lives",
      "In avatar form, Ilmater appeared as a short man with a burly build and wearing only a breechcloth, with a plain but kind and comforting face, balding head, and a hairy body. But this body bore the marks of mutilation and torture on the rack, covered with open cuts, closed scars, burns, and a range of other wounds. Ilmater's joints were broken, his limbs were ravaged, and his hands were smashed yet still functional. Moving caused him a great deal of pain as he dragged himself around. No matter how much his avatar healed, it still showed these terrible wounds.",
      "Ilmater was the incarnation of compassion, and the eternal foe of suffering.",
      "He sought to offer aid and relief and words of comfort to those in pain, who were oppressed, or otherwise in great need. ",
      "He encouraged them to endure their pain, suffering, and abuse, for good things came to those who waited.  ",
      "He encouraged his faithful to halt and relieve the suffering of others, and to take it on themselves if they must. ",
      "Ilmater was himself a willing sufferer, taking one's place to bear their burden, seeking to endure any pain if it would lessen the pain of another.",
    ],
    originalRace: RaceIds.Human,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.Keltar, LocationIds.Vvardenrock],
  },
  {
    id: DeityIds.Yddragsil,
    alignment: Alignment.TrueNeutral,
    aliases: [
      "The World Tree",
      "The Great Treant",
      "Chauntea",
      "Melora",
      "Erathis",
    ],
    displayOrder: 3,
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.TheWeaver,
      DeityIds.TheRavenQueen,
    ],
    description: [
      "The giant tree that sets the world, Yggdrasil is the god of nature, the wild, agriculture, and druids.",
      "Originally the first treant, it ascended and took the mantle of holding the planes aloft when Dhaksha was exterminated by Asmodeus. ",
      "Yddragsil was a sentient tree-like cosmic structure in the World Tree cosmology model that connected all of the planes to each other. Normal planar travel used the Astral plane to pass from the Prime Material Plane to one of the other Outer planes and all inter-planar journeys had to pass through the Prime Material nexus.",
      "Angelic servants of some deities used the tree as a kind of 'celestial ladder' to avoid having to go through the Prime Material plane, although the tree did not enjoy being used as such. Mortal travelers would often meet treants and dryads sent to prevent their passage. However, if their intentions were noble enough the tree allowed them to pass unhindered.",
    ],
    originalRace: RaceIds.Other,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.VoronWeosst, LocationIds.VoronWeosstOuterRing],
  },
];

const seldarinePantheon: Deity[] = [
  {
    id: DeityIds.OkoTheTrickster,
    alignment: Alignment.ChaoticGood,
    aliases: [
      "Oko",
    ],
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Selemene,
      DeityIds.Elistraee,
      DeityIds.Vulkoor,
      DeityIds.Malacath,
    ],
    displayOrder: 210,
    description: [
      "One of the original Elvish pantheon deities, Oko is a god of tricks/trickery, laughter, kindness, humor, inventiveness, and honor.",
      "An important part of Oko's beliefs that he spread upon his followers was never to hide the tricks that you play on others; one must own up to their good or bad deeds, but not to admit it to someone outright.",
      "Oko delighted in wordplay and sophisticated humor, and he was playful, stubborn and vain. He enjoyed being shocking and innovative, and shared stories and songs with those who appreciate such things, regardless of the listener's race or background. He valued diversity of experience, learning, and innovation,"
      + " and loved all who enjoy such things. Baser humor, however, usually pranks, proved irresistible to him, especially if the victim took his pranks seriously. He was also happy disturbing the status quo and was easily distractable by doing such things.",
      "Oko was married to Selemene; together, the two headed the main Evlish pantheon in the Seelie courts. Oko was the chaotic voice to Selemene's lawful and sensible calmness, and he would often tease his wife in the open - although their relationship was strong and supportive upon getting to know them better",
      "Oko resides in a Ladinion, the name for the Seelie Court. While the court itself is static, the location of the court moves around between the feywild and upper planes, on the Whim of Oko",
    ],
    originalRace: RaceIds.ElfHigh,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.CryingIsland, LocationIds.Hraclos, LocationIds.Menzoberranzan],
  },
  {
    id: DeityIds.Selemene,
    alignment: Alignment.LawfulGood,
    aliases: [
      "The Moon Goddess",
      "The Moon",
    ],
    displayOrder: 202,
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.OkoTheTrickster,
      DeityIds.Elistraee,
      DeityIds.Vulkoor,
    ],
    description: [
    ],
    originalRace: RaceIds.ElfMoon,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.Vkhelos],
  },
  {
    id: DeityIds.Elistraee,
    alignment: Alignment.NeutralGood,
    aliases: [
      "The Drow Goddess",
      "The Bladesinger",
    ],
    displayOrder: 203,
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.OkoTheTrickster,
      DeityIds.Selemene,
      DeityIds.Vulkoor,
    ],
    description: [
    ],
    originalRace: RaceIds.ElfDrow,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.Menzoberranzan],
  },
  {
    id: DeityIds.Vulkoor,
    alignment: Alignment.ChaoticEvil,
    aliases: [
      "The Great Scorpion",
      "The Pincer",
      "The Lord Of War",
    ],
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.OkoTheTrickster,
      DeityIds.Elistraee,
      DeityIds.Malacath,
    ],
    displayOrder: 201,
    description: [
      "Elistraee's consort, Vulkoor appears as a large drow human with a huge scorpion tail attached to his back. He is one of the secondary deities of the drow (maintaining domain over the drow's evil side), as well as "
      + " the principal deity of the Scorrow, a drow-scorpion hybrid race that are sometimes born when other elves mate with cursed drow bloodlines",
      "Vulkoor is the deity of brutality, poison, war, tactical brilliance, and victory. He believes that domination of creatures by brute force is often the way to solve problems.",
      "Vulkoor and Malacath are rivals; often in conflict and angry at each other.",
      "(SECRET) They have a long standing war against each other - caused by the fact that Vulkoor framed Malacath for conspiring with The Queen Of Pain during the 2nd age. The incident was successful,"
      + " and so Oko banished Malacath from the Seelie court as punishment",
    ],
    originalRace: RaceIds.ElfDrow,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.Hraclos],
  },
  {
    id: DeityIds.Malacath,
    alignment: Alignment.LawfulEvil,
    aliases: [
      "The Green One",
      "The First Orc",
      "The Ostracized",
    ],
    displayOrder: 200,
    linkedToDeityIds: [
      DeityIds.Dhaksha,
    ],
    description: [
      "Malacath, the spurned and the ostracized, the keeper of the Sworn Oath, and the Bloody Curse. Malacath is the cheif deity of orcs, cyclopses, and trolls.",
      "He was thrown out of the Seelie court in the 0th/1st age after joining forces with Graz'zt - unknown to anyone except him and Vulkoor, he was framed by Vulkoor.",
      "Malacath his worshipers to do the following:",
      "- Gather and breed, and your numbers shall flourish.",
      "- Rise up in hordes and seize that which is rightfully yours.",
      "- Raid. Kill. Conquer.",
    ],
    originalRace: RaceIds.Orc,
    type: DataTypeIds.Deity,
    // doesn't really have a standard place of 'Worship'
  },
];

const otherDeities: Deity[] = [
  {
    id: DeityIds.QueenOfPain,
    alignment: Alignment.ChaoticEvil,
    aliases: [
      "Akasha (SECRET)",
      "Shami-Amourae",
      "The Temptress",
      "The First Succubus",
      "The One Who Screams",
    ],
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Asmodeus,
    ],
    displayOrder: 9,
    description: [
      "During the age before ages (0th age), the King of Elze nursed a desire for pain — forbidden pain.",
      "In a less prominent political figure, such desires might be considered unwise, but in a monarch of his stature,"
        + " to satisfy such thirsts would have threatened the virtue of his Throne. Therefore he turned to"
        + " his dungeon full of demonologists, promising freedom to whoever could summon a personal succubus of torment and bind it entirely to his service.",
      "The creature who arrived, Akasha by name, visited upon him such exquisite torments that he named her his Secret Queen, and he began to spend all his"
        + " spare moments submitting to her clever torments—eventually abdicating all his responsibilities in his pursuit of the painful pleasures that only she could bring.",
      "The Queen of Pain could bring him to the brink of death, but she was rune-bound to keep him alive. At last the King's neglect of state brought on an uprising.",
      "He was dragged from his chamber and hurled from the Tower of Invocations, and at the moment of death, Queen of Pain was let loose into the world, freed from servitude — freed to visit her sufferings on anyone she deigned to notice.",
      "The Queen now rules the 570th latyer of the abyss, and tempts those who want to be involved with pain - both causing it, and hurt by it.",
      "(SECRET) In reality, Akasha was one of the first mortals born - Brother of Asmodeus, and one of the original evil deities, who was cast out and became the first demon after Dhaksha was killed.",
      "Realm of Queen Of Pain, Queen of the succubi. Before her domain it was a vast plane of living flesh, but Queen Of Pain turned it into a beautiful world of grassy hills on the shore of an ocean under perpetual sunset.",
      "Among the carefully built white buildings throughout the hills, Queen Of Pain's seat of power was in the coastal city of Rivenheart, said to contain all possible pleasures and desires to tempt its visitors into relaxing. It was also home to the Radiant Sisters, Queen Of Pain's own personal guards and loyal lilitu bards who protected her from would-be usurpers.",
      "The Queen Of Pain was described as an incredibly beautiful human-like female with bat-wings, horns, with a long prehensile whip tipped with a spike-like stinger. She was the current holder of the title of Succubus Queen; other demon lords aspiring to the position included Lady Lynkhab and the exiled Xinivrae. Other rivals existed elsewhere in the Abyss, but they ultimately posed little or no threat to her.",
      "The Queen Of Pain was among the first of the succubi to come into being in the Abyss. She obtained her current title after years of waging wars and committing savage betrayals upon her fellow 'sister' succubi and former paramours. As a result of her ruthless climb to the top, she has cultivated a long list of enemies, which includes  Graz'zt, Yeenoghu, and Baphomet. Her few allies include the Prince of Demons the Demogorgon,"
      + " with whom she birthed the monstrous Arendagrost; Pazuzu, from whom she mothered the succubus Red Shroud; her current consort Mastiphal the Hunting Sovereign; and Socothbenoth, a demon lord concerned with sexual taboos and perversions.",
    ],
    originalRace: RaceIds.TieflingDemon,
    type: DataTypeIds.Deity,
  },
  {
    id: DeityIds.NevermoreTheShadowFiend,
    alignment: Alignment.NeutralEvil,
    aliases: [
      "The Shadow Fiend",
      "The Soul Stealer",
      "The Torturer",
      "The Judge Of The Faithless",
    ],
    displayOrder: 11,
    linkedToDeityIds: [
      DeityIds.Dhaksha,
    ],
    description: [
      "'It is said that Nevermore the Shadow Fiend has the soul of a poet. In fact, he has thousands of them. Over the ages he has claimed the souls of poets, priests, emperors, beggars, slaves, philosophers, criminals, villains and heroes; no sort of soul escapes him. What he does with them is unknown."
      + " No one has ever peered into the Abyss whence Nevermore reaches out like an eel from among astral rocks.",
      "Does he devour them one after another? Does he mount them along the halls of an eldritch temple, or pickle the souls in necromantic brine? Is he merely a puppet, pushed through the dimensional rift by a demonic puppeteer, or is he more than that - a force of the universe itself, simply doing what he must?"
      + " So intense his aura of darkness, that no rational mind may penetrate it, but many are utterly consumed by it.",
      "Of course, if you really want to know where the stolen souls go, there's one sure way to find out: Add your soul to his collection. Or just wait for Nevermore.'",
      "",
      "Nevermore is the 'Deity' of the faithless - he owns and devours the souls of those who refuse to follow a deity. He looks after the vat of souls - a huge mass of the souls that never followed a god, that he takes to his realm as punishment."
        + " He is a deity that very few know about - one thing is for sure though: many people would have had a less painful afterlife had he not ever existed.",
      "Nevermore is secretly plotting to overthrow Asmodeus - by using the orb of Ezelnär (Green Flame) to store his soul. He must do this by killing Asmodeus in the Prime Material Plane, which is no small feat.",
    ],
    originalRace: RaceIds.Other,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.TempleOfNevermore],
  },
  {
    id: DeityIds.Asmodeus,
    alignment: Alignment.LawfulEvil,
    aliases: [
      "Ahriman (SECRET, TRUE NAME)",
      "The First Devil",
      "The Fiddler",
    ],
    displayOrder: 10,
    linkedToDeityIds: [
      DeityIds.Dhaksha,
      DeityIds.Viryn,
      DeityIds.Tiamat,
    ],
    description: [
      "In the beginning—and even before—chaos was all that existed. Out of it came a number of creatures, including the first demons. A state of raw chaos was intolerable to the universe, so a force arose to combat it—the power of law. From this principle of abstract order, a number of beings coalesced to combat the demons.",
      "These new deities of law suited themselves in gleaming armor made of pure stability and took up weapons forged of ideal thought. Then they waded into battle against the demons. After the battle had raged for uncounted eons, the law deities felt the need to track their progress. They created numbers, to record the enemies slain, and time, so they could see how long victory would take.",
      "Gradually, however, the deities of law began to suspect that the supply of demons was infinite. Weary of battle, they wished to move on to other projects, such as the creation of worlds and intelligent beings. So they made beautiful winged warriors to serve them and wield their divine magic, both in the endless war against the demons and in the worlds yet to be created. These beings, glorious in their diversity, were called angels.",
      "The bravest, toughest, fiercest, and most beautiful of the angels was Asmodeus. He slew more demons than any other of his kind—more even than any deity. But as the eons wore on, Asmodeus and the members of his magnificent and terrible company began to take on some of their enemies’ traits, so as to fight them more effectively. Gradually, their beauty turned to ugliness, and the deities and other angels began to fear them. Eventually, the inhabitants of the celestial realms petitioned the great gods to banish Asmodeus and the most fearsome of his avenging angels. Asmodeus was banished to Baator, and now resides over therem plotting to overtake everything and everyone. He just needs to find their price.",
      "Asmodeus is the strongest, most cunning, and most handsome of all devils. He is physically stronger than any other devil, and the most cunning and artful. He is typically described as appearing as a giant human, over 13 feet tall, with dark skin and hair, red eyes, handsome features, and small horns on his forehead. He dresses in regal finery of unimaginable expense; a single article of clothing worn by Asmodeus is worth more money than an average nation will spend on food in a year. Beneath his clothing, Asmodeus' body is covered in bloody wounds which he sustained when he fell from the Upper Planes. His wounds ooze blood daily, and any drop of blood which touches the ground grows into a powerful devil. He is described as a 'calm, chillingly reasonable' being with a modest appearance that hides his true power.",
      "Asmodeus never showed himself except through avatars or project image, both in humanoid forms. Asmodeus' avatars looked like a slim, charismatic, red-skinned humanoid over 13 feet (4 meters) tall, with horns on his head and glowing red eyes. Overall, he provided charismatic and beautiful looks that captivated people. He always had a perfectly trimmed beard and wore very expensive red and black clothing, each of these cloths was valuable enough to cover the annual national spending of any nation, and each of his ten avatars held a Ruby Rod of Asmodeus. Underneath these expensive garments, the body was wracked with bleeding injuries. While he was in pain, he managed to give off the appearance of someone unconcerned with the pain the injuries caused him.",
      "Asmodeus was a lawful creature with the goal of becoming the supreme creature in the multiverse even if it required destroying the current multiverse and creating a new one. While the method he wanted to use to achieve this goal was not publicly known, and the only one who had the necessary knowledge to piece the method together hoped that it was not the one Asmodeus wanted to use, that Asmodeus wanted to take over the multiverse for himself was a known fact. He genuinely believed that a bright future awaited the multiverse, if he was to rule it. As arrogant this claim sounded, Asmodeus had the competence to back it up.",
      "When faced directly, he gave off the impression of a confident and eloquent man who was quite reasonable to talk with. In fact, it was quite difficult to see that he was an evil person past his manners that were the best found in Hell. His confidence was real and rooted in his knowledge to be one of the most powerful creatures in existence. However, he was not above pretending to know more than he did. Thus, he pretended to not just know but also foresee the actions of people who genuinely surprised him.",
      "Asmodeus ruled the entire plane of Baator. His seat of power was Nessus, the ninth layer. His serpentine body lay at the bottom of a rift called the Serpent's Coil.",
      "However, the denizens of this plane did not know about it. The blood that his wounded body gave off turned into new cornugons and pit fiends, usually the latter.",
      "He built up a big army over the years through this means. The army was stationed in Malsheem, a giant fortress so large that it was considered unmappable. As mentioned above, when meeting with others, he used of his humanoid looking avatars.",
      "The other archdevils were annually called to Malsheem. Asmodeus had a giant storage of souls in that citadel, which could be bought from him at an extremely high rate",
    ],
    originalRace: RaceIds.TieflingDevil,
    type: DataTypeIds.Deity,
    standardPlacesOfWorship: [LocationIds.ScintillantWastes],
  },
];

const deitiesWithoutDhaksha = [
  ...originals,
  ...standardPantheon,
  ...seldarinePantheon,
  ...otherDeities,
];

const allDeities = [dhaksha, ...deitiesWithoutDhaksha];

const modifiedWithoutDhaksha: Deity[] = deitiesWithoutDhaksha.map((deity: Deity) => {
  const without = {
    ...deity,
    linkedToDeityIds: deity.linkedToDeityIds
      .filter(id => id !== DeityIds.Dhaksha),
  };
  return without as Deity;
});

export const deities = FeatureToggles.DisableDhaksha
  ? modifiedWithoutDhaksha
  : allDeities;

export const findDeityById = (id: DeityIds): Deity | undefined => deities
  .find(x => x.id === id);
