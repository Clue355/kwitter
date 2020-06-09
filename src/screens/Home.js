import React from "react";
import { LoginFormContainer, MenuContainer, RegistrationFormContainer } from "../components";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    <RegistrationFormContainer />
  </>
);
