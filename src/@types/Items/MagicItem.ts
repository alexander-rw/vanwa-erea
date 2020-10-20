import { MagicItemIds } from "../../Constants/Ids/MagicItemIds";

import { ItemRarity } from "./ItemRarity";

export interface MagicItemProps {
  id: MagicItemIds;
  requiresAttunement: boolean | [true, string];
  rarity: ItemRarity;
  description: string[];
}

export class MagicItem {
  public requiresAttunement: string;

  public id: MagicItemIds;

  public rarity: ItemRarity;

  public description: string[];

  constructor(props: MagicItemProps) {
    this.id = props.id;
    this.rarity = props.rarity;
    this.description = props.description;

    if (Array.isArray(props.requiresAttunement)) {
      this.requiresAttunement = `Requires attunement ${props.requiresAttunement[1]}`;
    } else {
      this.requiresAttunement = props.requiresAttunement ? "Requires attunement" : "";
    }
  }
}
