import React from "react";
import ProptTypes from "prop-types";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = ({ isAuthenticated, logout }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Kwitter</Navbar.Brand>
      {isAuthenticated && (
        <Nav className="mr-auto">
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/messagefeed">Message Feed</Link>
          <Link to="/" onClick={logout}>
            Logout
          </Link>
        </Nav>
      )}
    </Navbar>
  );
};

Menu.defaultProps = {
  isAuthenticated: false,
  logout: () => {},
};

Menu.propTypes = {
  isAuthenticated: ProptTypes.bool.isRequired,
  logout: ProptTypes.func.isRequired,
};
