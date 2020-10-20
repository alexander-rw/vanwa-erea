import { BaseDataObject } from "../../@types/Data/BaseDataObject";
import { DisplayableDataObject } from "../../@types/Panel/DisplayableDataObject";
import { PanelUpdateProps } from "../../@types/Panel/PanelUpdaterProps";
import { BaseComponent } from "../BaseComponents/BaseComponent";

export class PanelUpdater<T = {}, S = {}> extends BaseComponent<T & PanelUpdateProps, S> {
  constructor(props: T & PanelUpdateProps, state: S) {
    super(props, state);
    this.updatePanelWithDataObject = this.updatePanelWithDataObject.bind(this);
  }

  public updatePanelWithDataObject(o: BaseDataObject | DisplayableDataObject): void {
    if (o !== {}) {
      this.props.updatePanelData(o as DisplayableDataObject);
      if (!this.props.isOpen) {
        this.props.openPanel();
      }
    }
  }
}
