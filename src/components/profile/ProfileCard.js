import React from "react";
import "./ProfileCard.css";
import { Card } from "react-bootstrap";

export const ProfileCard = (props) => {
  console.log(props);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {props.user.pictureLocation && (
          <Card.Img
            variant="top"
            src={`https://kwitter-api.herokuapp.com${props.user.pictureLocation}`}
          />
        )}

        <Card.Body>
          <Card.Title>Hi {props.user.username}</Card.Title>
          <Card.Text>{props.user.about}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
