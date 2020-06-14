import React, { useState } from "react";
import ProptTypes from "prop-types";

import { Card, Button, Form } from "react-bootstrap";
import "./NewPost.css";

export const NewPost = (newPost) => {
  const [state, setState] = useState({
    text: "",
  });

  const handleNewPost = (event, newPost) => {
    event.preventDefault();
    newPost(state);
  };

  const handlePostChange = (event) => {
    setState((prevState) => ({ ...prevState }));
  };

  return (
    <React.Fragment>
      <Card fluid>
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          className="newpost"
        >
          <Form.Label className="newpost">
            <h2>New Post</h2>
          </Form.Label>
          <Form.Control
            onChange={handlePostChange}
            className="newpost"
            as="textarea"
            rows="3"
          />
        </Form.Group>
        <Button onClick={handleNewPost} variant="outline-primary">
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
