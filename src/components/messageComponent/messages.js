import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";

export const MessagesFeed = ({ loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [setState] = useState({
    feed: [],
  });

  return <React.Fragment>{loading && <Loader />}</React.Fragment>;
};

MessagesFeed.propTypes = {
  getMessages: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
