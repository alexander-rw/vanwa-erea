import { debounce, Cancelable } from "lodash";
import React, { ChangeEvent } from "react";

import { WorldData, WorldDataType } from "../../@data/worldData";
import { VoidFunc } from "../../@types/Functions/VoidFunc";
import { isStringNullOrEmpty } from "../../Utilities/String";

import { BaseComponent } from "./BaseComponent";

type SearchableDataEntry = {
  stringified: string;
  entry: WorldDataType;
};

export class SearchBar extends BaseComponent<{}, { focused: boolean; searchTerm: string }> {
  search: VoidFunc & Cancelable;

  searchData: SearchableDataEntry[];

  constructor(props, state) {
    super(props, state);
    const {
      npcs,
      deities,
      mapFeatures,
      events,
      locations,
    } = WorldData;

    this.searchData = [
      npcs,
      deities,
      mapFeatures,
      events,
      locations,
    ].flat(1)
      .map(entry => ({ entry, stringified: JSON.stringify(Object.values(entry)).toLowerCase() }));

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.searchDataBySearchTerm = this.searchDataBySearchTerm.bind(this);
    this.search = debounce(this.searchDataBySearchTerm, 500);
    this.state = {
      focused: false,
      searchTerm: "",
    };
  }

  render(): JSX.Element {
    return (
      <div className="app-search-bar">
        <input
          type="text"
          id="appSearchInput"
          tabIndex={0}
          className={`form-control app-search-input ${this.state.focused ? "app-search-input-focused" : ""}`}
          placeholder={this.state.focused ? "Search..." : "..."}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
      </div>
    );
  }

  componentWillUnmount(): void {
    this.search.cancel();
  }

  private onFocus = (): void => this.setState({ focused: true });

  private onBlur = (): void => this.setState({ focused: false });

  private searchDataBySearchTerm = (): SearchableDataEntry[] => this.searchData
    .filter(x => x.stringified.includes(this.state.searchTerm));

  private onChange(e: ChangeEvent<HTMLInputElement>): void {
    const searchTerm = e.target?.value?.trim();

    if (isStringNullOrEmpty(searchTerm)) {
      return;
    }

    this.setState({ searchTerm });
    this.search();
  }
}
