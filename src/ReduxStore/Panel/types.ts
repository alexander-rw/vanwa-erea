import { Action } from "redux";

import { DisplayableDataObject } from "../../@types/Panel/DisplayableDataObject";

export const UPDATE_PANEL = "UPDATE_PANEL";
export const UPDATE_PANEL_VISIBILITY = "UPDATE_PANEL_VISIBILITY";

export interface UpdatePanelDataAction extends Action<string> {
  payload: DisplayableDataObject;
}

export interface UpdatePanelVisibilityAction extends Action<string> {
  payload: boolean;
}
