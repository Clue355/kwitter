import React from "react";
import { Header } from "../components/page_header/header";
import { MessagesContainer } from "../components/messageComponent/index";
import { NewPostContainer } from "../components/newpost";

export const MessagesScreen = () => (
  <>
    <Header />
    <NewPostContainer />
    <MessagesContainer />
  </>
);
