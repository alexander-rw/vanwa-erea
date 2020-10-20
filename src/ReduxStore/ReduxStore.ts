import {
  createStore,
  combineReducers,
  ReducersMapObject,
  Store,
} from "redux";

import { menu } from "./Menu/reducers";
import { MenuAction } from "./Menu/types";

import { sidePanel } from "./Panel/reducers";
import { UpdatePanelDataAction } from "./Panel/types";

import { RootState } from "./RootState";

import { version } from "./Version/reducers";
import { VersionAction } from "./Version/types";


const initialState: RootState = {
  version: "0.1.0",
  menu: {
    isOpen: false,
  },
  sidePanel: {
    dataObject: {},
    isOpen: false,
  },
};

type AppAction = VersionAction & MenuAction & UpdatePanelDataAction;

const reducers: ReducersMapObject<RootState, AppAction> = {
  version,
  menu,
  sidePanel,
};

const rootReducer = combineReducers<RootState, AppAction>(reducers);

export const store: Store<RootState, AppAction> = createStore(rootReducer, initialState);
