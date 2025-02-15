// src/components/Advocacy.js
import React from "react";
import "../styles/advocacy.css";

// Import image
//2024
import advocacyImage1 from "../images/advocacy-2024-palestine.jpg";

import agenda1 from "../images/Advocacy Week Post (1).jpg";

const Advocacy = () => (
  <section id="advocacy">
    <div className="advocacy-container">
      <h2 className="section-title">MSA Advocacy</h2>
      <h3>What is Advocacy to the MSA?</h3>
      <p>
        Advocacy is at the heart of the Muslim Student Association (MSA). For
        us, it means raising awareness about issues affecting Muslim students
        and the broader community while fostering a space where everyone feels
        valued and empowered. Through thoughtful initiatives, discussions, and
        campaigns, we aim to amplify voices, break down stereotypes, and promote
        justice, equity, and understanding.
      </p>

      <h3>Why is Advocacy Important?</h3>
      <p>
        Advocacy is essential because it builds bridges between communities and
        encourages meaningful dialogue. It allows us to highlight and address
        social challenges while educating others about the diverse experiences
        of Muslim students. By standing up for what matters and supporting
        positive change, we help create a more inclusive and compassionate
        campus environment.
      </p>

      <h3>How can you be Involved?</h3>
      <p>
        There are many ways for students to get involved in advocacy through the
        MSA. You can volunteer for events, join protests, or even lead your own
        awareness initiatives. We welcome everyone who is passionate about
        making a difference for the well being of the Muslim community, on and
        off campus.
      </p>
      {/* <blockquote>
        <p>
          A hadith narrated by Abu Hurayrah (RA) who reported that the Prophet
          (peace be upon him) said, “If you want to soften your heart, then feed
          the poor and pat the head of the orphan.” (Musnad Ahmad )
        </p>
      </blockquote> */}
    </div>

    <div className="agenda-items">
      <h2 className="title-2">Items on the Agenda</h2>
      <div className="agenda-container">
        <div className="agenda-content">
          <a href="https://www.instagram.com/p/DFX0Fn8O9EA/" target="_blank">
            <img src={agenda1} alt="advocacy-agenda-img"></img>
          </a>
          <div className="agenda-text">
            <h3></h3>
            <p></p>
          </div>
        </div>

        <div className="agenda-content">
          <a href="https://www.instagram.com/p/DFX0Fn8O9EA/" target="_blank">
            <img src={agenda1} alt="advocacy-agenda-img"></img>
          </a>
          <div className="agenda-text">
            <h3></h3>
            <p></p>
          </div>
        </div>

        <div className="agenda-content">
          <a href="https://www.instagram.com/p/DFX0Fn8O9EA/" target="_blank">
            <img src={agenda1} alt="advocacy-agenda-img"></img>
          </a>
          <div className="agenda-text">
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>

    <div className="advocacy-content">
      <h2 className="title-2">Last Year's Advocacy Initiatives</h2>
      <div className="container">
        <div className="grid-section">
          <div className="grid-img">
            <img alt="Advocacy Image" src={advocacyImage1}></img>
          </div>
          <div className="grid-text">
            <h2>Protests for Palestine</h2>
            <p>
            The UTSC MSA, along with members of the student body, held several
            protests across campus, calling for the divestment, support, and
            accountability of university staff and officials regarding the
            University's stance on the Israel-Hamas conflict and Genocide in Gaza.
            </p>
          </div>
        </div>

        {/* <div className="grid-section">
          <div className="grid-text">
            <h2>Initiative Two</h2>
            <p>A recitation competition, where students could either recite from memory or read from the Mushaf within Quran circles and before judges</p>
          </div>
          <div className="grid-img">
          <img alt="Advocacy Image" src={ospImage2}></img>
          </div>
        </div>

        <div className="grid-section">
          <div className="grid-img">
            <img alt="Advocacy Image" src={ospImage3}></img>
          </div>
          <div className="grid-text">
            <h2>Initiative Three</h2>
            <p>A day long gala event featuring guest speakers, a grand dinner, and a live auction raising money for orphan sponsorhsip</p>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Advocacy;
