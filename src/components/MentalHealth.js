// src/components/MentalHealth.js
import React, { useEffect, useState } from "react";

import "../styles/mentalhealth.css";

  
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

  useEffect(() => {
    showSlides(slideIndex);
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

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
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };
  return(
  <section id="mental-health" className="mental-health-section">
    <div className="mental-health-content">
      <h2 className="selfcare-title">Self Care Tips</h2>
      
      <div className="slideshow-container">
        <div className="mySlides" id="slide1">
          
        </div>
        <div className="mySlides" id="slide2">
          
        </div>
        <div className="mySlides" id="slide3">
          
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


      <h3>Trusted Organizations</h3>
      <div className="organizations-container">
        <div className="org"></div>
        <div className="org"></div>
        <div className="org"></div>
        <div className="org"></div>
        <div className="org"></div>
        
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