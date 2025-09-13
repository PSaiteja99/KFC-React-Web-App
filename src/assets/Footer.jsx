import React, { Component } from "react";
import "./styles.css";

class Footer extends Component
 {
  render() {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="//images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg?h=120&amp;w=120&amp;fm=webp&amp;fit=fill" alt="KFC Logo"  />
           </div>

          <div className="footer-links">
            <div>
              <h4>KFC India</h4>
              <ul>
                <li>
                  <a href="https://online.kfc.co.in/about-kfc">About KFC
                    </a>
                  </li>
                <li>
                  <a href="https://online.kfc.co.in/about-kfc/kfc-care">KFC Care
                    </a>
                  </li>
                <li>
                  <a href="https://online.kfc.co.in/about-kfc/careers">Careers
                    </a>
                  </li>
                <li>
                  <a href="https://online.kfc.co.in/about-kfc/our-golden-past">Our Golden Past
                    </a>
                  </li>
              </ul>
            </div>
             <div>
               <h4>Legal</h4>
              <ul>
             <li>
              <a href="https://online.kfc.co.in/terms-and-conditions">Terms and Conditions</a>
            </li>
           <li>
           <a href="https://online.kfc.co.in/privacyPolicy">Privacy Policy</a>
           </li>
           <li>
           <a href="https://online.kfc.co.in/about-kfc/disclaimer">Disclaimer</a>
             </li>
           </ul>
           </div>


            <div>
              <h4>KFC Food</h4>
              <ul>
              <li>
                <a href="https://online.kfc.co.in/menu">Menu</a>
                </li>
              <li>
              <a href="https://online.kfc.co.in/about-kfc/nutrition">Nutrition</a>
             </li>
             <li>
             <a href="https://online.kfc.co.in/giftcards">Gift Card</a>
             </li>
            </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li>
    <a href="https://online.kfc.co.in/help">Get Help</a>
  </li>
  <li>
    <a href="https://online.kfc.co.in/contactus">Contact Us</a>
  </li>
  <li>
    <a href="https://feedback.kfcindia.co.in/">KFC Feedback</a>
  </li>
              </ul>
              </div>
              <div>
                
                <ul>
                  <li>
                    <a href="https://play.google.com/store/apps/details?id=com.yum.kfc">
              <img loading="lazy" src="//images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg?h=90&amp;w=266&amp;fm=webp&amp;fit=fill" alt="Google Play" class=""></img>
              </a>
              <li>
                <a href="https://apps.apple.com/in/app/kfc-india-online-ordering-app/id915824379">
                <img loading="lazy" src="//images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg?h=90&amp;w=266&amp;fm=webp&amp;fit=fill" alt="Apple Store" class=""></img>
                </a>
              </li>
              </li>
              </ul>
            </div>
          </div>
        </div>


        <div
  style={{
    display: 'flex',          
    justifyContent: 'center',
    padding: '16px 0'
  }}
>
  <ul
    style={{
      listStyle: 'none',
      margin: 0,
      padding: 0
    }}
  >
    <li
      style={{
        display: 'flex',       // lays icons out in a row
        gap: '12px'            // space between icons
      }}
    >
      <a
        href="https://www.instagram.com/kfcindia_official/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          loading="lazy"
          src="//images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg?h=60&w=60&fm=webp&fit=fill"
          alt="Instagram"
          style={{ width: 32, height: 32 }}
        />
      </a>

      <a
        href="https://www.facebook.com/KFCIndia"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img
        loading="lazy"
        src="//images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg?h=60&w=60&fm=webp&fit=fill"
        alt="Facebook"
        style={{ width: 32, height: 32 }}
      />
      </a>

      <a
        href="https://x.com/KFC_India"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img
        loading="lazy"
        src="//images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg?h=60&w=60&fm=webp&fit=fill"
        alt="Twitter"
        style={{ width: 32, height: 32 }}
      />
      </a>
    </li>
  </ul>
</div>
     <div className="footer-bottom">
    <p
  className="copyright-text"
  title={new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
>
  Copyright © KFC Corporation {new Date().getFullYear()} All rights reserved build pwa 2504 0 8_a048cfe0
</p>
        </div>
        
      </footer>
    );
  }
}

export default Footer;