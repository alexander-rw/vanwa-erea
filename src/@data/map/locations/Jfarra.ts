import { Location } from "../../../@types/Location/Location";
import { DataTypeIds } from "../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../Constants/Ids/LocationIds";
import { NpcIds } from "../../../Constants/Ids/NpcIds";
import { PlayerIds } from "../../../Constants/Ids/PlayerIds";
import { dataItemToLinkable } from "../../../Utilities/LinkableString";

export const Jfarra: Location = {
  id: LocationIds.Jfarra,
  type: DataTypeIds.Location,
  description: [
    "Known for its very impressive fruit and wood exports, J'Farra is a small logging town. Notable places of interest in and near the town include:",
    ["Elderhoof Farm", `Well known for very delicious Elderberry wines and cordials, as well as elderberry wood trinkets made from branches of the bushes. The farm was the birthplace of ${PlayerIds.EralStormhoof}, and ${dataItemToLinkable(DataTypeIds.Npc, NpcIds.ElderhoofTribe)}.`],
    // Orange farm
    // cranberry farm
    // blood orange farm
  ],
};
