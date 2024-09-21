// src/components/Programs.js
import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/programs.css";

// Import images

import sisterSeerahImage from "../images/sister_seerah.png"
import brothersHalaqahImage from "../images/brothers_halaqah.png"
import circlesFaithImage from "../images/circles_of_faith.png"

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
          <a
            href=""
            className="register-button"
          >
            Drop In Program
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={brothersHalaqahImage} alt="Halaqahs for Brothers" />
        <div className="event-text">
          <h3>'Circle of Inspiration: Live's of the Sahabah' Brother's Halaqah</h3>
          <p>
            Brothers! Join us to make connections with other
            brothers, and re-connect with Islam through our spiritually engaging
            halaqahs.
          </p>
          <a
            href=""
            className="register-button"
          >
            Register Here
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={circlesFaithImage} alt="Circles of Faith" />
        <div className="event-text">
          <h3>Circles of Faith</h3>
          <p>
            Are you a sister looking to grow your knowledge and understanding of our faith, 
            in a fun and friendly environment? Join our monthly sister's halaqah, and learn about
            several topics of faith this semseter.
          </p>
          <a
            href=""
            className="register-button"
          >
            Register Here
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Programs;
