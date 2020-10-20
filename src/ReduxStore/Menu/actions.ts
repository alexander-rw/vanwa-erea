import {
  CLOSE_MENU,
  OPEN_MENU,
  TOGGLE_MENU,
  UPDATE_MENU,
  MenuAction,
} from "./types";

export const openMenu = (): MenuAction => ({
  type: OPEN_MENU,
  payload: true,
});

export const closeMenu = (): MenuAction => ({
  type: CLOSE_MENU,
  payload: false,
});

export const toggleMenu = (isOpen: boolean): MenuAction => ({
  type: TOGGLE_MENU,
  payload: !isOpen,
});

export const updateMenu = (isOpen: boolean): MenuAction => ({
  type: UPDATE_MENU,
  payload: isOpen,
});
