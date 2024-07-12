// src/components/PrayerAreas.js
import React from "react";
import "../styles/prayerareas.css";

const PrayerAreas = () => (
  <section id="prayer-areas-page">
    <h2 className="event-title">Prayer Areas</h2>
    <p className="event-description">
      Here is a video demonstrating how to get to praying areas on campus.
    </p>
    <div className="calendar-container">
      <iframe
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/I32Id_tQ4mM?si=I7LtwqW0sSlG7Sav"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>
);

export default PrayerAreas;
