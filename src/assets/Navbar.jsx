import React, { Component } from "react";
import "./styles.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="KFC Logo" className="kfc-logo" />
          <div className="nav-links">
            <span className="nav-item">Menu</span>
            <span className="nav-item">Deals</span>
          </div>
        </div>

        <div className="navbar-right">
          <button className="signin-btn">
            <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt="Sign in" className="signin-icon" />
            <span>Sign In</span>
          </button>

          <div className="divider" />

          <button className="cart-btn">
            <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="Cart" className="cart-icon" />
            <span className="cart-count">0</span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;