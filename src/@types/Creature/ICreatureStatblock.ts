import { Alignment } from "../Alignment/Alignment";

import { CreatureAbility } from "./CreatureAbility";
import { CreatureSenses } from "./CreatureSenses";

export interface ICreatureStatblock {
  name: string;

  size: "Tiny" | "Small" | "Medium" | "Large" | "Huge" | "Gargantuan";

  alignment: Alignment;

  armorClass: number | [number, string];

  hitpointSize: number;

  hitpointAmount: number;

  speed: {
    walk?: string | number;
    burrow?: string | number;
    fly?: string | number;
    swim?: string | number;
  };

  stats: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };

  proficiencyBonus: number;

  skills?: string[]; //keyof SkillNames[];

  senses: {
    [K in CreatureSenses]?: string | number;
  };

  languages: string[];

  cr?: number;

  traits?: CreatureAbility[];

  actions?: CreatureAbility[];

  legendaryActions?: CreatureAbility[];

  info: string[];
}