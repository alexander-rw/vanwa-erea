import React, { ChangeEvent } from "react";

import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

import { BaseComponent } from "../BaseComponents/BaseComponent";

export class ShipCalc extends BaseComponent<unknown, { profit: number }> {
  private calculateProfit(): number {
    return (this.#cargoLimitLbs
      * this.#cargoFraction
      * this.#gammaValue
      * (this.#deltaValueBase + this.#deltaValueDifference))
      // cost to run per day
      - 1960;
  }

  private updateProfit(): void {
    this.setState({ profit: this.calculateProfit() });
  }

  #cargoLimitLbs: number;

  #cargoFraction: number;

  #gammaValue: number;

  #deltaValueDifference: number;

  #deltaValueBase: number;

  constructor(props, state) {
    super(props, state);
    this.#cargoLimitLbs = 400000;
    this.#cargoFraction = 0.25;
    this.#gammaValue = 0.1;
    this.#deltaValueBase = 0.1;
    this.#deltaValueDifference = 0;

    this.state = {
      profit: this.calculateProfit(),
    };
  }

  render(): JSX.Element {
    return (
      <Container className="page-padding-top">
        <Row>
          <Col className="text-center align-items-center" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
              <Card.Body>
                <h1>Ship Calculator</h1>
                <h2>{`Profit per month: ${this.state.profit}`}</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card>
          <Card.Body>
            <Row>
              <Col className="align-items-center" xs={12} sm={12} md={6} lg={6} xl={6}>
                <h3>Cargo limit:</h3>
              </Col>
              <Col className="align-items-center" xs={12} sm={12} md={6} lg={6} xl={6}>
                <h3>{`${this.#cargoLimitLbs} lbs.`}</h3>
              </Col>
              <Col className="align-items-center" xs={12} sm={12} md={6} lg={6} xl={6}>
                <h3>Cargo fraction:</h3>
              </Col>
              <Col className="align-items-center" xs={12} sm={12} md={4} lg={4} xl={4}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.#cargoFraction.toString()}
                  onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                    if (e.target?.value) {
                      let val = parseFloat(e.target.value);
                      val = (val < 0 ? 0 : val);
                      val = (val > 1 ? 1 : val);

                      this.#cargoFraction = val;
                      this.updateProfit();
                    }
                  }}
                />
              </Col>
              <Col className="align-items-center" xs={12} sm={12} md={6} lg={6} xl={6}>
                <h3>Gamma value:</h3>
              </Col>
              <Col className="align-items-center" xs={12} sm={12} md={4} lg={4} xl={4}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.#gammaValue.toString()}
                  onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                    if (e.target?.value) {
                      this.#gammaValue = parseFloat(e.target.value);
                      this.updateProfit();
                    }
                  }}
                />
              </Col>
              <Col className="align-items-center" xs={12} sm={12} md={6} lg={6} xl={6}>
                <h3>Delta value difference:</h3>
              </Col>
              <Col className="align-items-center" xs={12} sm={12} md={4} lg={4} xl={4}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.#deltaValueDifference.toString()}
                  onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                    if (e.target?.value) {
                      this.#deltaValueDifference = parseFloat(e.target.value);
                      this.updateProfit();
                    }
                  }}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
