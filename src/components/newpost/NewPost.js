import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Card, Button, Form } from "react-bootstrap";
//import "./NewPost.css";

export const NewPost = ({ newPost, about }) => {
  const [state, setState] = useState("");
  const handleNewPost = (event) => {
    event.preventDefault();
    newPost(state);
    setState("");
  };

  const handleTextChange = (event) => {
    setState(event.target.value);
  };

  return (
    <React.Fragment>
      <Card bg="dark" variant="dark">
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          className="newpost"
        >
          <Form.Label className="newpost">
            <h2>New Post</h2>
          </Form.Label>
          <Form.Control
            value={state}
            onChange={handleTextChange}
            className="newpost"
            as="textarea"
            rows="3"
          >
            Text Goes Here
          </Form.Control>
        </Form.Group>
        <Button onClick={handleNewPost} variant="outline-success">
          Create Post
        </Button>{" "}
      </Card>
    </React.Fragment>
  );
};
NewPost.propTypes = {
  newPost: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
