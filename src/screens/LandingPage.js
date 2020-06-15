import React from "react";
import { Row, Col } from "react-bootstrap";
import { ProfileCardContainer } from "../components";
import { MessagesContainer } from "../components/messageComponent/index";
import { NewPostContainer } from "../components/newpost";
import { Header } from "../components/page_header/header";

export const LandingPageContainer = () => (
  <>
    <Header />
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
