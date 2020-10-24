import { debounce, DebouncedFunc } from "lodash";
import React, { ChangeEvent } from "react";

import {
  Container, Row, Col, OverlayTrigger, Tooltip, Card,
} from "react-bootstrap";

import { v4 } from "uuid";

import { WorldData } from "../../@data/worldData";
import { WorldEvent } from "../../@types/Events/WorldEvent";
import { VoidFunc } from "../../@types/Functions/VoidFunc";
import { LinkableRegExp } from "../../Utilities/LinkableString";
import { LinkedElements } from "../BaseComponents/LinkedElements";
import { ConnectedPanelUpdater } from "../Panel/ConnectedPanelUpdater";
import { PanelUpdater } from "../Panel/PanelUpdater";

interface TimelineState {
  originalEvents: WorldEvent[];
  filteredEvents: WorldEvent[];
  searchTerm: string;
}

export class TimelinePanelUpdater extends PanelUpdater<{}, TimelineState> {
  search: DebouncedFunc<VoidFunc>;

  constructor(props, state) {
    super(props, state);
    this.state = {
      originalEvents: WorldData.events,
      filteredEvents: WorldData.events,
      searchTerm: "",
    };

    this.onChange = this.onChange.bind(this);
    this.searchDataBySearchTerm = this.searchDataBySearchTerm.bind(this);
    this.search = debounce(this.searchDataBySearchTerm, 500);
  }

  render(): JSX.Element {
    return (
      <Container className="page-padding-top">
        { this.startSection() }
        { this.state.filteredEvents.length < 1
          ? (
            <div>
              No events found with search term
              {` "${this.state.searchTerm}"`}
            </div>
          )
          : this.state.filteredEvents.map((e: WorldEvent) => this.renderEventViewable(e)) }
      </Container>
    );
  }

  private renderEventViewable(e: WorldEvent): React.ReactNode {
    return (
      <Card className="timeline-card" key={v4()}>
        <Card.Body>
          <Row>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
              <OverlayTrigger
                placement="right"
                delay={{ show: 100, hide: 150 }}
                overlay={
                  <Tooltip style={{ zIndex: 1000 }} id={v4()}>{e.date.iso8601()}</Tooltip>
                }
              >
                <span className="timeline-square" />
              </OverlayTrigger>
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} xl={10}>
              <Card.Title>{e.date.humanise()}</Card.Title>
              <Card.Text>
                {
                  LinkableRegExp.test(e.description)
                    ? LinkedElements({ invokeFunc: this.updatePanelWithDataObject, text: e.description })
                    : e.description
                }
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }

  private startSection(): React.ReactNode {
    return (
      <Row style={{ paddingBottom: "1em" }}>
        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <h1>Timeline</h1>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} xl={4} style={{ marginTop: "auto", marginBottom: "auto" }}>
          <input
            type="text"
            id="timelineSearchInput"
            className="form-control"
            placeholder="Search Timeline"
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }

  private searchDataBySearchTerm = (): void => { // eslint-disable-line arrow-body-style
    const { searchTerm } = this.state;
    const filteredEvents = searchTerm === ""
      ? WorldData.events
      : WorldData.events
        .filter(e => JSON.stringify([
          e.description.toLowerCase(),
          e.happenedAtLocation.toLowerCase(),
          e.date.humanise().toLowerCase(),
          e.date.iso8601(),
        ]).includes(searchTerm));
    this.setState({ filteredEvents })
  };

  private onChange(e: ChangeEvent<HTMLInputElement>): void {
    const searchTerm = (e.target?.value?.trim() || "").toLowerCase();
    this.setState({ searchTerm });
    this.search();
  }
}

export const Timeline = ConnectedPanelUpdater(TimelinePanelUpdater);
