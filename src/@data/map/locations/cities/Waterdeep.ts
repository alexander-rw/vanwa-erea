import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { PlayerIds } from "../../../../Constants/Ids/PlayerIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const Waterdeep: Location = {
  id: LocationIds.Waterdeep,
  type: DataTypeIds.Location,
  description: [
    `Waterdeep, the second largest city in Vanwa Erea, and a town of extreme diversity and opportunity, lies in the north-west of the continent. It is often known as the Crown of the North or the City of Splendors by the locals.
    Because of its northern seaside location, Waterdeep is generally quite cold and rainy in months that are not summer, and often snowy in the winter months.`,
    `The city was the hub of trading from the mineral-rich lands to the north, and would even sometimes receive trade from underwater cities of tritons or merfolk, although this was exceedingly rare.
    Waterdeep was named for its outstanding natural deep-water harbor, and the city that grew up at this site became the commercial crossroads of the northern Realms.
    More than 100,000 people made their home in Waterdeep. Thousands of years ago, the city (then a town) sprawled northward from the sea, spreading along the flanks of Mount Waterdeep, which used to be home to the Melairkyn, a mithral-mining dwarven clan, and the entire length
    and great depth of the mountain was riddled with passages and tunnels, most of which were occupied by deadly creatures whose presence in the mountain predated the founding of the city itself.
    The halls of Undermountain located beneath the city were a popular target for adventurers, who enjoyed the close vicinity of the city's main taverns and temples where aid could be purchased through donations. The only public entrance to the Undermountain is in the Yawning Portal, and was closed to the public until the tavern was reopened by Durnan. Since then, many people have tried (And failed) to venture into the undermountain.`,
    `Given its size and influence, Waterdeep was a cosmopolitan city with a diverse population of citizens.
    While they often sought the improvement of their lives through the accumulation of wealth and self-importance, as a people, they would not stand for military conquest or the thought of imperialization.
    Waterdeep was a highly magical city, and as such, even the middle and upper-class commoners would often have a minor magical item or two.`,
    `Waterdeep was one of the very few, if only, city on the mainland that did not have a significant Mistguard Presence, partly due to its distance from ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Vvardenrock)}, and partly because of its political leanings and ideals. Waterdeep maintained an armed force, the City Guard. Headed by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.JalesterSilvermane)}, it serves as Waterdeep's soldiery and its members staffed garrisons, road patrols, and watchposts, and serve as bodyguards and gate guards, as well as the city's police force.
    Magisters, sometimes called Black Robes due to their attire, were the head of Patrols as well as the tax and information collectors of Waterdeep. Most characters would be aware that magisters can pass a sentence without a trial, and so should be treated with respect.
    If you travel overland in a small party or alone, you aren't required to register with a magister unless your stay extends beyond 10 days, or, with written permission from a higher-status individual who lives in the city (such as a mage or noble family), longer depending on circumstance. Otherwise, you must register with a magister either at the harbor, the gates, or the city courts. Discovery of your failure to do so can result in a fine or forced labor. Registration subjects you to monthly taxation, dependant on your line of work.`,
    "Waterdeep is a city of firm laws and swift justice. Adventurers hell-bent on slaughter and plunder won't fare well in the City of Splendors. The punishments for assault, arson, theft, and murder are severe, regardless of the reason for the crime. https://noads.5e.tools/img/adventure/WDH/The-Code-Legal.png",
    ["Angharion's Dragonward", `After a series of dragon-related events in the Third age, Anghiron, the original Sorcerer-King of Waterdeep and the first Open Lord of Waterdeep, cast a Mythal in Waterdeep centered under Ahghairon's tower, which encompassed the city as it existed in Ahghairon's day. In newer areas of Waterdeep, the dragonward's effects were less severe or non-existent. Any creature with draconic blood that tried to enter the city was overcome with an overwhelming urge to leave the area, never to return. However, any draconic creature that touched the Dragonstaff of Ahghairon was able to bypass the dragonward for as long as the staff's wielder allowed or until the creature was struck by the staff.
    The current holder of the Dragonstaff is Barok Clanghammer, a golden-haired and bearded elderly dwarf, and friend of the previous holder of the Dragonstaff, Maaril.`],
    ["The Walkinwg Statues:", `Before the Misthalin-Kharid war, just two of these eight behemoth statues stood visible at the northern foot of Mount Waterdeep. Ninety feet tall, one resembled a bald human staring out to sea, the other a knight with an open-faced helm. They stood as silent watchers, ever quiet. Many people would say, even to this day, that the statue known as the 'Sahuagin Humbled' was an avatar of Helm Himself.
    Around 60 years after the M-K war ended, the Blackstaff, Arunsun, uncovered some very interesting knowledge pertaining to a number of the other statues, and eventually found and replanted the statues properly. The 8 statues now watch tirelessly over the city, protecting its people. The Blackstaff has the power to animate the golems in time of danger. The name of the 8 golems are: 'Sahuagin Humbled', named because it protected the city from a sahuagin attack, 'The God Catcher', 'The Swordmaiden' (destroyed), 'The Great Humbled', 'The Lady Humbled', 'The Honorable Knight', 'The Hawk Man', 'The Griffon', a 20 ft tall Griffon Statue. The Griffon was the latest statue to appear, a few months before the City Guard were gifted the Griffons.`],
    ["Flying Guards:", "As of late 5e 170, many of the City Guard use flying griffons to patrol much of the city, gifted to the city by a travelling salesman. They are trained to ride the griffons around the city, and many riders form an almost inseparable bond with their griffon. Magisters always walk on foot, never using a griffon for flight."],
    "-------------------------------------------------------------------------------------------",
    ["Waterdhavian Noble Families:", "Waterdeep contains well over a hundred noble families. The following noble houses are fine choices for any character with the noble background, and are mentioned below. There are a number of other noble families not mentioned here."],
    ["House Cassalanter:", "Victoro and Ammalia Cassalanter are the heads of the Cassalanter family, a noble house of Waterdeep and one of the richest families on the continent. The family made their fortune in banking, money-lending and rumor-mongering for the highest payer. Their estate is located in the Sea Ward, and their crest looks like a swan with one wing outstretched to the left."],
    ["House Amcathra:", "The Amcathras are a family that specializes in horse breeding and training, cattle ranching, wine-making, and weaponsmithing. The family motto is \"We trample our troubles.\" The family has a large villa in the North Ward, on the east side of the High Road between Hassantyr's Street and Tarnath Street. They also own a cattle and horse ranch just outside the city, to the north."],
    ["House Margaster:", "The Margasters are a family whose business interests lie in land-based shipping and bulk goods trading. The house also has a quiet history of wizardry. The family motto is \"Nothing is beyond our grasp.\" The Margaster family estate is situated between Stabbed Sailor Alley and Shattercrock Alley in the North Ward."],
    ["House Phylund:", "The Phylunds are a family that captures and sells monsters. Monsters that can't be trained as pets or guard beasts are sold to arenas or harvested for their meat, bones, and skins. The Phylunds sponsor adventuring parties and monster-hunting expeditions, and their motto is \"What you fear, we master.\" House Phylund has an estate on Copper Street, west of the High Road between Julthoon Street and Trader's Way in the North Ward."],
    ["House Rosznar:", "Once banished from Waterdeep for smuggling, slavery, and other crimes, this house has returned and is trying to overcome its dark past and disgraceful reputation by focusing on legitimate business ventures such as wine-making and gem trading. The family motto is \"We fly high and stoop swift.\" Rosznar Villa is situated on Thunderstaff Way between Copper Street and Shield Street in the Sea Ward, west of the High Road."],
    ["House Lunere:", `The ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LunereFamily)}, originally a family that made a large amount of money with investments and money lending, eventually came to odds with House Cassalanter, and decided to move into more esoteric businesses of trading magical items. House Lunere, for many years, had their hands in the pots of the Zhentarim (which was deconstructed in 5e 169), as well as the Shadow Thieves (deconstructed in 5e 171). The Lunere family house was attacked in 5e 156, and both parents were murdered, although their only child, Elise, was rumored to have survived. She has hardly been seen since then, and some people say that she ran away from Waterdeep some time in the mid 160's.`],
    ["House Dunblade:", `An elven house originally from ${LocationIds.CryingIsland}, House Dunblade made its money crafting and importing fine garments. One of the sons, Faerrel Dunblade, was killed in a street fight in mid 5e 168.`],
    ["House Ironeater:", "A dwarven house, and supposedly descendants from the Melairkyn, House Ironeater are a clan well known for their mining imports and exports into the city."],
    "-------------------------------------------------------------------------------------------",
    ["Open and Masked Lords of Waterdeep - The Ruling Council:", `The Open Lord of Waterdeep, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LaeralSilverhand)} rules the city and is the city's face for public affairs, as well as the person who puts the Masked Lord's plans into action. The masked lords of waterdeep are the people whom pull the strings behind the scenes, some for nefarious reasons, and some for more pure reasons.
    These hidden Lords of Waterdeep maintained their identities behind magical masks, called Helms, and while they ruled in public, none knew the true identities of most of them. The subject of who the Lords were became a common topic of noble conversation, and some considered it a game to discover the Lords' identities, a game made more confusing by the fact the Lords themselves set their own rumors afloat.
    It in unknown who elects the Masked Lords, or who the Masked Lords are, but it is known that they meet secretly and do so to discuss the state of the city and its relationship with the wider world.
    The Lords only appeared in public when deliberating on high crimes or when asked to by the lower court, but even then only four generally appeared and one was always the Open Lord. All Masked Lords wore black formless Helms and robes and spoke through the Open Lord in public, in order to keep their identities secret.`],
    `The masked lords of waterdeep are: ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.MirtAllvar)}, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Durnan)}, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.VajraSafahr)}, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Nihloor)} (Posing as his alter Ego, Nihls Suberton), ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.AmmaliaCassalanter)}, ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.BlumpfryRosznar)}. `,
    "Important / well known places in the city include:",
    "-------------------------------------------------------------------------------------------",
    [`${dataItemToLinkable(DataTypeIds.Location, LocationIds.TowerOfAbjuration)}:`, `The tower of Abjuration, run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.VajraSafahr)}, the current Blackstaff, is located near the Sea Ward.`],
    ["Order of the Even-Handed:", "A monastic group devoted to Ilmater, run by Hlam (See WDH), a cleric of Ilmater and grand-master of the Order of the Even-Handed.. The order teaches the way of the open palm, as well as the way of the sacred palm. Would-be students periodically visit him to learn the Way of the Sacred Fists, which combines cleric magic and monk training. They usually return to the city confused, bruised, and not inclined to visit again."],
    ["The FFBI:", `Located in Trollskull alley, The FFBI is a detective agency belonging to ${PlayerIds.Ornn}, ${PlayerIds.Starfire}, and ${PlayerIds.Kel}. It is staffed by Ryan (LG Male Human Commoner, Brown Hair, tall), who oversees their day to day operations. An internship programme, set up by Starfire, allows some minor detective solving. The agency has garnered favor with `],
    ["The Magic Ear:", `One of the most Successful magic shops in waterdeep, run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.AiaRivetspring)} and ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.AlfenRivetspring)}, is a famous magic shop in Waterdeep.`],
    ["Sew it Seams:", `One of the great tailoring ships in the city, well known for creating fantastic garments for nobility, Sew it Seams is run by Lilly, a gnome (LG Gnome Commoner, ${PlayerIds.Kel}'s sister).`],
    ["The Font of Knowledge:", "One of the largest libraries in the country, this library is dedicated to The Weaver and is home to many sages. The receptionist, Sanna, is a snooty woman (CG Human Sage, snooty accent, scared of bears)."],
    ["New Olamn:", "A traditional bardic college in Waterdeep, attached to the Font of Knowledge. It was formed as a successor to the old College of Ollamh. College of Lore bards would have studied here."],
    ["The Sailor's School:", "Located in the Sea Ward, the sailor's school trains sailors and other seafarers, mostly due to Waterdeep's close proximity to the sea."],
    ["Anghiron's Tower:", "A large, magically protected wizard's tower not far from Blackstaff Tower, this tower has no entrances and has been shut off since the death of Angharion."],
    ["Yawning Portal:", "The most famous tavern in Waterdeep, and the only public entrance to the Undermountain, this tavern is currently run by Durnan, a very well known and well liked person in Waterdeep."],
    ["House of Wonder:", "One of the largest orphanages in the city."],
    ["Waterdeep's Temples:", `The Town Square and surrounding areas contain a number of large temples, including: The temple of Ilmater (The temple of Ilmater is a simple four-doored stone and wood temple, with places to sit and pray).
    The Raven Queen Temple, run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.VessEarthbrand)} (It is a small temple, often nearly pitch dark, with a pool of magical blood situated in the centre).
    A Temple Of Helm, which doubles as a training location for many paladins in the city (It is run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Hlam)}, and attached to the Order of the Even-Handed's building),
    and finally, a small building with a number of smaller shrines to the other gods.`],
    "-------------------------------------------------------------------------------------------",
    ["Skullport:", "A grim, cutthroat outpost of civilization where sketchier members of  can resupply and take refuge. Few souls of the surface world have any clue how to reach this shadowy reflection of Waterdeep, making any talk of the Port of Shadow akin to a rumor, or a warning — which is just how its denizens like it."],
    ["Xanathar's Guild:", `Skullport is home to Xanathar's guild - a select organisation of thieves, assassins and cutthroats. The guild is currently run by Nihls Suberton, a previous high-level employee of the guild.
    Xanathar's Guild was one of the most powerful illicit guilds on the continent and often acted as a buffer against other evil organisations unintentionally. They had a massive stronghold on Skullport Island, but were otherwise largely active in Waterdeep.`],
  ],
  population: "~ 130,000 (humans 39%, elves 18%, half-elves 13%, tieflings 9%, aasimar 5%, dwarves 8%, gnomes 5%, half-orcs 2%, 1% other)",
};
