import { State } from "react-burger-menu";
import { Reducer } from "redux";

import {
  CLOSE_MENU,
  OPEN_MENU,
  UPDATE_MENU,
  TOGGLE_MENU,
  MenuAction,
} from "./types";

export const menu: Reducer<State, MenuAction> = (state: State | undefined, action: MenuAction): State => {
  switch (action.type) {
    case CLOSE_MENU:
    case OPEN_MENU:
    case TOGGLE_MENU:
    case UPDATE_MENU:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state || { isOpen: false };
  }
};
