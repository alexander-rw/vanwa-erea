import { Component } from "react";

import { ConsoleLogger, log } from "../../Utilities/Logger";

export class BaseComponent<P = unknown, S = unknown> extends Component<P, S> {
  public readonly log: ConsoleLogger;

  constructor(props: P, state: S) {
    super(props, state);
    this.log = log;
  }

  public warnProps = (): void => { this.log.warn(JSON.stringify(this.props)); };
}
