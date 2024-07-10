import React from "react";
import "../styles/sponsors.css";
import bboyz from "../images/bboyz.png"; // Adjust path as needed
import aryanmotors from "../images/aryanmotors.png"; // Adjust path as needed
import memon from "../images/memon.png"; // Adjust path as needed
import iitLogo from "../images/IIT_logo.png"; // Adjust path as needed

const SponsorsBanner = () => (
  <section className="sponsors-banner">
    <div className="container">
      <h2 className="event-title">Our Proud Sponsors</h2>
      <div className="sponsor-logos">
        <img src={bboyz} alt="BBoyz" className="sponsor-logo" />
        <img src={aryanmotors} alt="Aryaan Motors" className="sponsor-logo" />
        <img src={memon} alt="Memon SuperMarket" className="sponsor-logo" />
        <img src={iitLogo} alt="IIT Logo" className="sponsor-logo" />
      </div>
    </div>
  </section>
);

export default SponsorsBanner;
