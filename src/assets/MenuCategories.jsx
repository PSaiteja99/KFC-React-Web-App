import React, { Component } from "react";
import "./styles.css";

class MenuCategories extends Component {
  render() {
    return (
      <div className="menu-section">
        <h2 className="menu-heading">BROWSE MENU CATEGORIES</h2>

        {/* Section 1: Left Large Offer + Right 4 Small Items */}
        <div className="menu-grid">
          {/* Left Big Card */}
          <div className="large-card menu-card">
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/3FKqwvgXKVq5yEhGjNpVyV/d2ea446076c8aa56fc3caaa7ab2c3e8e/KFC-BOGO-Gold-Burger-Category-23MAY_3.jpg?fm=webp&fit=fill"
              alt="Gold Offer"
            />
            <p>GOLD: BUY 1 GET 1</p>
          </div>

          {/* Right Grid of 4 Items */}
          <div className="menu-right">
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/3NdeHBtjjYPHMAoOTpEZ0w/d6c6fadd15bcfa8f6bc969aa02207f0c/KFC-Burger.jpg?fm=webp&fit=fill"
                alt="Zinger"
              />
              <p>ZINGER: BUY 1 GET 1</p>
            </div>
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/wAKmOMcpTm0yfspLrl20B/a49799960b22ba96b733f54971d96825/KFC-category-EPIC-Bucket-1_All-in-one-bucket-delivery_-28th-JAN_1.jpg?fm=webp&fit=fill"
                alt="Epic Bucket"
              />
              <p>EPIC BUCKET OF THE DAY</p>
            </div>
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/3FKqwvgXKVq5yEhGjNpVyV/d2ea446076c8aa56fc3caaa7ab2c3e8e/KFC-BOGO-Gold-Burger-Category-23MAY_3.jpg?fm=webp&fit=fill"
                alt="Gold Edition"
              />
              <p>GOLD EDITION</p>
            </div>
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/5iYMlSgO8gr09Rjbn185qs/8f330ee5eb94ba4eff4f4552e361218d/KFC-Variety-Bucket.jpg?fm=webp&fit=fill"
                alt="Variety Buckets"
              />
              <p>VARIETY BUCKETS</p>
            </div>
          </div>
        </div>

        {/* Section 2: 8 Items in 2x4 Grid */}
        <div className="menu-grid-2">
          {/* Left 4 */}
          <div className="menu-left">
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/5iYMlSgO8gr09Rjbn185qs/8f330ee5eb94ba4eff4f4552e361218d/KFC-Variety-Bucket.jpg?fm=webp&fit=fill"
                alt="Variety Buckets"
              />
              <p>VARIETY BUCKETS</p>
            </div>
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/3NdeHBtjjYPHMAoOTpEZ0w/d6c6fadd15bcfa8f6bc969aa02207f0c/KFC-Burger.jpg?fm=webp&fit=fill"
                alt="Chicken Buckets"
              />
              <p>CHICKEN BUCKETS</p>
            </div>
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/3NdeHBtjjYPHMAoOTpEZ0w/d6c6fadd15bcfa8f6bc969aa02207f0c/KFC-Burger.jpg?fm=webp&fit=fill"
                alt="Burgers"
              />
              <p>BURGERS</p>
            </div>
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/5VQAImh8fghx8cYtmjRBxu/050c6b65545546ecca314321a5dddc15/CAT89?fm=webp&fit=fill"
                alt="Snacks"
              />
              <p>SNACKS</p>
            </div>
          </div>

          <div className="menu-right">
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/5VQAImh8fghx8cYtmjRBxu/050c6b65545546ecca314321a5dddc15/CAT89?fm=webp&fit=fill"
                alt="Value Lunch"
              />
              <p>VALUE LUNCH SPECIALS</p>
            </div>
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/5iYMlSgO8gr09Rjbn185qs/8f330ee5eb94ba4eff4f4552e361218d/KFC-Variety-Bucket.jpg?fm=webp&fit=fill"
                alt="Rice Bowlz"
              />
              <p>RICE BOWLZ</p>
            </div>
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/1cS5c1DDcmYuwT0g2edC3f/48712d8b753b8cb6c6abd662398fec70/KFC-Beverages.jpg?fm=webp&fit=fill"
                alt="Beverages"
              />
              <p>BEVERAGE & DESSERTS</p>
            </div>
            <div className="menu-card">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/169o6qKazOgakFLMKkHUGY/d9d657af816a140bdaf3f5a7d64e3ef7/KFC-Veg.jpg?fm=webp&fit=fill"
                alt="Veg"
              />
              <p>VEG</p>
            </div>
          </div>
        </div>

        {/* Finger Lickin Banner */}
        <div className="finger-lickin-banner">
          <img
            src="https://online.kfc.co.in/static/media/Finger_lickInMob.fc23e8b1.svg"
            alt="Finger Lickin Good"
            className="finger-lickin-img"
          />
        </div>
      </div>
    );
  }
}

export default MenuCategories;