import { PanelState } from "../../@types/Panel/PanelState";
import { RootState } from "../RootState";

export const mapPanelState = (state: RootState): PanelState => ({
  isOpen: state.sidePanel.isOpen,
  dataObject: state.sidePanel.dataObject,
});
