import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../../Constants/Ids/NpcIds";
import { WorldEventIds } from "../../../../Constants/Ids/WorldEventIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const GwanuandaveMonastery: Location = {
  id: LocationIds.GwanuandaveMonastery,
  type: DataTypeIds.Location,
  description: [
    `The monks of the Long Death intensely studied the effect of the process of death on living tissue. The ultimate objective was to discover the 'perfect death'
    - an objective that no member of the group really understood, let alone achieved. In one of their monasteries, they would spend the majority of their time sparring with one another and the rest in quiet contemplation.
    Outside of the monasteries, they wandered relatively aimlessly, often disguised as beggars, and sometimes took up odd jobs to make their way through life.`,
    `Nowadays the monastery is run by ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.Abel)}, A human who took over the monastery fairly recently.`,
    ["Trial By Combat:", `Each monastery was independant of the others and led by a single individual. This individual had to prove themselves the best warrior of the monks in the monastery through trials
    by combat every year on ${dataItemToLinkable(DataTypeIds.WorldEvent, WorldEventIds.FeastOfTheMoon)}`],
    ["The Monastery:", `The monastery is intrinsically linked with the ${dataItemToLinkable(DataTypeIds.Location, LocationIds.TowerOfNecromancy)} attached to its north side. Here, monks and wizards alike train, experiment and discover new ways of applying their skills to new situations.`],
    ["The Courtyard:", "The main place where the rest of the monks train, the courtyard is a huge marble floored open quadrangle with an obsidian inlay of the Conjuration symbol into the floor."],
  ],
};
