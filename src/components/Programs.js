// src/components/Programs.js
import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/programs.css";

// Import images
import sportsHalaqahImg from "../images/brothers&sisters_sports_halaqah.png";
import charityWeekImg from "../images/charity.png";
import tajwidImg from "../images/tajwid.png";

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
          src={sportsHalaqahImg}
          alt="Brothers & Sisters Sports and Halaqah"
        />
        <div className="event-text">
          <h3>Brothers sports and halaqah</h3>
          <p>
            Want a physical and spiritual exercise? Join us at the Pan Am Sports
            centre where we play a variety of sports as brothers, increasing our
            brotherhood and skills. Afterwards, come to the prayer room where we
            will have our halaqah regarding various topics in Islam, like tafsir
            and seerah.
          </p>
          <HashLink to="/osp" className="register-button">
            Register Here
          </HashLink>
        </div>
      </div>
      <div className="event-card">
        <img src={charityWeekImg} alt="Charity Week" />
        <div className="event-text">
          <h3>Sisters study session and halaqah</h3>
          <p>
            Sisters! Join us for sisters-only study sessions where our presence
            will motivate each other. In between, make connections with other
            sisters, and re-connect with Islam through our spiritually engaging
            halaqahs.
          </p>
          <a
            href="https://www.utscmsa.com/programs/charity-week"
            className="register-button"
          >
            Register Here
          </a>
        </div>
      </div>
      <div className="event-card">
        <img src={tajwidImg} alt="Tajwid" />
        <div className="event-text">
          <h3>Tajwid</h3>
          <p>
            Dive into the beauty of Quranic recitation with our Tajwid Program!
            Whether you're just starting out or looking to refine your skills,
            we're here to guide you through the art of proper pronunciation and
            articulation. Let's perfect our recitation and deepen our connection
            to the Quran together.
          </p>
          <a
            href="https://www.utscmsa.com/programs/mentorship-program"
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
