import React from "react";
import { ProfileCardContainer, ProfilePageContainer } from "../components";
import { Jumbotron } from "react-bootstrap";

export const ProfileScreen = () => (
  <>
    <Jumbotron fluid>
      <h1>Everything Alien</h1>
    </Jumbotron>
    <h1>Testing2</h1>
    <h2>Profile</h2>
    <ProfileCardContainer />
    <ProfilePageContainer />
  </>
);
