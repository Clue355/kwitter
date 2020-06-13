import React from "react";
import "./ProfileCard.css";

export const ProfileCard = (props) => {
  console.log(props);
  return (
    <container>
      <h1>Hi! {props.user.username} </h1>
      <h2>{props.user.about}</h2>
    </container>
  );
};
