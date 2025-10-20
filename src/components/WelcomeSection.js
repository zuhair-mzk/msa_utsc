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
      <p className="p3"> University of Toronto Scarborough</p>
      <p className="p3"> Muslim Student Association</p>
    </div>
  </section>
);

export default WelcomeSection;
