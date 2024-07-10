import React from "react";
import "../styles/welcome.css";
import bismillah from "../images/bismillah2.png"; // Adjust path as needed

const WelcomeSection = () => (
  <section id="welcome">
    <div className="welcome-text">
      <img
        className="calligraphy-image"
        src={bismillah}
        alt="Bismillah Image"
      />
      <p className="p3">Muslim Students' Association</p>
      <p className="p2">University of Toronto Scarborough</p>
    </div>
  </section>
);

export default WelcomeSection;
