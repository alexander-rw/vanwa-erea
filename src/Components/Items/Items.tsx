import React from "react";

import {
  Row,
  Col,
  Card,
  Container,
  Accordion,
  Button,
} from "react-bootstrap";

import { v4 } from "uuid";

import { WorldData } from "../../@data/worldData";
import { MagicItem } from "../../@types/Items/MagicItem";

export const Items: React.FC = () => (
  <Container className="page-padding-top">
    <Row>
      <Col className="text-center align-items-center" xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card>
          <Card.Body>
            <h1>Items</h1>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {
      WorldData.items.map((item: MagicItem, index: number) => (
        <Accordion key={v4()}>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} eventKey={index.toString()}>
                {item.id}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>
                <h5 style={{ borderBottom: "2px solid #822000", marginBottom: "1em" }}>{`${item.rarity}${item.requiresAttunement === "" ? "" : `, ${item.requiresAttunement}`}`.trim()}</h5>
                { item.description.map(i => <p key={v4()}>{i}</p>) }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))
    }
  </Container>
);
