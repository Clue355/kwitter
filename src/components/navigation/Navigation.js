import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
<<<<<<< HEAD
import { Container } from "react-bootstrap";
import { MenuContainer } from "../menu";
=======
>>>>>>> b41ade0b09ca495dc75d301a7641021618584275
import {
  HomeScreen,
  ProfileScreen,
  NotFoundScreen,
<<<<<<< HEAD
  ProfilePageScreen,
=======
  MessagesScreen,
>>>>>>> b41ade0b09ca495dc75d301a7641021618584275
} from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";

export const Navigation = () => (
  <BrowserRouter>
<<<<<<< HEAD
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

        <ConnectedRoute path="*" component={NotFoundScreen} />
      </Switch>
    </Container>
=======
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
        path="/messagefeed"
        component={MessagesScreen}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
>>>>>>> b41ade0b09ca495dc75d301a7641021618584275
  </BrowserRouter>
);
