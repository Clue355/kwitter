import React from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";
import { ProfileCardContainer } from "../components";
import { MessagesContainer } from "../components/messageComponent/index";
import { NewPostContainer } from "../components/newpost";

export const LandingPageContainer = () => (
  <>
    <Jumbotron className="jumbotron" fluid>
      <h1>Everything Alien</h1>
    </Jumbotron>
    <Row>
      <Col>
        <ProfileCardContainer />
      </Col>
      <Col>
        <NewPostContainer />
        <MessagesContainer />
      </Col>
    </Row>
  </>
);
