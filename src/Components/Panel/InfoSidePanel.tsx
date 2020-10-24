import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import { Button } from "react-bootstrap";
import { v4 } from "uuid";

import { DisplayableDataType } from "../../@types/Data/DisplayableDataType";
import { PanelUpdateProps } from "../../@types/Panel/PanelUpdaterProps";
import { appIcons } from "../../Constants/Icons";
import { LinkableRegExp } from "../../Utilities/LinkableString";
import { humaniseString } from "../../Utilities/String";

import { LinkedElements } from "../BaseComponents/LinkedElements";
import { Span } from "../BaseComponents/Span";

import { ConnectedPanelUpdater } from "./ConnectedPanelUpdater";
import { PanelUpdater } from "./PanelUpdater";

class Panel extends PanelUpdater {
  private static HiddenPanelHeadingKeys: string[] = [
    "displayorder",
    "linkedtodeityids",
    "type",
    "test",
  ];

  public constructor(props: PanelUpdateProps, state: unknown) {
    super(props, state);
    this.onKeydownClearPanel = this.onKeydownClearPanel.bind(this);
  }

  public render(): ReactNode {
    return (
      <div className="panel-outer-div">
        { this.shouldOpenPanel() && this.props.isOpen
          ? this.renderData()
          : this.renderMinimised() }
      </div>
    );
  }

  public componentDidMount(): void {
    document.addEventListener("keydown", this.onKeydownClearPanel, false);
    document.addEventListener("keydown", this.onKeydownPreviousPanelDataObject, false);
  }

  public componentWillUnmount(): void {
    document.removeEventListener("keydown", this.onKeydownClearPanel, false);
    document.removeEventListener("keydown", this.onKeydownPreviousPanelDataObject, false);
  }

  private onKeydownClearPanel(e: KeyboardEvent): void {
    if (e.keyCode === 27) { // escape key
      this.props.updatePanelData({});
    }
  }

  private onKeydownPreviousPanelDataObject(e: KeyboardEvent): void {
    if ((e.keyCode === 37 || e.keyCode === 39) && this.props.isOpen) {
      this.log.logStr("Got key click for prev");
    }
  }

  private shouldOpenPanel = (): boolean => Object.keys(this.props.dataObject).length !== 0;

  private renderData(): ReactNode {
    const { icon, color } = appIcons.closePanel;
    return (
      <div className="panel-container">
        <Button className="btn-panel-minimise" onClick={this.props.closePanel}>
          <FontAwesomeIcon icon={icon} style={{ color }} />
        </Button>
        <div className="panel-container-scrollable">
          { Object
            .entries(this.props.dataObject)
            .map((entry: [string, DisplayableDataType]) => {
              const [key, data] = entry;
              return this.renderBasedOnKey(key, data);
            }) }
        </div>
      </div>
    );
  }

  private renderBasedOnKey(key: string, data: DisplayableDataType): ReactNode {
    const displayKey = humaniseString(key);
    const dataKey = key.toLowerCase();

    let heading: ReactNode | undefined;

    let output: ReactNode | ReactNode[] | undefined;

    if (dataKey === "id") {
      heading = Panel.largeHeading(data as string);
    } else if (!Panel.HiddenPanelHeadingKeys.includes(dataKey)) {
      heading = Panel.mediumHeading(displayKey);
      output = Array.isArray(data)
        ? this.multiDepthValues(data)
        : this.paragraph(data as string);
    }

    return (
      <div key={v4()}>
        { heading }
        { output }
      </div>
    );
  }

  private renderMinimised(): ReactNode {
    const { icon, color } = appIcons.openPanel;
    return (
      <div className="panel-container-minimised">
        <Button className="btn-panel" disabled={!this.shouldOpenPanel()} onClick={this.props.openPanel}>
          <FontAwesomeIcon icon={icon} style={{ color }} />
        </Button>
      </div>
    );
  }

  private static largeHeading = (heading: string): ReactNode => <h1>{heading}</h1>;

  private static mediumHeading = (heading: string): ReactNode => <h2>{heading}</h2>;

  private multiDepthValues = (values: (string | [string, string])[]): ReactNode[] => values.map((p: string | [string, string]) => (Array.isArray(p)
    ? this.highlightedParagraph(p)
    : this.paragraph(p)));

  private paragraph = (text: string): ReactNode => <p key={v4()}>{ this.updateButton(text) }</p>;

  private highlightedParagraph = (data: [string, string]): ReactNode => (
    <p key={v4()}>
      <b>{ this.updateButton(data[0]) }</b>
      { this.updateButton(data[1]) }
    </p>
  );

  private updateButton = (text: string): ReactNode => (LinkableRegExp.test(text)
    ? LinkedElements({ invokeFunc: this.updatePanelWithDataObject, text })
    : Span({ text }));
}

export const InfoSidePanel = ConnectedPanelUpdater(Panel);
