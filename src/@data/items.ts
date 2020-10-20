/* eslint-disable max-len */
// import { ItemRarity } from "../@types/Items/ItemRarity";
import { ItemRarity } from "../@types/Items/ItemRarity";
import { MagicItem, MagicItemProps } from "../@types/Items/MagicItem";
import { MagicItemIds } from "../Constants/Ids/MagicItemIds";

export const homebrewMagicItems: MagicItem[] = [];
/*
  {
    id: 1001,
    Name: "",
    source: "Dota 2, Gem Of True Sight",
    requiresAttunement: true,
    rarity: ItemRarity.VeryRare,
    description: [
      "A green gem that fits in the palm of one's hand and glows gently.",
    ],
    abilities: [
      "Provides true sight to the wielder within 30ft.",
    ],
  },
  {
    id: 1002,
    Name: "Ghost Scepter",
    source: "Dota 2, Ghost Scepter",
    requiresAttunement: true,
    rarity: ItemRarity.Rare,
    description: [
      "Imbues the wielder with a ghostly presence, allowing them to evade physical damage.",
    ],
    abilities: [
      "This item has 2 charges and regains all charges at dawn.",
      "As a reaction, the user can turn partly ethereal / ghost-like until the end of their next turn. During this time, the user is immune to bludeoning, piercing and slashing damage (including magical weapon damage), but is vulnerable to any magical damage taken from spells and magical effects",
    ],
  },
  {
    id: 1003,
    rarity: ItemRarity.Legendary,
    source: "Dota 2, Blink Dagger (Movement Ability from Whisper, CR)",
    requiresAttunement: true,
    Name: "Kelen's Blink Dagger",
    description: [
      "The fabled dagger used by the fastest assassin ever to walk the lands.",
    ],
    abilities: [
      "This item has 3 charges and regains 1d3 charges daily at dawn. You can use 1 charge to cast Misty Step from the blade.",
      "This item can be used as a +2 dagger, has the Light and Finesse, and Thrown properties, and does 1d6 damage per hit.",
      "After the item is thrown, but before it hits, the wielder can choose to transform into shadow and merge with the blade, teleporting instantly to wherever the blade impacts. If the target is a creature,"
            + " the wielder emerges adjacent to the target in a space of their choice. If they miss with the attack, the DM determines where the wielder teleports accordingly.",
    ],
  },
  {
    id: 1004,
    Name: "Lothar's Edge",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Shadow Blade / Silver Edge",
    requiresAttunement: true,
    description: [
      "Once used to slay an unjust king of the once powerful Kharidian Empire, only to have the kingdom erupt into civil war in the aftermath.",
    ],
    abilities: [
      "Lothar's Edge is a longsword with the Finesse property. It has 3 charges, and regains all unspent charges at dawn.",
      "Lothar's Edge: You can use one charge to cast invisibilty on yourself. If you attack a creature with this weapon while invisible and cause the invisibility to end, the attack deals an extra 3d8 psychic damage",
    ],
  },
  {
    id: 1005,
    Name: "Daedalus",
    rarity: ItemRarity.Rare,
    source: "Dota 2, Daedalus",
    requiresAttunement: true,
    description: [
      "A weapon of incredible power that is difficult for even the strongest of warriors to control.",
    ],
    abilities: [
      "This weapon is a Heavy Crossbow, that does 2d8 base damage on a hit.",
      "This weapon crits on dice rolls of 18-20",
    ],
  },
  {
    id: 1006,
    Name: "Bloodthorn",
    rarity: ItemRarity.Legendary,
    source: "Dota 2, Bloodthorn",
    requiresAttunement: true,
    description: [
      "A reviled greatsword that bites deeper with each wriggle of its victim's final throes. The weapon, when unsheathed, glows with a gentle harmless fire, until it tastes blood - at which point, the fire expands and engulfs its victim",
      "Originally forged by immolating a demon while the blade was plunged into it's heart, the weapon whispers evil words about demons to its wielder.",
      "Few people know that this weapon was forged at the same time as the Orchid Malevolence - a spellstaff of great power. When within 20 feet of each other, both items glow with a gentle blue light.",
    ],
    abilities: [
      "This weapon is a greatsword that does an additional 1d6 fire damage on hit.",
      "This weapon crits on 19-20, but the fire damage is not included in the crit",
    ],
  },
  {
    id: 1007,
    Name: "Orchid Malevolence",
    rarity: ItemRarity.Legendary,
    source: "Dota 2, Orchid Malevolence",
    requiresAttunement: true,
    description: [
      "A garnet cored rod covered in a deep grey-red metal, the Orchid Malevolence was constructed from the essence of a fire demon. Atop the staff sits a beautiful white orchid, with a burning garnet at its centre. The garnet is wreathed in a gentle red fire, that flares up whenever its wielder casts a spell",
      "Few people know that this weapon was forged at the same time as Bloodthorn - a reviled greatsword. When within 20 feet of each other, both items glow with a gentle blue light.",
    ],
    abilities: [
      "This spellstaff can be used as a spell focus, and provides a +1 to the wielders spell save DC. ",
      "Twice per day, recharging at dawn, the wielder can use a bonus action to soul burn a target. The target must make a wisdom saving throw against the casters spell save DC. This silences the target until the end of the target's next turn.",
      "While silenced, record the amount of damage done to the target until the soul burn effect ends. 30% of this damage is caused to the target in necrotic damage at the end of the soul burn effect",
    ],
  },
  {
    id: 1007,
    Name: "Scythe of Vyse",
    rarity: ItemRarity.Artifact,
    source: "Dota 2, Scythe of Vyse",
    requiresAttunement: true,
    description: [
      "The most guarded relic among the cult of Vyse, it is the most coveted weapon among magi.",
    ],
    abilities: [
      "This spellstaff can be used as a spell focus, and provides a +2 to the wielders spell save DC. It can also be used as a quarterstaff. The wielder can cast {@spell Shillelagh} at will while attuned to this item.",
      "Twice per day, recharging at dawn, the wielder can use a bonus action to stun a target. The target must make a wisdom saving throw against the casters spell save DC, stunning the target on a success. The target repeats their saving throw at the end of each turn, ending the effect on a success.",
    ],
  },
  {
    id: 1008,
    Name: "Dagon",
    rarity: ItemRarity.Artifact,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1009,
    Name: "Blade Mail",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1010,
    Name: "Black King Bar",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1011,
    Name: "Manta Style",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1012,
    Name: "Shiva's Guard",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1013,
    Name: "Assault Cuirass",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1014,
    Name: "Linken's Sphere",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1015,
    Name: "Armlet Of Mordiggian",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1015,
    Name: "Monkey King Bar",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1015,
    Name: "Battle Fury",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1015,
    Name: "Ethereal Blade",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1015,
    Name: "Radiance",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1015,
    Name: "Butterfly",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1015,
    Name: "Abyssal Blade",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "This item can be used as a spellcasting focus (wand) for the wielder, and must be used as the spellcasters focus to use the effect.",
      "This item has 3 charges and 5 levels. The wielder can use a charge to do (2 + 2*level)d6 damage as a bonus action. The target must make a dexterity saving throw against the wielder's spell save DC, dealing full damage, or half damage on success.",
    ],
  },
  {
    id: 1015,
    Name: "Vanguard",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
    ],
  },
  {
    id: 1015,
    Name: "Crimson Guard",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
    ],
    abilities: [
    ],
  },
  {
    id: 1015,
    Name: "Diffusal Blade",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
    ],
    abilities: [
    ],
  },
  {
    id: 1015,
    Name: "Kaya",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
    ],
    abilities: [
    ],
  },
  {
    id: 1015,
    Name: "Sange",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
    ],
    abilities: [
    ],
  },
  {
    id: 1015,
    Name: "Yasha",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
    ],
    abilities: [
    ],
  },
  {
    id: 1015,
    Name: "Satanic",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
    ],
    abilities: [
    ],
  },
  {
    id: 1015,
    Name: "Eye Of Skadi",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
    ],
    abilities: [
      "",
    ],
  },
  {
    id: 1015,
    Name: "Mjollnir",
    rarity: ItemRarity.VeryRare,
    source: "Dota 2, Dagon",
    requiresAttunement: true,
    description: [
      "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
    ],
    abilities: [
      "",
    ],
  },
];

*/

