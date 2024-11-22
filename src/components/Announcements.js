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
          <td>03:30pm, Thu Nov 14th</td>
          <td>Circles of Faith</td>
        </tr>
        <tr>
          <td>11:00am, Sat Nov 16th</td>
          <td>Da'wah Training, with Muslim Hub Club</td>
        </tr>
        <tr>
          <td>11:59pm, Tue Nov 19th</td>
          <td>MSA General Meeting Proposals</td>
        </tr>
        <tr>
          <td>10:00am, Sat Nov 23rd</td>
          <td>iSPARC</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Announcements;
