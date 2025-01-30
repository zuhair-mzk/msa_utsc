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
          <td>01:00pm, Thu Jan 16th</td>
          <td>OSP Brothers' Barbershop</td>
        </tr>
        <tr>
          <td>03:00pm, Sun Jan 26th</td>
          <td>OSP Gala</td>
        </tr>
        <tr>
          <td>Deadline at 11:59pm, Sat Feb 1st</td>
          <td>MSA is rehiring directors!</td>
        </tr>
        <tr>
          <td>2025, Wed Feb 19th</td>
          <td>Ontario Inter-MSA Ski Trip</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Announcements;
