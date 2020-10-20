/* eslint-disable no-useless-escape */
import { DataTypeIds } from "../Constants/Ids/DataTypeIds";

export const dataItemToLinkable = (type: DataTypeIds, id: string): string => `{@${type}|${id}}`;

export const LinkableRegExp = new RegExp(/\{@(.+?)\|(.*?)\}/, "ig");
