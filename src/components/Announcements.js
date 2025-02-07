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
          <td>04:30pm, Mon Feb 10th</td>
          <td>A History of Muslim Excellence in The Americas</td>
        </tr>
        <tr>
          <td>04:45pm, Tue Feb 11th</td>
          <td>Islamic Psychology: History, Contributions, and Modern Relevance</td>
        </tr>
        <tr>
          <td>Deadline at 11:59pm, Thu Feb 13th</td>
          <td>The Message Magazine: Creative Submissions</td>
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
