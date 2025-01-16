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
          <td>01:00pm, Tue Jan 14th</td>
          <td>OSP High Tea for Charity</td>
        </tr>
        <tr>
          <td>01:00pm, Thu Jan 16thh</td>
          <td>OSP Brothers' Barbershop</td>
        </tr>
        <tr>
          <td>03:00pm, Sun Jan 26th</td>
          <td>OSP Gala</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Announcements;
