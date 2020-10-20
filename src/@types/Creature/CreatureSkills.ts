
type CreatureSkill = {
    name: string;
    baseAbility: string;
}

export enum SkillNames {
    Acrobatics = "Acrobatics",
    AnimalHandling = "AnimalHandling",
    Arcana = "Arcana",
    Athletics = "Athletics",
    Deception = "Deception",
    History = "History",
    Insight = "Insight",
    Intimidation = "Intimidation",
    Investigation = "Investigation",
    Medicine = "Medicine",
    Nature = "Nature",
    Perception = "Perception",
    Performance = "Performance",
    Persuasion = "Persuasion",
    Religion = "Religion",
    SleightOfHand = "Sleight Of Hand",
    Stealth = "Stealth",
    Survival = "Survival",
}

const strSkills = [SkillNames.Athletics];
const dexSkills = [SkillNames.Acrobatics, SkillNames.Stealth, SkillNames.SleightOfHand];
// no con skills
const intSkills = [SkillNames.Arcana, SkillNames.History, SkillNames.Investigation, SkillNames.Nature, SkillNames.Religion];
const wisSkills = [SkillNames.AnimalHandling, SkillNames.Insight, SkillNames.Medicine, SkillNames.Perception, SkillNames.Survival];
const chaSkills = [SkillNames.Deception, SkillNames.Intimidation, SkillNames.Performance, SkillNames.Persuasion];

export const CreatureSkills: CreatureSkill[] = [
    ...strSkills.map(x => ({ name: x, baseAbility: "str" })),
    ...dexSkills.map(x => ({ name: x, baseAbility: "dex" })),
    ...intSkills.map(x => ({ name: x, baseAbility: "int" })),
    ...wisSkills.map(x => ({ name: x, baseAbility: "wis" })),
    ...chaSkills.map(x => ({ name: x, baseAbility: "cha" })),
];