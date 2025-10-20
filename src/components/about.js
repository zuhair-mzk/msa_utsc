import React from "react";
import "../styles/aboutus.css";
import comms_team from "../images/comms_meet_the_team.png"; // Adjust path as needed
import ra_team from "../images/ra_meet_the_team.png"
import cs_team from "../images/cs_meet_the_team.png"
import fin_team from "../images/finance_meet_the_team.png"
import internal_team from "../images/internal_meet_the_team.png"
import external_team from "../images/external_meet_the_team.png"
import president from "../images/president_meet_the_team.png"

const AboutUs = () => (
  <section id="about-us-section">
     <h2 className="event-title">ABOUT US</h2>

    {/* Wrapper div for background */}
    <div className="about-container">
      <section id="our-mission">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">
          The Muslim students association at the University of Toronto,
          Scarborough is a club that has been active for over 12 years now and is
          one that promotes unity in diversity. Our mission is to promote and
          create an environment of peace and harmony. We strive to provide safe
          spaces for the Muslim and non-Muslim community on campus so that we may
          gather together, learn together, and grow together.
        </p>
        <p className="section-description">
          We wish to offer assistance and support to the best of our abilities to
          Muslim students as well as to those who are curious about Islam. We are
          committed to serve our community.
        </p>
      </section>

      <section id="our-values">
        <h2 className="section-title">Our Values</h2>
        <p className="section-description">
          Our core values centre around peace, empathy, compassion, and religious
          harmony. The MSA values honest work and believes in taking ownership and
          accountability for one’s actions. We do our best to uphold those values
          from the executive team all the way down to the newest members.
        </p>
        <p className="section-description">
          We want to encourage everyone on-campus and in the broader community,
          muslims and non-muslims alike, to practice peace, empathy and
          understanding in all aspects of life.
        </p>
      </section>

      <section id="our-constitution">
        <h2 className="section-title">Constitution</h2>
        <p className="section-description">
          The constitution is what MSA relies on to ensure that the club functions
          smoothly. It serves as a guidebook for all board members and outlines
          the structure of the club.
        </p>
        <div className="button-container">
          <a href="https://tr.ee/3DTeJM0hyp" className="button">
            View Full Constitution
          </a>
        </div>
      </section>
    </div>
  </section>
);

const MeetTheTeam = () => (
  <div>
    <section id="team">
      <hr className="section-divider" />
      <h2 className="about-title">Meet The Team</h2>
      <div>
        <h2 className="team-title">President, Senior Advisors, and First Year Reps</h2>
        <img src={president} alt="President, Senior Advisors, and First Year Reps"></img>
      </div>
      <div>
        <h2 className="team-title">Marketing and Communications</h2>
        <img src={comms_team} alt="Marketing and Communications Team"></img>
      </div>
      <div>
        <h2 className="team-title">Religious Affairs</h2>
        <img src={ra_team} alt="Religious Affairs Team"></img>
      </div>
      <div>
        <h2 className="team-title">Community Services</h2>
        <img src={cs_team} alt="Community Services Team"></img>
      </div>
      <div>
        <h2 className="team-title">Finance</h2>
        <img src={fin_team} alt="Finance Team"></img>
      </div>
      <div>
        <h2 className="team-title">Internal</h2>
        <img src={internal_team} alt="Internal Team"></img>
      </div>
      <div>
        <h2 className="team-title">External</h2>
        <img src={external_team} alt="External Team"></img>
      </div>
    </section>
  </div>
);

const AboutUsWithTeam = () => (
  <div>
    <AboutUs />
    <MeetTheTeam />
  </div>
);

export { AboutUsWithTeam, AboutUs, MeetTheTeam };


