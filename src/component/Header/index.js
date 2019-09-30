import React, { Component } from "react";
import Logo from "../../assets/logo.png";
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <img src={Logo} alt="logo" />
        <h3>Gestão à Vista</h3>
        <div>
          <span></span>
        </div>
      </div>
    );
  }
}
