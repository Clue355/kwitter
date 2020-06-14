import React, { useEffect } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
//import { getMessages } from "../../redux/actions/messageAction";

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
      <div>
        {messages.map((message) => {
          return (
            <p key={message.id}>
              {message.text}
              <button
                onClick={() => {
                  toggleMessageLike(message.id);
                }}
              >
                {message.isLiked ? "dislike" : "like"}
              </button>
            </p>
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
