/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from "react-redux";

import { mapPanelDispatch } from "../../ReduxStore/Panel/mapPanelDispatch";
import { mapPanelState } from "../../ReduxStore/Panel/mapPanelState";

export function ConnectedPanelUpdater(component: any): any {
  return connect(mapPanelState, mapPanelDispatch)(component);
}
