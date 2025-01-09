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
          <td>03:30pm, Mon Jan 13th, 20th, & 27th</td>
          <td>Sisters, Seerah and Suhba</td>
        </tr>
        <tr>
          <td>04:00pm, Wed Jan 22nd & 29th</td>
          <td>Sisters' Weekly Halaqah</td>
        </tr>
        <tr>
          <td>04:00pm, Thu Jan 16th, 23th, & 30th</td>
          <td>Brothers' Quran Circles</td>
        </tr>
        <tr>
          <td>01:00pm, Fri Jan 17th, 24th, & 31st</td>
          <td>Sisters' Friday Dhikr Circles</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Announcements;
