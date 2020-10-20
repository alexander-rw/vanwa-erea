import React from "react";
import {
  Container, Col, Row, Card,
} from "react-bootstrap";

const NoMatch: React.FC = () => (
  <Container>
    <Row>
      <Col className="text-center align-items-center" xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card>
          <Card.Body>
            <h1>Route missing.</h1>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export { NoMatch };
