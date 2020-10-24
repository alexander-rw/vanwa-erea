import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { separator } from "../../../../Style/ts/separator";

const id = LocationIds.Albatan;

export const Albatan: Location = {
  id,
  type: DataTypeIds.Location,
  description: [
    `${id}, originally named Tadmor after an elder of the oasis who lived here, was a medium-sized settlement in the north of the Kharidian Desert.
    Located at a crossroads between key trade routes, ${id} was a major staging point on the caravan route across the desert until the Kharidian Empire segregated the area after the Misthalin-Kharid war.`,
    `Albatan experiences most of its growth as a defensive outpost during the Kharidian Empire's war with Misthalin, as it's position at one of the largest oases for leagues made it a crucial staging point for anyone
    moving through the area. Over the years, its military and political relevance declined as interest in the area abated. However, its location and previous history enabled it to make the transition to a trade based town with a fair amount of success. The central nucleus of the town lies along the edge of the oasis itself, with the houses of the wealthy and fortunate situated nearby.
    The area scorched by the fire that took the lives of the Arcadian family, however, has been left charred and empty - a scar on the cityscape. As one strolls along the cloth covered palisades away from the water the city becomes more constricted and the inhabitants progressively less affluent.`,
    "Situated a mile or so out of the city is a satellite town, of sorts, referred to as Ap'olem, surrounding the antimagic crystal manufacturing buildings owned largely by the Ahenaro family. Many of the poor inhabitants of both settlements eek out a meager living in this business.",
    separator,
    `Locations in ${id}:`,
    ["Tower tombs:", "A number of Tower tombs, that belonged to previous rulers of the area, including rulers such as 'Elabhel', 'Yarhai' and 'Iambichus'. While the tombs were on public display, they were not able to be entered by people... unless you found a way to sneak in."],
    ["Temple of the Triumvate:", "A temple dedicated to the Three Kharidian God-Rulers, This temple was built at the start of the 'Age of Order', by the newly appointed clerical order of the empire."],
    ["Camp of the Diocetian:", "The camp held most of the Human slaves in the area here. The camp was overseen by Guards of the Empire, to ensure slave revolt did not occur."],
    ["Baths of the Diocetian", "A bathing house build in the late 4th age, this is one of the town's huge attractions and people of many races can be found in here. Humans are banned from entering the house unless they are accompanying one of their masters."],
    ["Beskar Basilicas:", `The Beskar Basilicas were the area of nobility in ${id}. All nobles of the city had their houses located in this district, with many lower class servants/slaves living on the grounds of the mansions. The streets between the noble grounds in this area were thin and like crossroads, and people were often seen walking and running through them.`],
    ["Central Oasis & Aqueducts:", "The central oasis of the city housed the water supply, and the aqueducts moved water around from this area. The oasis itself was deep, and was guarded night and day to ensure the town's water supply was not compromised."],
    ["Senate (Town Hall):", "The senate, a large L-shaped building with a dome building at the end that held the town's meetings and was also used as an entertainment area. Outside the Senate building was an area where locals to the town would trade goods and services. Trading caravans from nomadic tribes often came through to set up stalls here, trying to sell their wares to locals."],
    ["Central Road:", `One of the most recognisable features of ${id} is its long central colonnaded street, which runs down the main artery of the town. Not only does this colonnade give the landscape an impressive look, it also created vital shade along the primary route through the city. The road led directly to the senate building.`],
    ["Temple of Viryn:", "A temple originally dedicated to the Aasimar god Viryn, this was also previously used as a general place of worship. After the Empire was taken over by the the God-Rulers, the temple was sealed off for 'Safety reasons, due to the crumbling and damaged architecture', but in reality it was to stop unlawful worship of any gods that were not the God-Rulers."],
    separator,
    [`Noble families in ${id}:`, "Control of Albatan has shifted for the last four generations between members of the Arcadian, Bastes, and Ahenaro families. The naming convention among the Assimar nobility in the town, for those who care, is family name first, to make allegiances clear."],
    ["The Arcadians:", `The Arcadians, the oldest of the three families, secured their position as one of the most influential families in Albatan through their extensive control of viable arable land around the town, as well as their innovations in irrigation.
    However, in recent years the family fell on hard times as Arcadian Naev, Domitiis' elder brother, sold much of their land. Naev then disappeared in mysterious circumstances around the time of Rhaec and Ava's birth, leaving Domitiis with the polluted family chalice.
    Domitiis attempted to improve his family's financial standing, but this led him down the dangerous path of working alongside a gang that had taken up residence in the town.
    Domitiis was killed by the heads of the other houses, and the rest of the Arcadian family went into hiding.`],
    "Arcadian Domitiis: Rhaec's father, a skittish, twitchy man, who was never really meant to be in charge. Dedicated to his family, even his useless brother, he attempted to save the family's reputation after Naev's disappearance with most of the family's wealth. However, to do so he fell in with some less than savory characters, whom the other family leaders took exception to: Sylak, because it was against the law, and Patria because these criminals, it seemed, made use of magic. Rhaec's sister Ava and his mother, Thoa, walked in on the confrontation and saw Domitiis in a pool of blood.",
    ["The Bastes:", `The Bastes are the Arcadian's primary rival in Albatan, and became the leading family after Naev's mismanagement.
    The Bastes' made their money by gaining the rights to tax the water of the oasis, and bought up much of the Arcadian's land.
    Sylak, the leader of the family, is a somber, thoughtful man, although prone to fits of temper when people don't do what he deems to be the most 'logical' thing.
    His sister Alax's decision to reject the family name and join the Salusi-Formiae is a particular sore spot for him.
    `],
    ["The Ahenaro:", `The Ahenaro are the most recently ennobled family in the city: three generations ago, in fact, they had made their fortune by building a number of highly profitable manufacture centers,
    for the creation of anti-magic rings. Their head, Patria, is young, hot headed, and refuses to take anyone's shit.
    She's one of the biggest supporters of the Kharidian Empire's anti-magic stance. `],
    separator,
    ["The Salusi-Formiae:", `The Salusi-Formiae are a group of isolationist nomads to live under a strict code in the Kharidian desert.
    Their numbers vary over time, sometimes as few as 100, but normally around 200, and generally consist of assimar, elves and tieflings.
    The group was originally formed out of a fragmentary group, who disagreed with the Kharidian Empire's acquiescence of those who used Divine Magic.
    The group asks no questions of about the past of those who seek refuge with them; however, they expose any who agree to their code and then break it.
    The Salusi-Formiae are led by a group of 5 women (the Carinae), many of whom are descendants of the original splinter group.
    The position of Carinae is a life-time one, and when one of the five die, there is a 'democratic' (i.e. the most senior people publicly vote first, and can put pressure on the others)
    vote to decide her successor. Alax, Rhaec's aunt, was voted a Carinae a year or so before her sister, niece, and nephew were found wandering the desert.`],
  ],
  population: "~ 20000 (40% elves, 20% aasimar, 20% tieflings, 7% dwarves, 10% human (mostly slaves), 3% other races)",
};
