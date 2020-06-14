import React, { useEffect } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
//import { getMessages } from "../../redux/actions/messageAction";
import { Card, Button, Form } from "react-bootstrap";

// handlePost = (event) => {
//   if ((event.key === "Enter") & (event.target.value !== null)) {
//     this.props.postMessage(this.state.text, this.props.token);
//     event.target.value = null;
//     this.setState({ text: "", open: false });
//   }
// };

// handleChange = (event) => {
//   this.setState({ text: event.target.value });
// };

export const MessagesFeed = ({
  toggleMessageLike,
  messages,
  getMessages,
  loading,
  error,
}) => {
  // Not to be confused with "this.setState" in classes
  useEffect(() => {
    getMessages();
  }, []);
  return (
    <React.Fragment>
      <Card fluid>
        {/* <TextArea
          autoFocus="true"
          onChange={this.handleChange}
          onKeyPress={this.handlePost}
          placeholder="New Kweet"
        /> */}
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>New Post</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="outline-primary">Create Post</Button>{" "}
      </Card>
      <div claseName="messageContainer">
        {messages.map((message) => {
          return (
            <div key={message.id} className="message">
              <p className="messsageText">{message.text}</p>
              <Button
                variant="outline-primary"
                onClick={() => {
                  toggleMessageLike(message.id);
                }}
                className="button"
              >
                <p className="buttonText">
                  {message.isLiked ? "unlike" : "like"}
                </p>
              </Button>
            </div>
          );
        })}
      </div>
      {loading && <Loader />}
    </React.Fragment>
  );
};

MessagesFeed.propTypes = {
  getMessages: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
