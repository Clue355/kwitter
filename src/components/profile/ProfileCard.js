import React from "react";
import "./ProfileCard.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

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
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};
