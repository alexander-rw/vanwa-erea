import { DataTypeIds } from "../../Constants/Ids/DataTypeIds";

export interface BaseDataObject {
  type: DataTypeIds;
  id: string;
}
