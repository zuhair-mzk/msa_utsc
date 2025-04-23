// src/components/Announcements.js
import React from "react";
import "../styles/announcements.css";

const Announcements = () => (
  <section id="announcements-page">
    <h2 className="section-title">Announcements</h2>
    <p className="section-description">
      See a list of all recent announcements below:
    </p>
    <table className="announcements-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>11:59pm, Tue Apr 8th</td>
          <td>Anual General Meeting (Proposals Due)</td>
        </tr>
        <tr>
          <td>02:00pm, Wed Apr 9th</td>
          <td>Gratitude Jar Making</td>
        </tr>
        <tr>
          <td>04:00pm, Fri Apr 16th</td>
          <td>Annual General Meeting</td>
        </tr>
        <tr>  
          <td>Until April 26th, 2025</td>
          <td>Final Exam Accomodations</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Announcements;
