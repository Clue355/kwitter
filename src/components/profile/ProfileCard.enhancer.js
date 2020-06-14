import { connect } from "react-redux";
import { profile, uploadPhoto, updateUser } from "../../redux/actions/auth";

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  profile,
  uploadPhoto,
  updateUser,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
