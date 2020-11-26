import { difference } from "lodash";
import React from "react";

import { Provider } from "react-redux";

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { WorldData } from "../../@data/worldData";
import { AppRoutes } from "../../Constants/AppRoutes";
import { LocationIds, GeneralLocationIds } from "../../Constants/Ids/LocationIds";
import { NpcIds } from "../../Constants/Ids/NpcIds";
import { store } from "../../ReduxStore/ReduxStore";

import { Api } from "../Api/Api";
import { DisplayCharacters } from "../DisplayCharacter/DisplayCharacters";
import { Items } from "../Items/Items";
import { NavBar } from "../Menu/NavBar";

import { InfoSidePanel } from "../Panel/InfoSidePanel";
import { ShipCalc } from "../ShipCalculator/ShipCalc";
import { Timeline } from "../Timeline/Timeline";
import { Visualiser } from "../Visualiser/Visualiser";
import { OpenLayersMap } from "../WorldMap/OpenLayersMap";

import { BaseComponent } from "./BaseComponent";

import { NoMatch } from "./NoMatch";

import { SearchBar } from "./SearchBar";

/* Stylesheets */
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "ol/ol.css";
import "../../Style/scss/main.scss";

export class App extends BaseComponent {
  constructor(props, state) {
    super(props, state);
    this.checkValidAppConfiguration();
  }

  render(): JSX.Element {
    return (
      <Provider store={store}>
        {/* TODO: Info on mage towers, monsetaries etc and link up */}
        {/* TODO: Features & Info on Obsidian pillars and link up */}
        {/* TODO: Shortest path calculator */}
        {/* TODO: 5etools processor for bestiary */}
        {/* TODO: My creatures to 5etools format */}
        {/* TODO: shortest-path calc for roads */}
        {/* TODO: ELF Dictionary and translator and other script translator */}
        {/* TODO: Race changes */}
        {/* TODO: Player Guide inc major events */}
        {/* TODO: House rules inc above two */}
        {/* TODO: Race roll table */}
        {/* TODO: Label names clickable on/off */}
        {/* TODO: Upcoming events and redux store with current date */}
        {/* TODO: Random Encounter Generator */}
        {/* TODO: File searching thing for items in lfs-dnd and PDF viewer */}
        {/* TODO: Magic item viewer */}
        <ToastContainer
          position="bottom-center"
          autoClose={2500}
          newestOnTop={true}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={false}
          hideProgressBar={false}
          rtl={false}
        />
        <InfoSidePanel />
        <BrowserRouter>
          <NavBar />
          <SearchBar />
          <Switch>
            <Redirect exact={true} from="/" to={AppRoutes.Map} />
            <Route path={`${AppRoutes.Map}/:id?`} component={OpenLayersMap} />
            <Route path={AppRoutes.Deities} component={Visualiser} />
            <Route path={AppRoutes.Timeline} component={Timeline} />
            <Route path={AppRoutes.Api} component={Api} />
            <Route path={AppRoutes.Items} component={Items} />
            <Route path={AppRoutes.ShipCalc} component={ShipCalc} />
            <Route path={AppRoutes.PlayerChars} component={DisplayCharacters} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }

  private checkValidAppConfiguration(): void {
    const mapFeatureIds = WorldData.mapFeatures.map(x => x.id);
    const locationEnumIds = Object.values(LocationIds);
    this.checkUniqueKeys("Map Features", mapFeatureIds);
    this.checkUnusedKeys("Map Features", locationEnumIds, mapFeatureIds, GeneralLocationIds);

    const locationIds = WorldData.locations.map(x => x.id);
    const generalLocsAndRoads = [...GeneralLocationIds, ...WorldData.mapFeatures.filter(x => x.roadProperties !== undefined).map(x => x.id)];
    this.checkUniqueKeys("Location Ids", locationIds);
    this.checkUnusedKeys("Location Ids (Not inc roads)", locationEnumIds, locationIds, generalLocsAndRoads);

    const npcIds = WorldData.npcs.map(x => x.id);
    this.checkUniqueKeys("NPC Ids", npcIds);
    this.checkUnusedKeys("NPC Ids", Object.values(NpcIds), npcIds);
  }

  private checkUniqueKeys(name: string, values: string[], excludeValues: string[] = []): void {
    const uniqueValueIds = [...new Set(difference(values, excludeValues))];

    if (values.length !== uniqueValueIds.length) { // has id duplicates
      const doubles = values.filter((x, index) => values.indexOf(x) !== index);
      this.log.error(values.sort());
      this.log.error(uniqueValueIds.sort());
      this.log.error(`${values.length - uniqueValueIds.length} duplicates found in ${name}: ${[...new Set(doubles)].join(", ")}.`);
    } else {
      this.log.info(`No duplicates found in ${name}, continuing...`);
    }
  }

  private checkUnusedKeys(name: string, values: string[], checkAgainstValues: string[], excludeValues: string[] = []): void {
    const uniqueValueIds = [...new Set(difference(values, excludeValues))];

    if (uniqueValueIds.length !== checkAgainstValues.length) { // has unused keys
      const unusedKeys = uniqueValueIds
        .filter(id => checkAgainstValues.indexOf(id) < 0)
        .map(id => `'${id}'`)
        .sort()
        .join(", ");

      this.log.error(`Not all ${name} keys used. Please check these keys: ${unusedKeys}`);
    } else {
      this.log.info(`Used all keys for ${name}, continuing...`);
    }
  }
}
