import React, { Component } from "react";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <div className="top-strip">
        <div className="top-strip-text">📍 Allow location access for local store menu and promos</div>
        <button className="top-strip-button">Set Location</button>
      </div>
    );
  }
}

export default Header;