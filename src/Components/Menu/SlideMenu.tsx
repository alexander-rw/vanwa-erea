/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { slide as Slide, State } from "react-burger-menu";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";

import { v4 } from "uuid";

import { Func } from "../../@types/Functions/Func";
import { VoidFunc } from "../../@types/Functions/VoidFunc";
import { AppRoutes } from "../../Constants/AppRoutes";
import { closeMenu, updateMenu } from "../../ReduxStore/Menu/actions";
import { MenuAction } from "../../ReduxStore/Menu/types";
import { RootState } from "../../ReduxStore/RootState";
import { styles } from "../../Style/ts/navbar";
import { BaseComponent } from "../BaseComponents/BaseComponent";

import { MenuIcon } from "./MenuIcon";

interface Route {
  name: string;
  path: AppRoutes;
}

interface DispatchProps {
  close: VoidFunc;
  update: Func<boolean, void>;
}

interface StateProps {
  isOpen: boolean;
  ver: string;
}

const mapState = (state: RootState): StateProps => ({
  isOpen: state.menu.isOpen,
  ver: state.version,
});

const mapDispatch = (dispatch: Dispatch<MenuAction>): DispatchProps => ({
  close(): void { dispatch(closeMenu()); },
  update(isOpen): void { dispatch(updateMenu(isOpen)); },
});

class Menu extends BaseComponent<DispatchProps & StateProps> {
  render(): JSX.Element {
    const routes = Object
      .entries(AppRoutes)
      .map((r: [string, AppRoutes]) => {
        const [name, path] = r;
        return { name, path } as Route;
      })
      .sort();

    const {
      isOpen,
      ver,
      update,
      close,
    } = this.props;
    return (
      <Slide
        styles={styles}
        isOpen={isOpen}
        onStateChange={(s: State): void => update(s.isOpen)}
      >
        { routes.map(route => Menu.createMenuItem(route, close)) }
        <div className="bm-item-last">{`v${ver}`}</div>
      </Slide>
    );
  }

  private static createMenuItem(route: Route, close: () => void): React.ReactNode {
    return (
      <div key={v4()}>
        <Link className="bm-item-link" to={route.path} onClick={close}>
          <MenuIcon iconKey={route.path} iconName={route.name} />
        </Link>
      </div>
    );
  }
}

export const SlideMenu = connect(mapState, mapDispatch)(Menu);
