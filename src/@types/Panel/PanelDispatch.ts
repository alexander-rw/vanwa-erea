import { VoidFunc, ProppedVoidFunc } from "../Functions/VoidFunc";

import { DisplayableDataObject } from "./DisplayableDataObject";

export interface PanelDispatch {
  updatePanelData: ProppedVoidFunc<[DisplayableDataObject]>;
  updatePanelVisibility: ProppedVoidFunc<[boolean]>;
  openPanel: VoidFunc;
  closePanel: VoidFunc;
}
