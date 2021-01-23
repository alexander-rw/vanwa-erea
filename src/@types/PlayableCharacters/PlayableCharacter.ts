import type { CreatureStats } from "../Creature/CreatureStats";

export type PlayableCharacter = {
  profBonus: number;
  avatarUrl?: string;
  name: string;
  stats: CreatureStats;
};