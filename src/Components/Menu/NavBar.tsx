import React from "react";

import { BaseComponent } from "../BaseComponents/BaseComponent";

import { SlideMenu } from "./SlideMenu";

export class NavBar extends BaseComponent {
  render(): JSX.Element {
    return (
      <nav>
        <SlideMenu />
      </nav>
    );
  }
}
