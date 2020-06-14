import React from "react";
import { Jumbotron } from "react-bootstrap";
import { ProfileCardContainer } from "../components";

export const LandingPageContainer = () => (
  <>
    <Jumbotron className="jumbotron" fluid>
      <h1>Everything Alien</h1>
    </Jumbotron>
    <h1>Testing</h1>
    <h2>Profile</h2>
    <ProfileCardContainer />
  </>
);
