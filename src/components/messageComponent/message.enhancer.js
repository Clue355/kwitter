import { connect } from "react-redux";
import {
  getMessages,
  toggleMessageLike,
} from "../../redux/actions/messageAction";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  messages: state.messages.messages,
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  getMessages,
  toggleMessageLike,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
