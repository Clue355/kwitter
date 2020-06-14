import React from "react";
import { ProfilePageContainer } from "../components";
import { Jumbotron } from "react-bootstrap";

export const ProfileScreen = () => (
  <>
    <Jumbotron fluid>
      <h1>Everything Alien</h1>
    </Jumbotron>

    <ProfilePageContainer />
  </>
);
