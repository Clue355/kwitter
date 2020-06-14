import React, { useState } from "react";
import ProptTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import { Loader } from "../loader";
import "./LoginForm.css";

export const LoginForm = ({ login, loading, error }) => {
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    login(state);
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
      <h1>Welcome Back</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            id="formLoginEmail"
            placeholder="Enter username"
            type="text"
            name="username"
            value={state.username}
            autoFocus
            required
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="formLoginPassword"
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
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};

LoginForm.propTypes = {
  login: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
