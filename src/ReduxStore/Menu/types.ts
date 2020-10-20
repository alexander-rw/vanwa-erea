import { Action } from "redux";

export const CLOSE_MENU = "CLOSE_MENU";
export const OPEN_MENU = "OPEN_MENU";
export const UPDATE_MENU = "UPDATE_MENU";
export const TOGGLE_MENU = "TOGGLE_MENU";

export interface MenuAction extends Action<string> {
  payload: boolean;
}
