// src/components/MentalHealth.js
import React, { useEffect, useState } from "react";

import "../styles/mentalhealth.css";
import canadianMuslimCounseling from "../images/canadian_muslim_counselling.png"
import naseehaMentalHealth from "../images/naseeha_mental_health.png"
import khalilCentre from "../images/khalil_centre.png"
import nisaHelpline from "../images/nisa_helpline.png"
import cedarwayTherapy from "../images/cedarway_therapy.png"

  
const MentalResource = () => (
  <section id="mental-health" className="mental-health-section">
    <div className="mental-health-content">
      <h2 className="mental-health-title">Mental Health</h2>

      <h3>Emergency Contacts</h3>
      <ul className="mental-health-contacts">
        <li>Good2Talk: <span>1 866 925 5454</span></li>
        <li>NISA HELPLINE: <span>1-888-315-6472</span></li>
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
                <li>External Resource 1</li>
                <li>External Resource 2</li>
                <li>External Resource 3</li>
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
      <h2 className="selfcare-title">Self Care Tips</h2>
      
      <div className="slideshow-container">
        <div className="mySlides">
            <div className="slide0" id="img1">Dua 1 in Arabic</div>
            <div className="slide0" id="img2">Dua 1 in English</div>
        </div>
        <div className="mySlides">
            <div className="slide1" id="img3">Dua 2 in Arabic</div>
            <div className="slide1"id="img4">Dua 2 in English</div>
        </div>
        <div className="mySlides">
            <div className="slide2" id="img5">Dua 3 in Arabic</div>
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
      <button onClick={toggleLanguage} className="language-btn">{language}</button>


      <h3>Trusted Organizations</h3>
      <div className="organizations-container">
        <div>
          <div id="org" className="org1"><img src={canadianMuslimCounseling} alt="Canadian Muslim Counselling"></img></div>
          <p>Canadian<br/> Muslim Counselling</p>
        </div>
        <div>
          <div id="org"><img src={naseehaMentalHealth} alt="Naseeha Mental Health"></img></div>
          <p>Naseeha <br/>Mental Health</p>
        </div>
        <div>
          <div id="org" className="org3"><img src={khalilCentre} alt="Khalil Centre"></img></div>
          <p>Khalil <br/>Centre</p>
        </div>
        <div>
          <div id="org"><img src={nisaHelpline} alt="Nisa Help Line"></img></div>
          <p>Nisa <br/>Helpline</p>
        </div>
        <div>
          <div id="org" className="org5"><img src={cedarwayTherapy} alt="Cedarway Therapy"></img></div>
          <p>Cedarway <br/>Therapy</p>
        </div>
        
      </div>
      <a href="" className="feedback-button">
          Mental Health Feedback
      </a>
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