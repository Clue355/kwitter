import { connect } from "react-redux";
import { profile } from "../../redux/actions/auth";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  username: state.auth.username
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  profile,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);