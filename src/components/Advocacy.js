// src/components/Advocacy.js
import React from "react";
import "../styles/comingSoon.css";

const AdvocacyInfo = () => (
  <section id="advocacy">
    <div className="advocacy-content">
      <h2 className="title1">Advocacy</h2>

      <div className="advocacy-block">
        <h3></h3>
        <p></p>
      </div>
      <div className="advocacy-block">
        <h3></h3>
        <p></p>
      </div>
      <div className="advocacy-block">
        <h3></h3>
        <p></p>
      </div>
      <div className="advocacy-block">
        <h3></h3>
        <p></p>
      </div>
    </div>
  </section>
);

const AdvocacySlide = () => (
  <section id="advocacy">
    <div className="advocacy-content">
      <h2 className="title2">Our Initiatives</h2>
    </div>
  </section>


);

const Advocacy = () => {
  <div>
    <AdvocacyInfo/>
    <AdvocacySlide/>
  </div>
}

export default Advocacy;
