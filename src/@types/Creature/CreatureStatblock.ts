import { modFromValue } from "../Ability/AbilityValue";
import type { Alignment } from "../Alignment/Alignment";

import type { CreatureAbility } from "./CreatureAbility";
import type { CreatureStats } from "./CreatureStats";
import type { ICreatureStatblock } from "./ICreatureStatblock";

export class CreatureStatblock {
  stats: CreatureStats;

  name: string;

  size: "Tiny" | "Small" | "Medium" | "Large" | "Huge" | "Gargantuan";

  alignment: Alignment;

  armorClass: string;

  hitPoints: string;

  proficiencyBonus: number;

  languages: string[];

  cr: string;

  speed: string;

  traits?: CreatureAbility[];

  actions?: CreatureAbility[];

  legendaryActions?: CreatureAbility[];

  info?: string[];

  skills?: string[];

  constructor(sb: ICreatureStatblock) {
    this.name = sb.name;
    this.size = sb.size;
    this.cr = sb.cr?.toString() ?? "Unknown";
    this.info = sb.info;

    this.skills = sb.skills;

    this.languages = sb.languages;
    this.proficiencyBonus = sb.proficiencyBonus;
    this.alignment = sb.alignment;

    this.traits = sb.traits;
    this.actions = sb.actions;
    this.legendaryActions = sb.legendaryActions;

    this.stats = {
      str: modFromValue(sb.stats.str),
      dex: modFromValue(sb.stats.dex),
      con: modFromValue(sb.stats.con),
      int: modFromValue(sb.stats.int),
      wis: modFromValue(sb.stats.wis),
      cha: modFromValue(sb.stats.cha),
    };

    this.hitPoints = `${Math.round(sb.hitpointAmount * ((1 + sb.hitpointSize) / 2))} (${sb.hitpointAmount}d${sb.hitpointSize} + ${sb.hitpointAmount * this.stats.con.modifier})`;

    this.armorClass = Array.isArray(sb.armorClass)
      ? `${sb.armorClass[0]} (${sb.armorClass[1]})`
      : `${sb.armorClass}`;

    this.speed = Object.keys(sb.speed).length < 1
      ? "0 ft"
      : Object.entries(sb.speed).map(speed => `${speed[0]} ${speed[1] ?? 0}ft`).join(", ");
  }
}
