import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { PlayableCharacter } from "../../@types/PlayableCharacters/PlayableCharacter";

import { campaignCharacters } from "../../Utilities/PlayerCharacters/characterData";

import { DisplayPC } from "./DisplayPC";

export const DisplayCharacters: React.FC = () => {
  const [characters] = useState<PlayableCharacter[]>(campaignCharacters);
  return (
    <Container className="page-padding-top">
      <Row>
        <Col className="text-center align-items-center" xs={12} sm={12} md={12} lg={12} xl={12}>
          { characters.length > 0 ? characters.map(c => DisplayPC(c)) : <div>Loading...</div> }
        </Col>
      </Row>
    </Container>
  );
};