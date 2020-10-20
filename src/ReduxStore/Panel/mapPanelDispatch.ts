
import { Dispatch } from "redux";

import { DisplayableDataObject } from "../../@types/Panel/DisplayableDataObject";
import { PanelDispatch } from "../../@types/Panel/PanelDispatch";

import {
  updatePanel,
  togglePanelVisibility,
  openSidePanel,
  closeSidePanel,
} from "./actions";
import { PanelAction } from "./reducers";


export const mapPanelDispatch = (dispatch: Dispatch<PanelAction>): PanelDispatch => ({
  updatePanelData: (data: DisplayableDataObject): void => { dispatch(updatePanel(data)); },
  updatePanelVisibility: (isOpen: boolean): void => { dispatch(togglePanelVisibility(isOpen)); },
  openPanel: (): void => { dispatch(openSidePanel()); },
  closePanel: (): void => { dispatch(closeSidePanel()); },
});
