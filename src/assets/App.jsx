import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import OrderStrip from "./OrderStrip";
import MainBanner from "./MainBanner";
import MenuCategories from "./MenuCategories";
import CardApp from "./CardApp";
import Footer from "./Footer";
import data from "./data";
import "./styles.css";

class App extends Component {
  scrollLeft = () => {
    document.getElementById("slider").scrollBy({ left: -300, behavior: "smooth" });
  };

  scrollRight = () => {
    document.getElementById("slider").scrollBy({ left: 300, behavior: "smooth" });
  };

  render() {
    return (
      <div className="app-container">
        <div className="sticky-wrapper">
          <Header />
          <Navbar />
        </div>

        <OrderStrip />
        <MainBanner />
        <MenuCategories />

        <section className="offers-section">
          <h2 className="offers-heading">Save More As You Order</h2>
          <div className="offer-slider-container">
            <button className="arrow left" onClick={this.scrollLeft}>&#10094;</button>

            <div className="offer-slider" id="slider" >
              {data.map((item, index) => (
                <CardApp
                  key={index}
                  cardimg={item.cardimg}
                  cardtitle={item.cardtitle}
                  cardtext={item.cardtext}
                  cardu={item.cardu}
                  cardbutton={item.cardbutton}
                />
              ))}
            </div>

            <button className="arrow right" onClick={this.scrollRight}>&#10095;</button>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default App;