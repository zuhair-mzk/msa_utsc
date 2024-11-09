// src/components/MentalHealth.js
import React, { useEffect, useState } from "react";

import "../styles/mentalhealth.css";
import canadianMuslimCounseling from "../images/canadian_muslim_counselling.png"
import naseehaMentalHealth from "../images/naseeha_mental_health.png"
import khalilCentre from "../images/khalil_centre.png"
import nisaHelpline from "../images/nisa_helpline.png"
import cedarwayTherapy from "../images/cedarway_therapy.png"
import muslimChaplaincy from "../images/muslim_chaplaincy.png"

  
const MentalResource = () => (
  <section id="mental-health" className="mental-health-section">
    <div className="mental-health-content">
      <h2 className="mental-health-title">Mental Health</h2>

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


      <h3 className="community_orgs_header">Community Organizations</h3>
      <h4>The MSA is not affiliated with any of these organizations</h4>
      <div className="organizations-container">
        <div>
          <div id="org" className="org1"><img src={canadianMuslimCounseling} alt="Canadian Muslim Counselling"></img></div>
          <h4>Canadian<br/> Muslim Counselling</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt sagittis lectus quis porta.
             Donec aliquet tempus ullamcorper. Proin et convallis ligula, non ullamcorper dolor. Maecenas vel pellentesque lectus.</p>
        </div>
        <div>
          <div id="org" className="org2"><img src={muslimChaplaincy} alt="The Muslim Chaplaincy of Toronto"></img></div>
          <h4>The Muslim <br/>Chaplaincy</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt sagittis lectus quis porta.
             Donec aliquet tempus ullamcorper. Proin et convallis ligula, non ullamcorper dolor. Maecenas vel pellentesque lectus.</p>
        </div>
        <div>
          <div id="org"><img src={naseehaMentalHealth} alt="Naseeha Mental Health"></img></div>
          <h4>Naseeha <br/>Mental Health</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt sagittis lectus quis porta.
             Donec aliquet tempus ullamcorper. Proin et convallis ligula, non ullamcorper dolor. Maecenas vel pellentesque lectus.</p>
        </div>
        <div>
          <div id="org"><img src={nisaHelpline} alt="Nisa Help Line"></img></div>
          <h4>Nisa Helpline</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt sagittis lectus quis porta.
             Donec aliquet tempus ullamcorper. Proin et convallis ligula, non ullamcorper dolor. Maecenas vel pellentesque lectus.</p>
        </div>
        <div>
          <div id="org" className="org5"><img src={cedarwayTherapy} alt="Cedarway Therapy"></img></div>
          <h4>Cedarway Therapy</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt sagittis lectus quis porta.
             Donec aliquet tempus ullamcorper. Proin et convallis ligula, non ullamcorper dolor. Maecenas vel pellentesque lectus.</p>
        </div>
        <div>
          <div id="org" className="org6"><img src={khalilCentre} alt="Khalil Centre"></img></div>
          <h4>Khalil Centre</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt sagittis lectus quis porta.
             Donec aliquet tempus ullamcorper. Proin et convallis ligula, non ullamcorper dolor. Maecenas vel pellentesque lectus.</p>
        </div> 
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