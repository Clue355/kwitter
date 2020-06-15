import React from "react";
import ProptTypes from "prop-types";
import { Nav, Navbar } from "react-bootstrap";
//import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = ({ isAuthenticated, logout }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Everything Alien</Navbar.Brand>
      {isAuthenticated && (
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/messagefeed">Message Feed</Nav.Link>
          <Nav.Link exact href="/" onClick={logout}>
            Logout
          </Nav.Link>
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
