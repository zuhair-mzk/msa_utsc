// src/components/MentalHealth.js
import React from "react";
import "../styles/mentalhealth.css";

// const MentalHealth = () => (
//   <section id="coming-soon">
//     <div className="coming-soon-content">
//       <h2 className="coming-soon-title">Mental Health</h2>
//       <p className="coming-soon-description">
//         This page is coming soon. Stay tuned!
//       </p>
//     </div>
//   </section>
// );
                 
const MentalHealth = () => (
  <section id="mental-health" className="mental-health-section">
    <div className="mental-health-content">
      <h2 className="mental-health-title">Mental Health</h2>

      <h3>Emergency Contacts</h3>
        <ul className="mental-health-description">
          <li>Item</li>
        </ul>

      <h3>Resources</h3>
        <ul className="mental-health-description">
          <li>Item</li>
        </ul>


      <h3>Islamic Self Care Tips</h3>
        <ul className="mental-health-description">
          <li>Item</li>
        </ul>

      <button className="feedback-button">
            Mental Health Feedback
      </button>

    </div>
  </section>
  );

export default MentalHealth;