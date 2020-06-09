import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Loader } from "../loader";
import "./RegistrationForm.css";

export const RegistrationForm = ({ register, login, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    displayName: "",
    username: "",
    password: "",
  });

  const handleRegister = async (event) => {
    event.preventDefault();
    await register(state);
    //await login(state); //Figure out why this doesnt work*
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <h1>New to Kwitter? Sign up here:</h1>
      <form id="registration-form" onSubmit={handleRegister}>
        <label htmlFor="displayName">Display name</label>
        <input
          type="text"
          name="displayName"
          value={state.displayName}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          Register
        </button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};

RegistrationForm.propTypes = {
  login: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
