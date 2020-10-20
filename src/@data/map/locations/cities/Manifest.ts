import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const Manifest: Location = {
  id: LocationIds.Manifest,
  type: DataTypeIds.Location,
  description: [
    `In the early days, when the mists of creation still rose from the brand-new world, an elf named Thaerana swore never to leave the side of her brother Thaedon. The two fought against the
    dark forces that plagued the young world, until Thaedon fell to the horrific blows of a demon’s sword. Thaerana took her
    oath seriously and, with the help of spells of her own devising, traced Thaedon’s spirit to a narrow stretch of the coast, and to a peculiar grove of trees.
    Many years later, the elves — who now dedicated themselves to tending and protecting the slowly spreading grove of spirit trees — found a small cave. They sent in a team of explorers
    who found a winding series of tunnels leading downward, ever downward. Moreover, the tunnels appeared to be haunted. The woods above were home to the ghosts of many elves, so
    in the tunnels, the explorers expected to see more of the elf spirits, perhaps those whose deaths were so violent or shameful that they shunned the company of their brothers and sisters.
    The elf explorers were shocked to instead find the ghosts of humans, tieflings, aasimar, gnomes, and orcs roaming the caverns in great number — with not an elf spirit among them.
    An even greater surprise lay ahead. Just when the elves were ready to turn back and report on the strangely haunted caves, they heard odd noises coming from deeper in the earth. Bravely, they followed the sounds
    down to where it seemed the tunnel system stopped at a huge gate of stone and iron. The gate was guarded by orcs in gleaming armor — living orcs.
    These were the Deathwarden orcs, and they were as coolly aloof then as they are today. They spoke only a little to the elf explorers. While they would say nothing about
    how long their clan had been there, the dwarves did explain that they stood before the “Veil of Souls” — the gate to the land of the dead — and they were its guardians. Only the
    departed could pass through the gate, they said, and they would do whatever it took to protect them and aid them on their journey.`,
    `In its earliest incarnation, Manifest was nothing more
    than a camp around the entrance to the orcs
    cave—a ramshackle collection of tents pitched by
    clerics, pilgrims, and those who had brought their
    dead to the Deathwardens. The travelers worked with
    the elves and half-elves to clear an area within the
    Spirit Wood, under the watchful eye of the elves, who
    ensured no spirit trees were cut (although some
    moved of their own volition). As time passed, the camp
    grew in this miraculous clearing. The tents became
    permanent structures as more and more travelers
    decided to make a home in the blessed place. They
    opened hostels and inns to serve new travelers who
    arrived daily. Merchants established shops, and thieves
    came soon after to prey upon the lot of them.
    The magical powers inherent in the area — the Manifest Ward, as it is known today—became more and
    more evident in these early days. Although the ward
    had always existed, only with the arrival of people did
    ghosts begin to realize they did not have to go to the
    land of the dead immediately. In the burgeoning town,
    they could remain among the living. With practice,
    they learned to interact with others and with the physical objects in Manifest. To a degree, they could carry
    on their lives. (But eventually the Calling would come,
    as it does today. They would say their goodbyes and
    travel beyond.)
    It was a freewheeling time. Manifest, the name by
    which the town soon became known, was too far from
    civilized lands for any of the many kings and barons to
    realistically lay claim to it. A cleric named Thadeus, a
    follower of the Raven Queen, found himself thrust into a position of leadership in the growing community.
    Thadeus worked with the Deathwarden orcs to
    erect the Grand Portal, a massive temple-tower that
    stands atop the entrance to the paths to the land of the
    dead. The Grand Portal became the central focus of the
    town, and thus all the streets radiated from it like
    spokes.`,
    `From the south, the hordes of Durgerth the Conqueror
    swept over the kingdoms and baronies around Manifest like a bloody plague. When they reached the Spirit
    Wood, they did not stop but went screaming onward.
    The barbarians finally revealed their true motive: They
    did not want to plunder the kingdoms around Manifest—they wanted to conquer death itself. Durgerth
    believed that if he controlled Manifest he would never
    die. In fact, he believed that the Raven Queen was actually in the
    fabled Grand Portal and that even the god could be
    conquered and subjugated to his will. When the barbarian warlord found that he was wrong, he sacked the
    city, burning it to the ground. The Deathwardens were
    forced to retreat far underground, into the cliffs that the city were built upon.
    The elves and halfelves who guarded the Spirit Wood were slaughtered.
    Even the spirit trees—homes to the souls of thousands
    of deceased elves—were hacked and burned.
    It is said that the Raven Queen wept that day.
    It took the area over a century to recover from the
    destruction wrought by Durgerth. It took even longer
    for people to resume their pilgrimages to the Spirit
    Wood and the site of Manifest. Those who did were
    surprised to find that the wood seemed to have recovered and, although all traces of the old city lay buried
    beneath a gently sloping hill, the Grand Portal still
    stood where it always had. A handful of Deathwarden
    orcs had raised and maintained it with the aid of
    ghosts who were not yet ready to pass into the land
    beyond the Veil of Souls.
    The process of escorting the dead to the Grand
    Portal began again. And, as before, the city began to
    grow around the tower. Now, however, the city was
    technically in the domain of Salkiria, and King Illustram began demanding tolls for caravans of the dead to
    pass through his kingdom on their way to Manifest.
    This policy caused a great deal of discontent and ill will
    throughout the other realms, which were building
    themselves back up from the ashes Durgerth left
    behind. Illustram’s soldiers learned the folly of working at cross-purposes with those who had powerful
    allies—the ghosts of Manifest.
    Although they were no longer corporeal when outside the city, ghosts would frequently organize in
    Manifest and then leave to help defend incoming caravans—often caravans transporting their own dead
    bodies. The ghosts used their abilities to help sneak
    caravans through Illustram’s lands without being seen.
    The process of sneaking caravans through the land became known as the Ghostwalk.
    Years later, after war upon war, Salkiria was
    sacked. Manifest was declared a free state. All the surrounding realms signed a joint agreement, based on
    what they decreed was the will of the gods. This agreement, the Manifest Accord, remains in effect today, long after the kindoms were united under the banner of the kingdom of Misthalin.`,
    `As the city aged and the veil aged with it, unusual energies began to permeate the wildlife all along the Ghost Plains, as well as in the surrounding waters to the city of Manifest. The ${dataItemToLinkable(DataTypeIds.Location, LocationIds.GwanuandaveMonastery)} (linked with the ${LocationIds.TowerOfNecromancy}), and the ${dataItemToLinkable(DataTypeIds.Location, LocationIds.TowerOfConjuration)} began to use the area's close proximity to beyond-mortal energies to accelerate their research.
    So as to not tarnish their image, and to ensure that the kingdoms did not rise up against them performing research. To this day, some less well-informed members of society believe that the research is what causes the Veil Of Souls - whereas others believe that it is the only thing that stops the veil expanding and consuming the world. The Ghostslayer tribe - an Orcish tribe that sits northeast of the ${LocationIds.TowerOfConjuration} eventually setlled here. Their name is deceptive;
    the tribe were initially assumed to be barbaric, like other orc tribes that lived on the continent had been in the past, but locals of both Manifest and ${LocationIds.Whiteurn} learned that the tribe were both intelligent and very happy to serve as protectors of the people on the Ghost Plains. The name is meant as a metaphor; they are slayers even as ghosts, not slayers of ghosts. Some of the ghostslayer tribe moved to manifest permenantly, making the orcish population higher in Manifest than many other cities on the continent.`,
    ["A deadly place outside the city walls:", `The energies that surround the city and the plains make the wildlife increadibly dangerous to be around. Zombies, skeletons and abominations of creatures are commonplace in the area, and plants are difficult to grow in the arid soil
    that surrounds the city. Thankfully, due to the large cleric presence in the city, food is not hard to come by when in the city - albeit often a tasteless and bland meal for many.`],
    ["Ghost Lilies", `The veil's influence is often toxic to plants, but some manage to survive. The Ghost Lily, a plant that grows mostly exclusively around manifest's coastline, are pure white lilies with special properties. They are grown mostly on the Ghost Plains by the Ma'rrek (Ghost Slayer) orc tribe, but can be found near the manifest coastline in small numbers.
    At night or in dark conditions the lilies often appear to give off a ghostly pale white light, this phenomenon is often referred to as ‘The Haunting’. Many travellers claim they have encountered ghostly spirits when passing large beds or haunts of ghost lilies late at night. This has inspired the common wisdom of many commoners of making sure to stay clear of the flowers especially if you came across them at night, with many old wife’s tales being passed on to scare and warn children about the ghost lily, although these tales are rarely recounted in manifest due to the very real presence of ghosts.`],
    ["The Mandros Family:", `A well known noble family that ruled the city for nearly 60 years with an almost iron fist, and a family that had significant enough political ties that they were nearly untouchable,
    the Man'Dros family were feared by name and nature. The family moved away from Manifest in Mid 5e 125.`],
    ["The City:", `A trip to Manifest can be a very strange experience to
    those who have never been there before. Although
    remnants of an older city wall remain, there are no real
    barriers keeping one out—only the thick growth of
    the surrounding Spirit Wood and the Morvanthalus
    River (the “river of dead friends”) provide any sort of
    perimeter. Following one of the three roads into the
    city, a visitor would likely notice no special qualities or
    auras about the area. And unless someone tells them,
    they’d never realize the very laws that govern reality
    are different here.
    Built around the literal entrance to the land of the
    dead, Manifest is no mere metaphor—it hovers at the
    brink of oblivion. The city is a way station for both the
    living and the dead. Here the Veil is at its thinnest,
    ghosts walk the street among the living, and the dead
    come back to life with surprising ease. Despite these
    goings-on, Manifest is also a functioning city, with all
    the resources and requirements that suggests.
    Each ward has an atmosphere all its own, but some
    things are true throughout the city. Wherever you go in
    Manifest, you are likely to find dozens upon dozens of
    statues seemingly staring at you. There are statues on
    pedestals wherever traffic will allow, busts placed on all
    the cornices, and reliefs carved into the façades, molding, framework, and foundations of every building.
    The city is divided into wards, each managed
    and governed by a warder. The Council of Warders
    meets weekly to discuss city issues and, more or less,
    rules the city. Theirs is a very limited power, however,
    for they can make no decision regarding the city that
    violates the Manifest Accord or any of the treaties and
    agreements made with the Arboreal Guardians (see
    City Government and Laws, below). The City is guarded by some of the local city guard, as well as a healthy troupe of
    Mistguard, the official guard of the kingdom.`],
    ["Customs:", `Necromancy is looked down on less in manifest than other places. There are a number of undead skeletons and zombies used by the Necromancers of the area, that
    protect the city and perform dangerous manual labour, and mages often charge a small fortune for the use of their spells in this way.
    Casting Speak with dead or any undead reanimation spell on a corpse without the express permission of both the ghost of the body (if applicable) and the Council of Warders in Manifest is an offence
    punishable by death.`],
    ["The Grand Portal:", `This huge, dwarf-built tower
      lies at the center of the ward and of the entire city. City
      streets spiral out from this strangely built tower, the
      doorway of which marks the start of the final leg of the
      trek known as the Ghostwalk—the path from the land
      of the living to the land of the dead.
      The Grand Portal is two hundred feet high, made of
      black basalt, and decorated with silver gilt. Like all the
      other buildings, it is covered with statuary. Vague
      shapes seem to rise up and out of the dark tower, but
      the details seem to be different to every eye. Some
      people see gargoyles, others angels, demons, or simply
      people—it is considered a very good omen to see the
      image of someone you love among the shapes on the
      Grand Portal.
      Most of the building is a single open room entered
      immediately upon crossing its threshold. (The interior
      walls are similar in construction and appearance to the
      tower’s exterior.) A huge spiral stair leads down into
      the earth in the center of this large chamber, guarded
      by 10 elite Deathwarden orcs. This is the entrance to the Veil Of Souls. No living creature is allowed into,
      or dead creature is allowed out of the entrance without written permission from someone with enough sway to allow entrance to the tomb.`],
    ["Temple to the Raven Queen:", `A large clerical temple, this temple is the largest temple to the Raven Queen of the known world - with some followers saying that they've even seen the Raven Queen herself
      walking the souls of the dead across the veil. The temple is a tall, sweeping structure with white marble
      pillars and painted statues of the hundreds of saints
      devoted to the god. It is sometimes called the House of
      Sanctuary. The staff of this temple has a policy of helping anyone in need, particularly ghosts.
      Johm Quiston (male human) is the high priest of the temple. Johm is a quiet,
      soft-spoken man who secretly would rather be out
      exploring the Undercity or fighting against the
      undead. However, he takes his duties seriously and would never abandon the temple for a foolhardy quest. He is quite fit for a man in his fifties and
      still has a full head of black hair. The temple itself houses a large green-grey pool in the centre of the temple, as well as a large leafless oak tree to hold the messenger ravens that serve the surrounding areas.`],
    ["Hall of Farewell:", `If you’re searching for a ghost
    in Manifest but are having no luck, the Hall of Farewell may be able to aid you. This two-story office building is filled with
    municipal records pertaining to nearly every humanoid creature that has ever passed through Manifest, as well as many many more that were reported dead in other locations. As of a few hundred years ago, most ghosts register their deaths at the Hall before
    passing through the Veil of Souls. A person can pay 1 copper to have a name put into the Hall of Farewell.`],
    ["Angel's Wings:", `This is the most expensive and
    most lavish inn in the city. Prices for rooms start at 20
    gp per night and go as high as 50 gp. Accommodations
    include multiroom suites, constant gourmet food service, scented linens and incense wafting through the
    entire place, in-room facilities, in-room bathing, laundry services, and a vast selection of rare wines
    from around the world. Every fixture and piece of
    furniture in the building is handcrafted, and they
    all feature images of the inn’s founders or particularly beloved patrons. As of late 155, the Whiskey "Doney Punch", a famously spicy whisky produced in a brewery on the edge of town, has
    gained an almost cult-like following, with a large portion of the whiskey sold at the Angel's Wings inn. The inn is run by Onlant, an Aasimar with expensive taste.`],
    ["Deric's Weapons:", `Short and stout, most people think Eariun Deric is a dwarf, when he is actually just a short Orc. Deric, is no smith, but he has a keen eye for his trade.
    Deric is a shrewd merchant and, whether he is buying or selling, always haggles to try to get the best price possible.`],
    ["The Magic Swan Tavern:", `Named after a local
    legend about an immortal swan that lived in a pond
    where Manifest stands today, this is a raucous and bustling tavern, full of ghosts yet to pass, drunk patrons, and contant noise. There is always music and laughter filling this place, with the occasional flashy
    magic spell used to make a point by a customer—unseen servants grabbing drinks
    from trays, dancing lights flaring around
    the room, or a grease spell appearing under the feet of a drunken
    boor. It’s a wild place. Thaff Chunny (male
    human) barely keeps the
    tavern under control.`],
    ["The Armed Yard:", `During the
    day, this place serves as a training
    ground for all martial types of
    skills, but three nights a week it
    doubles as an arena where
    people can come see (and
    wager on) fights for
    entertainment. The
    fights are not terribly
    dangerous—the combatants use padded
    weapons—but they
    still draw a crowd (5 cp
    a head).
    The Armed Yard is also
    the place one would go to find
    mercenaries or just hired muscle. Whether
    you’re looking to train at the facility or to hire
    on to a squad, Aarom the Cleaved (dwarf fighter) is the person to talk to. She runs the
    place and has the reputation among most
    sword-swingers in town as being tough but fair
    in her dealings.`],
    ["Donkey Punch Brewery:", `Sitting on the edge of the town in a less populated area, the Donkey Punch Brewery is a brewery that was set up in late 5e 141. It's run by Donkey -
    a pink haired goblin that has built an almost cult-like following with their spicy whiskey. The brewery celebrates its anniversary on the 2nd Bloodsmoon every year.`],
    ["The Spirit Wood:", `An elf's soul is unusual compared to other humanoid souls; Manifest proves that elves are different than everyone else, and they wear their differences as a badge of honor. Even the least arrogant elves
    think it fitting that their dead spirits do not go to the same reward as everyone else’s. Elvish souls are often sent to the "Spirit Wood", which eventually graduates many of their souls to the Feywild once they decide to pass on, unless they worship a different god - in which case, they often end up in that god's afterlife plane.`],
    ["Port Phasmatys:", `Being a coastal town, Manifest has a port that lies at the bottom of its large cliff structure. A pulley system lifts objects up and down the cliff system, and a winding stone and wood staircase takes creatures up and down the cliff.
    The port itself charges very little for docking or pier space, because of the danger that lies in sailing through the waters outside of Port Phasmatys, but many ship captains who bring passengers into Manifest charge a hefty price. Many hundreds of years ago, a small demonic incursion ended up in a lot of destruction to Manifest and the port; the head of the town's naval force at the time,
    Admiral Kunkka, used a powerful but costly magic that tapped into the very fabric of the Veil of Souls. It drove the demons away, but tore the souls of the fleet away from their bodies. Kunkka is now Admiral of but one ship, a ghostly rig which endlessly replays the final seconds of its destruction. Whether he died in that crash is anyone's guess, but the ship appears and disappears in different places around the waters of Manifest and often fells other ships by accident as it replays its final moments.`],
  ],
  population: "~ 6500 (50% human, 18% elf, 11% orc, 4% dwarf, 7% half-elf, 4% gnome, 4% tiefling, 2% other races)",
};
