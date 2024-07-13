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
          <td>10:00am, Wed Apr 6th</td>
          <td>Grand Iftar</td>
        </tr>
        <tr>
          <td>12:00am, Tue Feb 8th</td>
          <td>UTSC MSA General Meeting</td>
        </tr>
        <tr>
          <td>01:00am, Tue Jan 18th</td>
          <td>MSA Board Meetings</td>
        </tr>
        <tr>
          <td>11:00pm, Wed Nov 24th</td>
          <td>New MSA Website is Live!</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Announcements;
