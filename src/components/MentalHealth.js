// src/components/MentalHealth.js
import React, { useEffect, useState } from "react";

import "../styles/mentalhealth.css";
import canadianMuslimCounseling from "../images/canadian_muslim_counselling.png"
import naseehaMentalHealth from "../images/naseeha_mental_health.png"
import nisaHelpline from "../images/nisa_helpline.png"
import cedarwayTherapy from "../images/cedarway_therapy.png"
import muslimChaplaincy from "../images/muslim_chaplaincy.png"
import ruhCare from "../images/ruh_care_logo.png"
import dua1 from "../images/mh-dua1.png"

  
const MentalResource = () => (
  <section id="mental-health" className="mental-health-section">
    <div className="mental-health-content">
      <h2 className="mental-health-title">Mental Health</h2>

      <p className="banner-msg"> If you or anyone you know needs help, a reminder that supports are available. Did you know many therapy sessions are covered by your UofT student Greenshield Insurance? See below for details. If you have opted out of your student insurance, you may book a counselling session for free  through Muslim Chaplaincy @ UofT (McUofT) anytime, more details below. </p>

      <h3 className="emergency-contacts">Emergency Contacts</h3>
      <ul className="mental-health-contacts">
        <li>Good2Talk: <span>1 866 925 5454</span></li>
        <li>NISA HELPLINE: <span>1 888-315-6472</span></li>
        <li>NASEEHA HELPLINE: <span>1 866-627-3342</span></li>
      </ul>

      <h3>Resources</h3>
      <div className="resource-container">
            <div className="on-campus-resource">
              <h3>On Campus</h3>
                <ul>
                  <li>Health and Wellness - (416) 287-7065</li>
                  <li>Safety Abroad - 1 (215) 942 8478</li>
                  <li>Campus Safety (Emegency) - (416) 287-7065</li>
                </ul>
            </div>
            <div className="external-resource">
              <h3>External</h3>
              <ul>
                  <li>Health and Wellness - (416) 287-7065</li>
                  <li>Safety Abroad - 1 (215) 942 8478</li>
                  <li>Campus Safety (Emegency) - (416) 287-7065</li>
              </ul>
            </div>
      </div>
    </div>
  </section>
  );

