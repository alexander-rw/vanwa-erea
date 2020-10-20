import { DisplayableDataObject } from "../../@types/Panel/DisplayableDataObject";

import {
  UPDATE_PANEL,
  UPDATE_PANEL_VISIBILITY,
  UpdatePanelDataAction,
  UpdatePanelVisibilityAction,
} from "./types";

export const updatePanel = (dataObject: DisplayableDataObject): UpdatePanelDataAction => ({
  type: UPDATE_PANEL,
  payload: dataObject,
});

export const togglePanelVisibility = (isOpen: boolean): UpdatePanelVisibilityAction => ({
  type: UPDATE_PANEL_VISIBILITY,
  payload: isOpen,
});

export const openSidePanel = (): UpdatePanelVisibilityAction => ({
  type: UPDATE_PANEL_VISIBILITY,
  payload: true,
});

export const closeSidePanel = (): UpdatePanelVisibilityAction => ({
  type: UPDATE_PANEL_VISIBILITY,
  payload: false,
});
