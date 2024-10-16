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
          <td>03:00pm, Mon Oct 21st</td>
          <td>MSA Bonfire Night</td>
        </tr>
        <tr>
          <td>- , Tue Oct 22nd</td>
          <td>Thaqalayn Muslim Association Tabling</td>
        </tr>
        <tr>
          <td>05:00pm, Fri Oct 25th</td>
          <td>Islamic Trivia Night</td>
        </tr>
        <tr>
          <td>-, Sun Oct 27th</td>
          <td>Charity Week Grand Auction Dinner</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Announcements;
