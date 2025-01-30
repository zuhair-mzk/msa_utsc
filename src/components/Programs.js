// src/components/Programs.js
import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/programs.css";

// Import images

import sisterSeerahImage from "../images/Sister, Seerah & Suhba.png"
import brothersHalaqahImage from "../images/brothers_halaqah.png"
import sisterDhikrCircles from "../images/Sisters Friday Dhikr (2).jpg"
import surahYusuf from "../images/surah_yusuf.png"

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
          src={sisterSeerahImage}
          alt="Sisters, Seerah, and Suhba"
        />
        <div className="event-text">
          <h3>Sisters, Seerah, and Suhba</h3>
          <p>
            Want spiritual exercise in a comfortable space? Come join us in the prayer room where we
            will cover the Seerah book "When the Moon Split", and learn deepen our knowledge of 
            the Seerah and Suhba.
          </p>
          <a target="_blank" href="" className="register-button">
            Drop In Program
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={sisterDhikrCircles} alt="Sisters Friday Dhikr Circles" />
        <div className="event-text">
          <h3>Sisters Friday Dhikr Circles</h3>
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
