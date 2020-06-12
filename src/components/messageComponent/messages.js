import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
// import { getMessages } from "../../redux/actions/messageAction";

export const MessagesFeed = ({ messages, getMessages, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    feed: [],
  });

  return (
    <React.Fragment>
      <div className="messageFeed">
        {messages.map((message) => {
          return <p>{message.text}</p>;
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
