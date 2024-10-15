// src/components/MentalHealth.js
import React from "react";
import "../styles/mentalhealth.css";

  
const MentalResource = () => (
  <section id="mental-health" className="mental-health-section">
    <div className="mental-health-content">
      <h2 className="mental-health-title">Mental Health</h2>

      <h3>Emergency Contacts</h3>
        <ul className="mental-health-contacts">
          <li><span>911</span></li>
          <li>Campus Safety: <span>416-978-2222</span></li>
        </ul>

      <h3>Resources</h3>
      <div className="resource-container">
            <div className="on-campus-resource">
              <h3>On Campus</h3>
                <ul>
                  <li>On Campus Resource 1</li>
                  <li>On Campus Resource 2</li>
                  <li>On Campus Resource 3</li>
                </ul>
            </div>
            <div className="external-resource">
              <h3>External</h3>
              <ul>
                <li>External Resource 1</li>
                <li>External Resource 2</li>
                <li>External Resource 3</li>
              </ul>
            </div>
      </div>
    </div>
  </section>
  );

const MentalHealthTips = () => (
  <section id="mental-health" className="mental-health-section">
    <div className="mental-health-content">
      <h2 className="selfcare-title">Self Care Tips</h2>
      <div className="slide-deck">

      </div>

      <a href="" className="feedback-button">
          Mental Health Feedback
      </a>
    </div>
  </section>
);

const MentalHealth = () => (
  <div>
    <MentalResource />
    <MentalHealthTips />
  </div>
);

export default MentalHealth;