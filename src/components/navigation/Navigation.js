import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { MenuContainer } from "../menu";
import {
  HomeScreen,
  ProfileScreen,
  NotFoundScreen,
  ProfilePageScreen,
  MessagesScreen,
} from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";

export const Navigation = () => (
  <BrowserRouter>
    <MenuContainer />
    <Container>
      <Switch>
        <ConnectedRoute
          exact
          path="/"
          redirectIfAuthenticated
          component={HomeScreen}
        />
        <ConnectedRoute
          exact
          isProtected
          path="/profiles/:username"
          component={ProfileScreen}
        />
        <ConnectedRoute
          exact
          isProtected
          path="/profile"
          component={ProfilePageScreen}
        />
        <ConnectedRoute
          exact
          isProtected
          path="/messagefeed"
          component={MessagesScreen}
        />

        <ConnectedRoute path="*" component={NotFoundScreen} />
      </Switch>
    </Container>
  </BrowserRouter>
);
