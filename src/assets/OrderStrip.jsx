import React, { Component } from "react";
import "./styles.css";

class OrderStrip extends Component {
  render() {
    return (<>
      <div className="order-strip">
        <div className="order-center-content">
          <span className="order-text">
            LET’S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
          </span>
          <button className="order-button">Start Order</button>
        </div>
      </div>
      </>
    );
  }
}

export default OrderStrip;