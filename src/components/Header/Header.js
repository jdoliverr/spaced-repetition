import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "./Header.css";

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link className="user-name" to="/">
          {this.context.user.name}
        </Link>
        <nav>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__no-login">
        <Link to="/login">Login</Link> <Link to="/register">Sign up</Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="Header">
        <h1 className="app-name-head">
          Language repetition
          {/* <Link to="/">Spaced Repetition</Link> */}
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

export default Header;
