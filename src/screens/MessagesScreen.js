import React from "react";
import { Jumbotron } from "react-bootstrap";
import { MessagesContainer } from "../components/messageComponent/index";

export const MessagesScreen = () => (
  <>
    <Jumbotron fluid>
      <h1>Everything Alien</h1>
    </Jumbotron>
    <MessagesContainer />
  </>
);
