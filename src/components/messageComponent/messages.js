import React, { useEffect } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import "./message.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
// import { getMessages } from "../../redux/actions/messageAction";

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
      {loading && <Loader />}
    </React.Fragment>
  );
};

MessagesFeed.propTypes = {
  getMessages: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
