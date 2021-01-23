import type { ObeliskData } from "../@types/Obelisk/ObeliskData";

export const obelisks: ObeliskData[] = [
  {
    extraInfo: "Port Void",
    text: `A revenant creature of unimaginable power and rage lies within this pillar /
    Say the words and strike with lightning and prepare for a creature borne of storms and sea /
    Thine beast of sea and storms, call upon the skies, and be released from your cage`,
    // storm giant Quintessent, with some modifications to make it ~cr 23 (eg lightning jump, more fly speed, a storm effect up to 120ft), storm giant stormguard, 2x storm giant blackguard, storm lord
    // has a storm boomerang and some other storm related things as well
    location: [0, 0], // Port Void - Originally called Thunderforge items
  },
  {
    extraInfo: "Misruul Desert",
    text: `This pillar holds the key for which the Efreeti Misruul and Marid Calim are imprisoned; disrespect and destruction /
    Release the key by speaking their names, and condemming them for their crimes, but beware the danger that you may unleash /
    The crystal does not just hold two dangerous creatures, but the connection to an entire plane`,
    // opening this holds a scroll written in Alphmagi, that says "The words upon this scroll are simply a compass", pointing the players towards the spinning keep of Siri-wajden.
    // Opening this obelisk re-ignites the portal to the plane of water nearby, and will stop the flow from Vvardenrock's main central portal that flows from its rock.
    // Heading to the Keep and (optionally) opening the crstal spawns both of the creatures; the players may ally with either (depending on what they would like the end effects to be)
    // or may try their luck with both.
    location: [0, 0],
  },
  {
    extraInfo: "Endless snows near the druid village",
    text: `Within this stone lies a gem of old one that bears purple hue and scaled life /
    Speak its mothers name Haerinvureem break a purple gem in your hands and swear that you will protect its child in life and death and allow yourself to find the seed of life once again.`,
    // this contains a perfectly preserved Amethyst dragon egg, the single offspring of Haerinvureem laid here thousands of years ago.
    location: [0, 0], // Frozen obelisk near druid farm in the Endless snows
  },
  {
    extraInfo: "Manifest, embedded into the rock near the port walkway",
    text: `A beast of the sea connected to the fleet that was destroyed here so long ago /
    Speak its name, and be consumed by the sea. Slarkrethel, despoiler of coasts and planes`,
    // releasees Slarkrethel
    location: [0, 0], // Manifest
  },
  {
    extraInfo: "Outside Falador Castle",
    text: `The creature from the negative plane could not destroyed, so was sealed away /
    Flood the plaque with negative energy, and let the creature be released. Pray to the god of war, and the sword may give you a worthy tool for the fight /`,
    // a nightwalker! plus a nine lives stealer with a single charge
    location: [0, 0], // Falador
  },
  {
    extraInfo: "?",
    text: `The sword in here may seem simple, but it is insidious and destructive /
    The sword is guarded by creatures native to the hells /
    Sacrifice an innocent creature and rub its blood on the plaque, and let the sword be released`,
    // Releasees a Pit Fiend and some other devils and has Blackrazor inside it
    location: [0, 0],
  },
  {
    extraInfo: "Outside Kylvoro",
    text: `The Weaver has a connection to this plane that is unique and worthy of thanks /
    Pray to the Weaver say its name and then rid the column of magic and be gifted a gem of magical proportions`,
    // contains a Ioun Stone, Greater Absorption, with 10 levels of absorption left
    location: [0, 0], // Kylvoro
  },
  {
    extraInfo: "Somewhere in the Kharidian Desert",
    text: `When you are sure this may be destroyed call out the heathens name and perform a bloodletting upon the words here /
    You must be prepared, for His presence is inevitable even through death /
    Vecna controls undeath`,
    // Contains the eye of Vecna and will possibly summon him?
    location: [0, 0], //
  },
  {
    extraInfo: "",
    text: "",
    // Contains a Marut or an inevitable ?
    location: [0, 0],
  },
  {
    extraInfo: "",
    text: "",
    location: [0, 0],
  },
];