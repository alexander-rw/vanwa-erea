import { Action } from "redux";

export const GET_VERSION = "GET_VERSION";

export interface VersionAction extends Action<string> {
  payload: string;
}
