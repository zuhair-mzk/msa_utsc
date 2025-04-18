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
          <td>02:00pm, Wed Mar 26th</td>
          <td>Sisters Ramadan Halaqa</td>
        </tr>
        <tr>
          <td>08:50pm, Thu Mar 20th</td>
          <td>Khatmah on Campus</td>
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
