import { Alignment } from "../@types/Alignment/Alignment";
import { CreatureSenses } from "../@types/Creature/CreatureSenses";
import { CreatureStatblock } from "../@types/Creature/CreatureStatblock"
import type { ICreatureStatblock } from "../@types/Creature/ICreatureStatblock";

const creatureDefinitions: ICreatureStatblock[] = [
  {
    name: "Vanan Mandros",
    info: [
      "A Tall, skinny Elf with Dark hair, dark brown eyes and wearing regal black robes with silver threading laid through them, Vanan is the White Head of Tiamat.",
      "The White Head of Tiamat is in charge of Necromancy for Tiamat's armies. Vanan's aim is to resurrect a Dracolich as his Mount, and conquer the material plane with his family and Arkhan.",
    ],
    alignment: Alignment.LawfulEvil,
    armorClass: [13, "Natural Armor"],
    stats: {
      str: 8,
      dex: 14,
      con: 16,
      int: 20,
      wis: 16,
      cha: 14,
    },
    hitpointSize: 8,
    hitpointAmount: 9,
    skills: ["Athletics"],
    languages: ["Common", "Elvish", "Infernal"],
    proficiencyBonus: 4,
    senses: {
      [CreatureSenses.Darkvision]: 120
    },
    size: "Medium",
    speed: {
      walk: 30,
    },
    traits: [
      {
        name: "Magic Resistance.",
        entries: ["The abishai has advantage on saving throws against spells and other magical effects."],
      },

    ],
    actions: [],
  },
  {
    name: "Sylceran Mandros",
    info: [],
    alignment: Alignment.LawfulEvil,
    armorClass: [13, "Natural Armor"],
    stats: {
      str: 8,
      dex: 14,
      con: 16,
      int: 20,
      wis: 16,
      cha: 14,
    },
    hitpointSize: 8,
    hitpointAmount: 9,
    languages: ["Common", "Elvish", "Infernal"],
    proficiencyBonus: 4,
    senses: {
      [CreatureSenses.Darkvision]: 120
    },
    size: "Medium",
    speed: {
      walk: 30,
    },
    traits: [],
    legendaryActions: [],
    actions: [],
    skills: [],
  },
  {
    name: "Malygos Mandros",
    info: [],
    alignment: Alignment.LawfulEvil,
    armorClass: [13, "Natural Armor"],
    stats: {
      str: 8,
      dex: 14,
      con: 16,
      int: 20,
      wis: 16,
      cha: 14,
    },
    hitpointSize: 8,
    hitpointAmount: 9,
    languages: ["Common", "Elvish", "Infernal"],
    proficiencyBonus: 4,
    senses: {
      [CreatureSenses.Darkvision]: 120
    },
    size: "Medium",
    speed: {
      walk: 30,
    },
    traits: [],
    legendaryActions: [],
    actions: [],
    skills: [],
  },
  {
    name: "Elune Mandros",
    info: [],
    alignment: Alignment.LawfulEvil,
    armorClass: [13, "Natural Armor"],
    stats: {
      str: 8,
      dex: 14,
      con: 16,
      int: 20,
      wis: 16,
      cha: 14,
    },
    hitpointSize: 8,
    hitpointAmount: 9,
    languages: ["Common", "Elvish", "Infernal"],
    proficiencyBonus: 4,
    senses: {
      [CreatureSenses.Darkvision]: 120
    },
    size: "Medium",
    speed: {
      walk: 30,
    },
    traits: [],
    legendaryActions: [],
    actions: [],
    skills: [],
  },
  {
    name: "Akrhan The Cruel",
    info: [
      "Arkhan the Cruel is an evil dragonborn champion of Tiamat. Arkhan believes he can use the Hand of Vecna to unlock the means of freeing Tiamat from her prison in the Nine Hells, but only if the hand doesn't kill him first. The hand is slowly corrupting Arkhan's flesh and decomposing his body on one side.",
      "In battle, Arkhan uses branding smite to channel the radiant power of Tiamat into his weapon attacks. If a fight turns against him, he uses the teleport power of the Hand of Vecna to return to his tower with as many allies as possible. Should one or more of his comrades fall in battle, Arkhan uses revivify and raise dead spells to bring them back to life as soon as possible.",
      "If Arkhan finds himself overwhelmed with opposition, he orders the abishai to attack. Arkhan can also use a bonus action to call forth Asojano, a chimera lairing in the depths of the colossal dragon skull.",
    ],
    alignment: Alignment.LawfulEvil,
    armorClass: [23, "Obsidian Flint Plate"],
    stats: {
      str: 8,
      dex: 14,
      con: 16,
      int: 20,
      wis: 16,
      cha: 14,
    },
    hitpointSize: 8,
    hitpointAmount: 9,
    languages: ["Common", "Elvish", "Infernal"],
    proficiencyBonus: 4,
    senses: {
      [CreatureSenses.Darkvision]: 120
    },
    size: "Medium",
    speed: {
      walk: 30,
    },
    traits: [],
    legendaryActions: [],
    actions: [],
    skills: [],
  },
];

export const creatures: CreatureStatblock[] = creatureDefinitions.map(x => new CreatureStatblock(x));