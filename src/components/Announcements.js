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
          <td>06:00pm, Wednesdays</td>
          <td>Soulfoud</td>
        </tr>
        <tr>
          <td>03:30pm, Thursdays</td>
          <td>Sisters, Seerah, and Suhba</td>
        </tr>
        <tr>
          <td>03:30pm, Tue Nov 12th</td>
          <td>Circles of Faith</td>
        </tr>
        <tr>
          <td>12:00pm, Sat Nov 23rd</td>
          <td>Charity Week International Dinner</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Announcements;
