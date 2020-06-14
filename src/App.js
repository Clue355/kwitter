import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Navigation } from "./components";
import configureStore from "./redux/configureStore";
import api from "./utils/api";

const { store, persistor } = configureStore();

const KWITTER = {
  store,
  persistor,
  api,
};

window.KWITTER = KWITTER;

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);
