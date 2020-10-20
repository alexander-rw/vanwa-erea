import { BaseDataObject } from "../@types/Data/BaseDataObject";
import { Deity } from "../@types/Deities/Deity";
import { WorldEvent } from "../@types/Events/WorldEvent";
import { MagicItem } from "../@types/Items/MagicItem";
import { Location } from "../@types/Location/Location";
import { MapFeatureWithZIndex } from "../@types/Map/MapFeature";
import { NonPlayableCharacter } from "../@types/NonPlayableCharacters/NonPlayableCharacter";

import { DisplayableDataObject } from "../@types/Panel/DisplayableDataObject";
import { DataTypeIds } from "../Constants/Ids/DataTypeIds";

import { MapData } from "../MapData/MapData";

import { dataItemToLinkable } from "../Utilities/LinkableString";

import { deities } from "./deities";
import { events } from "./events";
import { items } from "./items";
import { locations } from "./locations";
import { npcsData } from "./npcs";

export type WorldDataType = BaseDataObject | Location | Deity | NonPlayableCharacter | WorldEvent | MapFeatureWithZIndex;

export type T = { age: number; firstDate: WorldEvent; lastDate: WorldEvent; epochDurationDays: number; epochDurationYears: number; cataclysmicEvent: string; epochInfo: string };

export class WorldData {
  public static readonly items: MagicItem[] = items;

  public static readonly deities: Deity[] = deities;

  public static readonly mapFeatures: MapFeatureWithZIndex[] = MapData.asFlatFeatures();

  public static readonly events: WorldEvent[] = events;

  public static readonly npcs: NonPlayableCharacter[] = npcsData.map((npc: NonPlayableCharacter) => ({
    ...npc,
    events: WorldData.events.filter(e => e.description.includes(npc.id)),
  }));

  public static readonly locations: Location[] = locations.map((loc: Location) => {
    const npcsById = WorldData.npcs.filter(npc => npc.defaultLocation === loc.id);
    return {
      ...loc,
      npcs: npcsById,
      population: loc.population || "Population unknown",
      events: events.filter(e => e.happenedAtLocation === loc.id),
    };
  });

  private static readonly locationToDisplayableDataObject = (loc: Location): DisplayableDataObject => ({
    ...loc,
    events: (loc.events || []).map(e => e.humanise()),
    npcs: (loc.npcs || []).map(npc => dataItemToLinkable(npc.type, npc.id)),
    population: loc.population || "Population unknown",
  });

  public static readonly npcToDisplayableDataObject = (npc: NonPlayableCharacter): DisplayableDataObject => ({
    ...npc,
    events: (npc.events || []).map(e => e.humanise()),
  });

  // data manipulation fns
  public static readonly getDataObjectsByType = (type: string): BaseDataObject[] => {
    switch (type) {
      case DataTypeIds.Location:
        return WorldData.locations;
      case DataTypeIds.Deity:
        return WorldData.deities;
      case DataTypeIds.Npc:
        return WorldData.npcs;
      case DataTypeIds.WorldEvent:
        return WorldData.events;
      default:
        throw new Error(`Could not find BaseDataObject with type: ${type}. The type may be incorrect (Check it is not ${DataTypeIds.Feature} and that it exists)`);
    }
  };

  public static readonly getByTypeAndId = (type: string, id: string): BaseDataObject | undefined => WorldData.getDataObjectsByType(type).find(x => x.id === id);

  public static readonly toDisplayableObject = (o: WorldDataType | undefined): DisplayableDataObject => {
    if (o === undefined) {
      return {};
    }

    switch (o.type) {
      case DataTypeIds.Location:
        return WorldData.locationToDisplayableDataObject(o as Location);
      case DataTypeIds.Npc:
        return WorldData.npcToDisplayableDataObject(o as NonPlayableCharacter);
      default:
        return o as unknown as DisplayableDataObject;
    }
  };
}
