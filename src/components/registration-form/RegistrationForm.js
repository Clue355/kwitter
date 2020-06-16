import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import { Loader } from "../loader";
import "./RegistrationForm.css";

export const RegistrationForm = ({ register, login, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    displayName: "",
    username: "",
    password: "",
  });

  const [registerError, setRegisterError] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      setRegisterError("");
      await register(state);
      await login(state);
    } catch {
      setRegisterError("Username must be Unique");
    }
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1>New to Kwitter? Sign up here:</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            id="formRegisterDisplaName"
            placeholder="Enter your display name"
            type="text"
            name="displayName"
            value={state.displayName}
            required
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            What should others call you?.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            id="formRegisterUsername"
            placeholder="Enter your username"
            type="text"
            name="username"
            value={state.username}
            required
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            This must be unique between accounts.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="formRegisterPassword"
            type="password"
            placeholder="Password"
            name="password"
            value={state.password}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          Submit
        </Button>
      </Form>
      {registerError && <p style={{ color: "red" }}>{registerError}</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};

RegistrationForm.propTypes = {
  register: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
