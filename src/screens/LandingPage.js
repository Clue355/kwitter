import React from "react";
import { Jumbotron } from "react-bootstrap";
import { ProfileCardContainer } from "../components";
import { MessagesContainer } from "../components/messageComponent/index";

export const LandingPageContainer = () => (
  <>
    <Jumbotron className="jumbotron" fluid>
      <h1>Everything Alien</h1>
    </Jumbotron>
    <ProfileCardContainer />
    <MessagesContainer />
  </>
);
