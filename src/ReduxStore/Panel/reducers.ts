import { Reducer } from "redux";

import { DisplayableDataObject } from "../../@types/Panel/DisplayableDataObject";

import { PanelState } from "../../@types/Panel/PanelState";

import {
  UPDATE_PANEL,
  UPDATE_PANEL_VISIBILITY,
  UpdatePanelDataAction,
  UpdatePanelVisibilityAction,
} from "./types";

export type PanelAction = UpdatePanelDataAction | UpdatePanelVisibilityAction;

export const sidePanel: Reducer<PanelState, PanelAction> = (state: PanelState | undefined, action: PanelAction): PanelState => { // eslint-disable-line max-len
  switch (action.type) {
    case UPDATE_PANEL:
      return {
        ...state,
        isOpen: state?.isOpen || false,
        dataObject: action.payload as DisplayableDataObject,
      };
    case UPDATE_PANEL_VISIBILITY:
      return {
        ...state,
        isOpen: action.payload as boolean,
        dataObject: state?.dataObject || {},
      };
    default:
      return state || { isOpen: false, dataObject: {} };
  }
};
