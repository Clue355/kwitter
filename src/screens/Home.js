import React from "react";
import { Row, Jumbotron, Col } from "react-bootstrap";
import { LoginFormContainer } from "../components";
import { RegistrationContainer } from "../components/registration-form";

export const HomeScreen = () => (
  <>
    <Jumbotron fluid>
      <h1>Everything Alien</h1>
    </Jumbotron>
    <Row>
      <Col>
        <LoginFormContainer />
      </Col>
      <Col>
        <RegistrationContainer />
      </Col>
    </Row>
  </>
);

// Your favorite microblogging platform
