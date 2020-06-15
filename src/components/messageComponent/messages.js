import React, { useEffect } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import { Button } from "react-bootstrap";
import "./message.css";
import { Card } from "react-bootstrap";

export const MessagesFeed = ({
  toggleMessageLike,
  messages,
  getMessages,
  loading,
  error,
}) => {
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <React.Fragment>
<<<<<<< HEAD
      <div className="messageContainer">
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
                  {message.isLiked ? "liked" : "like"}
                </p>
              </Button>
            </div>
          );
        })}
      </div>
=======
      <Card fluid>
        <div className="messageContainer">
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
      </Card>
>>>>>>> newpost-feature
      {loading && <Loader />}
    </React.Fragment>
  );
};

MessagesFeed.propTypes = {
  getMessages: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
