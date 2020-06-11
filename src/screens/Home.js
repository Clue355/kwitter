import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import { RegistrationContainer } from "../components/registration-form";


export const HomeScreen = () => (
  <>
 
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    <RegistrationContainer />
  
  </>
);
