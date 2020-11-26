import { modFromValue } from "../../@types/Ability/AbilityValue";
import { PlayableCharacter } from "../../@types/PlayableCharacters/PlayableCharacter";

const level = 19;
const profBonus = Math.floor(level / 4) + 2;

export const campaignCharacters: PlayableCharacter[] = [
  {
    name: "Farona Sevenson",
    avatarUrl: "",
    profBonus,
    stats: {
      str: modFromValue(7),
      dex: modFromValue(16),
      con: modFromValue(19),
      int: modFromValue(19),
      wis: modFromValue(7),
      cha: modFromValue(20),
    },
  }
];