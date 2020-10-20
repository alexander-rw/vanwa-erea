import { Location } from "../../../@types/Location/Location";
import { DataTypeIds } from "../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../Constants/Ids/LocationIds";

import { dataItemToLinkable } from "../../../Utilities/LinkableString";

import { TowerOfTransmutation } from "./towers/TowerOfTransmutation";

export const MisruulDesert: Location = {
  id: LocationIds.MisruulDesert,
  type: DataTypeIds.Location,
  description: [
    "Misruul Desert, known as the 'Saltbound wastes' by most people in the crying islands, is the warmest area of misthalin that houses a number of cities. Most of the cities are desert cities; owing to the incredibly harsh climate of the desert that encloses them.",
    `The desert was not formed by natural means - originally, the area was lush farmland. During the first age, the area became extremely dry and hot after a huge battle between two Genies, Misruul (an Efreeti) and Calim (a Djinni).
    The desert was primarily a level and rocky salt flat, yet the magical effects of Calim and Memnon could change that. These often dangerous manifestations of the two genies were called "Calim's Breath (Almost sentient sandstorms / sand tornados),
    and "Misruul's Crackle" (A crackling of the floor akin to quicksand). The sands hid the ruins of ancient cities, which were said to hold many treasures.`,
    "Ancient places in the desert included:",
    ["Dashadjen,", "an ancient fortified military city was the major garrison for the armies of Misruul many centuries ago and houses the Altar of Air."],
    [`${dataItemToLinkable(DataTypeIds.Location, LocationIds.VoronWeosst)}:`, `The city of ${LocationIds.VoronWeosst}, a city in the north of the Misruul Desert that produced most of the food for the region, as well as the ${dataItemToLinkable(TowerOfTransmutation.type, TowerOfTransmutation.id)}.`],
    ["Wan Shi Tong's Spirit Library,", "('Fëa Parmassë' in Elvish), is an enormous library located partially in the ethereal plane. The library is a place of legend; nearly impossible to find, and even harder to leave once you have entered."],
    ["The Spinning Keep of Siri'wadjen,", "the magical structure surrounding the Calimisruul Crystal in which the genies Calim and Misruul were entrapped in. It was guarded by the baelnorn Pharos."],
  ],
};
