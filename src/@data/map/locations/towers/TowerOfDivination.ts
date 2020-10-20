import { Location } from "../../../../@types/Location/Location";
import { DataTypeIds } from "../../../../Constants/Ids/DataTypeIds";
import { LocationIds } from "../../../../Constants/Ids/LocationIds";

import { SeersVillage } from "../cities/SeersVillage";

export const TowerOfDivination: Location = {
  id: LocationIds.TowerOfDivination,
  type: DataTypeIds.Location,
  description: SeersVillage.description,
};
