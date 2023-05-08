import React from "react";
import "../styles/Landingpage.css";
import picture from "../assets/illustration-hero.svg";
import music from "../assets/icon-music.svg";

const Landingpage = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-section">
          <div className="hero-img">
            <img src={picture} alt="" />
          </div>
          <div className="hero-content p-3">
            <h2>Order Summary</h2>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like
            </p>
          </div>
        <div className="hero-plan">
          <div>
            <img src={music} alt="" />
          </div>
          <div>
            <h3>Annual Plan</h3>
            <h3 className="hero-plan2">$59.99/year</h3>
          </div>
          <div>
            <a href="">Change</a>
          </div>
        </div>
            <button className="btn">Proceed to Payment</button>
          
          <div className="hero-order">
            <p>Cancel Order</p>
          </div>
        </div>
          
      </div>
    </section>
  );
};

export default Landingpage;
