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
          <td>02:00pm, Mon Sep 16th</td>
          <td>Tabling, Getting to Know MSA</td>
        </tr>
        <tr>
          <td>02:00pm, Wed Sep 18th</td>
          <td>Welcome Day</td>
        </tr>
        <tr>
          <td>03:00pm, Thu Sep 19th</td>
          <td>Sister's Guided Hike</td>
        </tr>
        <tr>
          <td>Mon Sep 23rd & Tue Sep 24th</td>
          <td>Club Fair</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Announcements;