const itemConstructors: MagicItemProps[] = [
  {
    id: MagicItemIds.OrbOfIcingdeath,
    requiresAttunement: [true, "Simultaneously by a warlock of Icingdeath and another creature"],
    rarity: ItemRarity.Legendary,
    description: [
      `The Orb of Icingdeath is a lantern with a smooth, solid, 5-pound sphere of smoky gray quartz about the size of a grapefruit encased inside. Close examination reveals two or more pinpricks of blue light deep inside the sphere.
      The Orb of Icingdeath holds the mind and part of the spirit of Icingdeath, and is sentient. Its alignment is Neutral Evil. The spirit of Icingdeath has an Intelligence of 18, a Wisdom of 15, and Charisma of 23.
      The spirit is bound to the lantern and can't be harmed, turned, or raised from the dead.
      Icingdeath speaks, reads, and understands Common, Draconic, Infernal and Aquan, and can see and hear normally out to a range of 60 feet.
      A Professor Orb has extensive knowledge of four narrow academic subjects. These subjects are: Knowledge of Fiends, Knowledge of Underwater / Deep Sea creatures, Knowledge of Chromatic and Metallic Dragons and their abilities, Knowledge of the possible location and properties of powerful creatures.
      When making an Intelligence check to recall lore from any of its areas of expertise, the orb has a +10 bonus to its roll (Int Mod + Proficiency).`,
      `While holding the Orb of Icingdeath, you can command the spirit as a bonus action to shed bright light in a 30-foot radius and dim light for an additional 30 feet, or to turn the orb off. The white is a cold, clinical white light.
      While holding the lantern, you can use an action to ask the spirit's form to leave the lantern and duplicate the effect of the mage hand spell. The orb can use the Mage Hand cantrip to carry itself, and the orb will carry itself unless asked not to.
      If you fall unconscious within 10 feet of the lantern, the spirit emerges from it, magically stabilizes you with a touch, and then quickly returns to the lantern.
      These abilities are only useable if the Spirit of Icingdeath is on good terms with you.`,
      "A warlock of Icingdeath attuned to this item is able to cast Sending once per day without expending a spell slot, targeting only the orb, so that it can communicate with Icingdeath.",
    ],
  },
  {
    id: MagicItemIds.Starfall,
    rarity: ItemRarity.Legendary,
    requiresAttunement: true,
    description: [
      "This dragon's claw has been covered with a coat of molten silver, upon which has been inscribed the wyrm (dragon) rune. The claw contains a portion of the power of the legendary dragon Starfall, Ravager of the Talon. The claw has the following properties:",
      "Wyrmslayer: As an action, you can point the claw at a creature within 30 feet of you. The creature gains vulnerability to the next attack or spell that it is affected by. This property of the claw can't be used again until the next dawn.",
      "Wyrm Shield. While the claw is displayed on your person, you have resistance to cold damage, and you are resistant to dragon breath weapons.",
      `Wyrm Ward. You can transfer the c1aw's magic to a place by tracing the wyrm rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 100-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the claw to be within 5 feet of you.
      You cannot use any of the claws other abilities while it is in this place, and moving the claw means you cannot use the other abilities of this item for 1 week.
      While in the 100-foot-radius sphere, any dragon has disadvantage on saving throws and can have a flying speed no higher than 10 feet. The dragon must make a DC17 Wisdom saving throw if it attempts to leave the circle. If it fails, it cannot leave the circle instead.`,
    ],
  },
  {
    id: MagicItemIds.TalonOfIcingdeath,
    rarity: ItemRarity.Legendary,
    requiresAttunement: [true, "by a warlock of Icingdeath."],
    description: [
      "The Talon of Icingdeath is a large talon of the Ancient White Dragon, Icingdeath. It contains part of the soul of Icingdeath, and can grant a follower of Icingdeath increased power. To attune to this item, it must be forged together with a suitable hilt, and covered in an alloy of Dimeritium and Orichalcum.",
      "Once forged, this sword can be wielded as a magic greatsword that grants a +3 bonus to attack and damage rolls made with it. While you hold it, you gain a +3 bonus to spell attack rolls.",
      "The staff has 14 charges and regains 1d6 + 2 charges at dawn.",
      `Spell Absorption: While holding the sword, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the sword absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level.
      You may only use this ability if the sword has less than the maximum amount of charges. If the sword would regain more than 14 charges from this ability, it only gains up to the maximum amount of charges.`,
      `Spells: While holding the sword, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability:
      plane shift (7 charges),
      mental prison (6 charges),
      wall of ice (6 charges),
      cone of cold (5 charges),
      banishing smite (5 charges)`,
      "You can also use an action to cast one of the following spells from the sword without using any charges: enlarge/reduce, jump, or absorb elements.",
    ],
  },
  {
    id: MagicItemIds.StaffOfNegativeEnergy,
    rarity: ItemRarity.Legendary,
    requiresAttunement: true,
    description: [
      "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.",
      "The staff has 50 charges for the following properties. It regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12 + 1 charges.",
      `Spell Absorption: While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell,
      canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below)`,
      `Spells. While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability:
      gentle repose (2 charges),
      knock (2 charges),
      life transference (3 charges),
      dispel magic (3 charges),
      negative energy flood (5 charges),
      enveneration (5 charges),
      soul cage (6 charges, must have material component),
      fireball (7th-level version, 7 charges),
      finger of death (7 charges),
      plane shift (7 charges).
      You can also use an action to cast one of the following spells from the staff without using any charges: arcane lock, detect magic, enlarge/reduce, light, mage hand, or protection from evil and good.`,
    ],
  },
];

export const items: MagicItem[] = itemConstructors.map(x => new MagicItem(x));
