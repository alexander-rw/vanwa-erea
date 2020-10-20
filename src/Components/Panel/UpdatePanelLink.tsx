import React, { ReactNode } from "react";

import { DisplayableDataObject } from "../../@types/Panel/DisplayableDataObject";

import { PanelUpdater } from "./PanelUpdater";

export class UpdatePanelLink extends PanelUpdater<{ object: DisplayableDataObject; id: string }> {
  render(): ReactNode {
    return (
      <button type="button" onClick={(): void => this.props.updatePanelData(this.props.object)}>{this.props.id}</button>
    );
  }
}
