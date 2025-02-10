// src/components/Programs.js
import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/programs.css";

// Import images

import sisterSeerahImage from "../images/Sister, Seerah & Suhba.png"
import sisterDhikrCircles from "../images/Sisters Friday Dhikr (2).jpg"
import surahYusuf from "../images/surah_yusuf.png"
import reflectAndConnect from "../images/reflection&connections.png"

const Programs = () => (
  <section id="programs">
    <div className="events-intro">
      <h2 className="event-title">Programs</h2>
      <p className="event-p">
        Below are some of the programs organized by UTSC MSA. You can also check
        out the full list by following the link.
      </p>
      <HashLink
        to="/programs-events#programs"
        className="view-all-events-button"
      >
        View All Programs
      </HashLink>
    </div>
    <div className="event-card-container">
      <div className="event-card">
        <img
          src={reflectAndConnect}
          alt="Reflections and Connections"
        />
        <div className="event-text">
          <h3>Reflections and Connections: Sisters' Weekly Halaqah</h3>
          <p>
            Sisters are welcome to join in for weekly talks on women, marriage, haya, and more in Islam. Led by sister Aalimah Khans. Wednesdays 4-5 PM.
          </p>
          <a target="_blank" href="" className="register-button">
            Drop In Program
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={sisterDhikrCircles} alt="Sisters Friday Dhikr Circles" />
        <div className="event-text">
          <h3>Sisters' Friday Dhikr Circles</h3>
          <p>
            Sisters! Join us to engage in collective rememberance of Allah, every Friday at 1:00 PM. Don't forget your Tasbeeh!
          </p>
          <a target="_blank" href="" className="register-button">
            Drop In Program
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={surahYusuf} alt="Lessons from Surah Yusuf" />
        <div className="event-text">
          <h3>Lessons from Surah Yusuf</h3>
          <p>
          Brothers! Join us on Friday for an evening of discussion and learning from the teachings of Surah Yusuf,
           with Imam Humza Asad. Every Friday at 5:00 PM
          </p>
          <a target="_blank" href="" className="register-button">
            Drop In Program
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Programs;
