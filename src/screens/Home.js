import React from "react";
import { Row, Col } from "react-bootstrap";
import { LoginFormContainer } from "../components";
import { RegistrationContainer } from "../components/registration-form";
import { Header } from "../components/page_header/header";

export const HomeScreen = () => (
  <>
    <Header />
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
