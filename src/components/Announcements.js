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
          <td>2025, Wed Feb 19th</td>
          <td>Ontario Inter-MSA Ski Trip</td>
        </tr>
        <tr>
          <td>03:00pm, Mon Feb 24th</td>
          <td>An Evening With Quran, Preparing For Ramadan</td>
        </tr>
        <tr>
          <td>02:15pm, Thu Feb 27th</td>
          <td>Islam Demystified. Beyond Stereotypes and Misconceptions</td>
        </tr>
        <tr>
          <td>Now until the end of Ramadan</td>
          <td>The MSA is collecting Ramadan <a href="https://www.zeffy.com/en-CA/fundraising/ramadan-iftaar-donations" target="_blank">donations</a> to help host free iftars on campus!</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Announcements;
