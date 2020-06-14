import { connect } from "react-redux";
import { newPost } from "../../redux/actions/newPost";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  newpost: state.newpost.text,
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  newPost,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
