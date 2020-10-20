import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";
import { dataItemToLinkable } from "../../../../Utilities/LinkableString";

export const TowerOfIllusion: Location = {
  id: LocationIds.TowerOfIllusion,
  type: DataTypeIds.Location,
  description: [
    `The Tower Of Illusion, that sits just outside of Vvardenbridge, is a deceptive tower - the tower looks extremely tall until you actually reach it, at which point it shrinks to only 2 or 3 storeys tall. The tower is a blanketed in a
    mirage of illlusion energy, that seems to make the tower sway in the wind, much to the chagrin of the locals of ${dataItemToLinkable(DataTypeIds.Location, LocationIds.Vvardenbridge)}`,
  ],
};
