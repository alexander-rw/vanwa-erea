import { Reducer } from "redux";

import { VersionAction, GET_VERSION } from "./types";

export const version: Reducer<string, VersionAction> = (state: string | undefined, action: VersionAction): string => {
  switch (action.type) {
    case GET_VERSION:
      return action.payload;
    default:
      return state || "";
  }
};
