import React from "react";

import {
  Container,
  Card,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
} from "react-bootstrap";

import { v4 } from "uuid";

import { obelisks } from "../../@data/obelisks";

import {
  vignere,
} from "../../Utilities/Crypto";

const PlayfairMapper: React.FC<{ text: string; extra: string; className?: string }> = ({ text, className, extra }) => {
  const id = v4();
  return (
    <Card>
      <OverlayTrigger
        key={id}
        trigger="click"
        placement="auto"
        overlay={
          <Tooltip id={`tooltip-${id}`}>{text}</Tooltip>
        }
      >
        <Row>
          <Col xs={12} sm={12} md={2} lg={2}>{ extra }</Col>
          <Col xs={12} sm={12} md={10} lg={10} className={className}>{ vignere(text) }</Col>
        </Row>
      </OverlayTrigger>
    </Card>
  );
};

export const Fonts: React.FC = () => {
  return (
    <Container className="page-padding-top" key={v4()}>
      { obelisks.map(x => <PlayfairMapper text={x.text} extra={x.extraInfo} className="Alphmagi larger" />) }
    </Container>
  );
};
