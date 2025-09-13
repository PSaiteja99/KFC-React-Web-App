import React, { Component } from "react";
import "./styles.css";

class MainBanner extends Component {
  render() {
    return (<>
      <div className="main-banner">
        <img
          src="https://images.ctfassets.net/wtodlh47qxpt/1uSyjSRYgrbOyx0pEtwTlB/9bdfd02d6551342c114227e31053c949/KFC-CARRYMINATI-2880-X-1260-8April-F5A__1_.jpg"
          alt="CarryMinati Banner"
          className="banner-img"
        />
      </div>
      </>
    );
  }
}

export default MainBanner;