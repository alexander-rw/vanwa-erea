import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const TowerOfAbjuration: Location = {
  id: LocationIds.TowerOfAbjuration,
  type: DataTypeIds.Location,
  description: [
    `The Tower of Abjuration, known to most as Blackstaff Tower, was was the home of ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.VajraSafahr)}, The current Open Lord of Waterdeep, as well as ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.LaeralSilverhand)}, a Masked Lord of Waterdeep,
     and ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.JaceBeleren)}, the current Consol to Minister of Kylvoro and headteacher of Abjuration at the tower.`,
    `Blackstaff Tower's main entrance was on Swords Street. There was also an apprentice's gate, through which apprentices could gain access by touching the gate with a left palm. The tower was surrounded by a 20-foot wall.
    The tower appeared to be made out of smooth black stone, with no windows or doors. From the outside, the structure appeared to be a three-story stone tower, but inside, there were at least a dozen more levels, and some of these could only be reached by magical means.
    Everything connected to the central stairwell, although magical passwords were required to transport to certain areas of this stairwell.
    The three levels visible from the outside were all freely accessible via simply using the stairs.
    The tower was protected against scrying magic, and had the ability to repair itself, along with its outer walls and gates, when damaged. This process could be helped along by Laeral Silverhand. After an attack in which a wall was demolished, the tower was back to normal the same day.`,
    `Rooms were connected to the central stairwell and entry hall, which was full of floating doors and arches.
    Many alcoves and shelves covered the walls of the stairwell, displaying magical items and artifacts, and although they seemed unprotected, a command word was needed to remove any of them. The items changed on a regular basis, so returning to the same stairwell on another day might result in seeing different items.
    On the top floor of the tower was a study and a scrying chamber. here was also a parlor where Khelben displayed his art, before his passing. The study also contained a one way door to ${dataItemToLinkable(DataTypeIds.Location, LocationIds.SeersVillage)}.
    The tower's kitchen prepared fresh food daily, and was well known amongst mages for its famous roasted chicory. The tower's basement contained a number of portals to areas within waterdeep, for ease of access`,
    `Previously in the tower's history, the fourth Blackstaff, Krehlan Arunsun, modified Blackstaff Tower using the kiira N'Vaelhar to allow templates of the spirits of each former Blackstaff to communicate with anyone in the tower,
    and with the Blackstaff where he or she was. The templates were a permanent illusion of the spirit of each Blackstaff; in visible form, the template appeared as the Blackstaff did in life but with a green glow. While in the tower,
    the Blackstaff was also aware of every person in the tower or within a few feet of the tower.`,
    ["Blackstaff Academy", `Blackstaff Academy is a partnership of magic-users that forms a place to pool magical knowledge and resources, in the hopes that the greatest magical minds -
    no matter their origin or nature, could come together and achieve new feats or attain new discoveries; all to further the knowledge, power and limits of magic without bias. Many apprentice magic users, as well as accomplished Magic users, came to blackstaff tower for education or knowledge.`],
  ],
};
