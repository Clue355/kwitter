import React from "react";
import ProptTypes from "prop-types";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = ({ isAuthenticated, logout }) => {
  return (
    <Navbar bg="navbar" variant="dark">
      <Navbar.Brand href="/">Everything Alien</Navbar.Brand>
      {isAuthenticated && (
        <Nav className="mr-auto">
          <Link className="logout links" to="/home" href="/home">
            Home
          </Link>
          <div className="linespace">|</div>
          <Link className="logout links" to="/profile" href="/profile">
            Profile
          </Link>
          <div className="linespace">|</div>
          <Link className="logout links" to="/messagefeed" href="/messagefeed">
            Message Feed
          </Link>
          <div className="linespace">|</div>
          <Link className="logout links" to="/" onClick={logout}>
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
