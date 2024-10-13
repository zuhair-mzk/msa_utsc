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
          <td>05:00pm, Fri Oct 18th</td>
          <td>Circles of Inspiration</td>
        </tr>
        <tr>
          <td>03:00pm, Mon Oct 21st</td>
          <td>Charity Week Bonfire Tabling</td>
        </tr>
        <tr>
          <td>03:30pm, Tue OCt 22nd</td>
          <td>Circles of Faith - Sister's Halaqah</td>
        </tr>
        <tr>
          <td>Sat Oct 26th</td>
          <td>Charity Week Auction Gala</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Announcements;
