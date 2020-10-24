/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dictionary } from "lodash";
import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Button,
} from "react-bootstrap";

import ReactJson from "react-json-view";

import { v4 } from "uuid";

import { WorldData } from "../../@data/worldData";
import { appIcons } from "../../Constants/Icons";
import { humaniseString } from "../../Utilities/String";
import { BaseComponent } from "../BaseComponents/BaseComponent";

export class Api extends BaseComponent<unknown, Dictionary<any>> {
  constructor(props, state) {
    super(props, state);
    const {
      npcs,
      deities,
      mapFeatures,
      events,
      locations,
    } = WorldData;

    this.state = {
      data: {
        mapFeatures: { type: "FeatureCollection", features: [...mapFeatures] },
        npcs,
        deities,
        events,
        locations,
      },
    };
  }

  render(): JSX.Element {
    return (
      <Container className="page-padding-top">
        <Row>
          <Col className="text-center align-items-center" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
              <Card.Body>
                <h1>Api Data</h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {
          Object.entries(this.state.data).map((data: [string, unknown], index) => {
            const [key, src] = data;
            return Api.accordion(key, src, index);
          })
        }
      </Container>
    );
  }

  private static accordion = (key: string, src: unknown, index: number): JSX.Element => {
    const { icon, color } = appIcons.download;
    //  xs={size} sm={size} md={size} lg={size} xl={size}> const size = { span: 4, offset: 4 };
    return (
      <Accordion key={v4()}>
        <Card>
          <Card.Header>
            <Row>
              <Col xs={11} sm={11} md={11} lg={11} xl={11}>
                <Accordion.Toggle as={Button} eventKey={index.toString()}>
                  {humaniseString(key)}
                </Accordion.Toggle>
              </Col>
              <Col className="mr-auto">
                <Button onClick={(): void => Api.downloadData(key, src)}>
                  <FontAwesomeIcon icon={icon} style={{ color }} />
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Accordion.Collapse eventKey={index.toString()}>
            <Card.Body>
              <ReactJson
                src={src as any}
                collapseStringsAfterLength={100}
                enableClipboard={true}
                name={key}
                indentWidth={2}
                groupArraysAfterLength={10}
                sortKeys={true}
                displayDataTypes={false}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  };

  private static downloadData = (key: string, data: any): void => {
    const fileName = `${key}.${key === "mapFeatures" ? "geojson" : "json"}`;
    const contentType = "application/json;charset=utf-8;";
    const tag = document.createElement("a");
    tag.download = fileName;
    tag.href = `data:${contentType},${encodeURIComponent(JSON.stringify(data))}`;
    tag.target = "_blank";
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  };
}