const MentalHealthTips = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [language, setLang] = useState("Arabic");

  useEffect(() => {
    showSlides(slideIndex);
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  useEffect(() => {
    showSlides(slideIndex);
  }, [language]);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    let inner_slides = document.getElementsByClassName(`slide${slideIndex-1}`)
    slides[slideIndex - 1].style.display = "block";
    if (language == "English"){
      inner_slides[1].style.display = "block";
      inner_slides[0].style.display = "none";
      // slides[slideIndex - 1].style.display = "block";
    } else {
      inner_slides[0].style.display = "block";
      inner_slides[1].style.display = "none";
      // slides[slideIndex - 1].style.display = "block";
    }
    dots[slideIndex - 1].className += " active";
    
  };

  const toggleLanguage = () => {
    console.log(`Current Language is: ${language}`)
    if (language == "English"){
      setLang("Arabic")
    } else {
      setLang("English")
    }
  };
  return(
  <section id="mental-health" className="mental-health-section">
    <div className="mental-health-content">
      <h2 className="selfcare-title">Mental Health Duas</h2>
      
      <div className="slideshow-container-mh">
        <div className="mySlides">
            <img src={dua1} className="slide0"></img>
            <div className="slide0" id="img2">Dua 1 in English</div>
        </div>
        <div className="mySlides">
          <img src={dua1} className="slide1"></img>
            <div className="slide1"id="img4">Dua 2 in English</div>
        </div>
        <div className="mySlides">
          <img src={dua1} className="slide2"></img>
            <div className="slide2" id="img6">Dua 3 in English</div>
        </div>
        
        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
      <div className="dot-container">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
      {/* <button onClick={toggleLanguage} className="language-btn">{language}</button> */}


      <h3 className="community_orgs_header">Community Organizations</h3>
      <h4>The MSA is not affiliated with any of these organizations</h4>
      <div className="organizations-container">
        <div>
          <div id="org" className="org1"><img src={canadianMuslimCounseling} alt="Canadian Muslim Counselling"></img></div>
          <h4>Canadian<br/> Muslim Counselling</h4>
          <p> CMC provides e-mental health services to communities across Canada. They offer therapy,
            counseling, and more, all delivered from Islamic perspectives. 
              Visit their <a href="https://muslimcounselling.ca/">website</a> or call (437)-886-6309.

</p>
        </div>
        <div>
          <div id="org" className="org2"><img src={muslimChaplaincy} alt="The Muslim Chaplaincy of Toronto"></img></div>
          <h4>The Muslim <br/>Chaplaincy</h4>
          <p>This organization provides counseling, classes, and programming for Muslim students. They offer free counseling
             services and have multiple chaplains <a href="https://mcuoft.com/">available across all 3 campuses</a>.
         </p>
        </div>
        <div>
          <div id="org"><img src={naseehaMentalHealth} alt="Naseeha Mental Health"></img></div>
          <h4>Naseeha <br/>Mental Health</h4>
          <p>Naseeha offers free, confidential mental health support for Muslims via a helpline and live chat.
             Their trained counselors provide support on a variety of issues. Call 1-866-627-3342 or visit <a href="https://www.naseeha.org/">naseeha.org</a>.
          </p>
        </div>
        <div>
          <div id="org"><img src={nisaHelpline} alt="Nisa Help Line"></img></div>
          <h4>Nisa Helpline</h4>
          <p>Nisa Helpline offers free, confidential support for Muslim women by trained counselors, available 7 days a week.
             Call 1-888-315-6472 to get help or visit <a href="https://nisahelpline.com/">nisahelpline.com</a> for more information.</p>
        </div>
        <div>
          <div id="org" className="org5"><img src={cedarwayTherapy} alt="Cedarway Therapy"></img></div>
          <h4>Cedarway Therapy</h4>
          <p>Cedarway Therapy provides mental health care for individuals, couples, and families, incorporating Islamic values into their services.
             They offer virtual and in-person counseling. Visit <a href="https://cedarwaytherapy.com/">cedarwaytherapy.com</a> to book a session.</p>
        </div>
        <div>
          <div id="org" className="org6"><img src={ruhCare} alt="Ruh Care"></img></div>
          <h4>Ruh Care</h4>
          <p>Ruh Care provides holistic mental health services incorporating Islamic values, offering therapy, coaching, and wellness resources.
             Sessions are available online or in-person. Learn more at <a href="https://www.ruhcare.com/">ruhcare.com</a></p>
        </div> 
      </div>

      <div className="Insurance-div">
        <h3 className="selfcare-title">Greenshield Coverage</h3>

        <p>Greenshield coverage for 2024-2025 will cover up to <span>$125 per visit</span>, for the first <span>20 visits</span> to any of the below services</p>
        <div className="services">
          <p>Psychologist</p>
          <p>Counsellor</p>
          <p>Master of Social Work</p>
          <p>Social Worker</p>
          <p>Psychotherapist</p>
        </div>
        <p>View the <a target="_blank" href="https://static1.squarespace.com/static/63fd00cacf68bb4c95562321/t/66d8ba71fac2ac1c3fbb399e/1725479537836/SCSU_SCU90000_90002_20240901.pdf" className="greenshield-link">2024-2025 Greenshield Plan</a> and <a target="_blank" href="https://static1.squarespace.com/static/63fd00cacf68bb4c95562321/t/66d46ecde0d39b1203532a25/1725198029296/L99-SCSU-Brochure-2024+QR.pdf" className="greenshield-link">Brochure</a> for full details</p>
      </div>
      
    </div>
  </section>
)};

const MentalHealth = () => (
  <div>
    <MentalResource />
    <MentalHealthTips />
  </div>
);

export default MentalHealth;