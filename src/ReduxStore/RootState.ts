import { State } from "react-burger-menu";
import { DefaultRootState } from "react-redux";

import { PanelState } from "../@types/Panel/PanelState";

export interface RootState extends DefaultRootState {
  readonly version: string;
  readonly menu: State;
  readonly sidePanel: PanelState;
}
