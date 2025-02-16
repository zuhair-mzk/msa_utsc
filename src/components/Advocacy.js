// src/components/Advocacy.js
import React from "react";
import "../styles/advocacy.css";

// Import image
//2024
import advocacyImage1 from "../images/p_protest_img.png";
import advocacyImage2 from "../images/green_square_img.png"
import advocacyImage3 from "../images/islamophobia panel img.png"

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
      <h2 className="title-2">Past Advocacy Initiatives</h2>
      <div className="container">

        <div className="grid-section">
          <div className="grid-text">
            <h2>Green Square Campaign</h2>
            <p>UTSC MSA students tabled on campus, to commemorate the Muslims killed in the Quebec mass shooting on January 29th, 2027,
              where 6 Muslims were killed in a masjid, atop the green carpets they prayed on. They wore and handed out green squares
              to encourage others to stand in solidarity with Muslims.</p>
          </div>
          <div className="grid-img">
          <img alt="Advocacy Image" src={advocacyImage2}></img>
          </div>
        </div>

        <div className="grid-section">
          <div className="grid-img">
            <img alt="Advocacy Image" src={advocacyImage3}></img>
          </div>
          <div className="grid-text">
            <h2>Islamophobia Panel</h2>
            <p>During Isalmic Awareness Week, UTSC MSA students created and displayed an Islamophobia panel,
               to bring awareness to the prejudice against Islam and Muslims.</p>
          </div>
        </div>

        <div className="grid-section">
          <div className="grid-text">
            <h2>Protests for Palestine</h2>
            <p>
            The UTSC MSA, along with members of the student body, held several
            protests across campus, calling for the divestment, support, and
            accountability of university staff and officials regarding the
            University's stance on the Israel-Hamas conflict and Genocide in Gaza.
            </p>
          </div>
          <div className="grid-img">
            <img alt="Advocacy Image" src={advocacyImage1}></img>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Advocacy;
