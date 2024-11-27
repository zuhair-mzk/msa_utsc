// src/components/OSP.js
import React, { useState, useEffect } from "react";
import "../styles/osp.css";

// Import image
//2024
import osp_petting_2024 from "../images/osp_slide_petting.png"
import osp_quran_2024 from "../images/osp_slide_quran.png"
import osp_gala_2024 from "../images/osp_slide_gala.jpg"
import osp_barber_2024 from "../images/osp_slide_barber.png"
//2023
import osp_gala_2023 from "../images/osp_gala_2023.png"
import osp_sponsor_2023 from "../images/osp_gala_sponsor_2023.png"
import osp_profile_2023 from "../images/osp_gala_profile_2023.png"
import osp_food_2023 from "../images/osp_gala_food_2023.png"

const OspSlide = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [yearIndex, setYearIndex] = useState(2024)

  useEffect(() => {
    showSlides(slideIndex);
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex])

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

  const slideData = {
    2024: (
      <div className="slideshow-container-osp">
        <img className="mySlides" src={osp_gala_2024}></img>
        {/* <div className="mySlides" id="oop"></div> */}
        <img className="mySlides" src={osp_petting_2024}></img>
        <img className="mySlides" src={osp_quran_2024}></img>
        <img className="mySlides" src={osp_barber_2024}></img>
      
        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
    ),
    2023: (
      <div className="slideshow-container-osp">
        <img className="mySlides" src={osp_gala_2023}></img>
        <img className="mySlides" src={osp_sponsor_2023}></img>
        <img className="mySlides" src={osp_profile_2023}></img>
        <img className="mySlides" src={osp_food_2023}></img>
      
        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
    ),
    2022: (
      <div className="slideshow-container-osp">
        <img className="mySlides" src={osp_gala_2024}></img>
        <img className="mySlides" src={osp_petting_2024}></img>
        <img className="mySlides" src={osp_quran_2024}></img>
        <img className="mySlides" src={osp_barber_2024}></img>
      

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
    )
  }

  const setYear = (year) => {
    setYearIndex(year)
  }
  return(
  <section id="osp" >
    <div className="osp-container">
      <h2 className="section-title">OSP History</h2>
      <h3>What is OSP?</h3>
      <p>
        The University of Toronto Scarborough Campus' Muslim Students'
        Association has launched the Orphan Sponsorship Program. The OSP's main
        focus is to help the deprived orphan children who are impoverished in
        the midst of political conflicts. We are the medium between those in
        need and those who wish to help for the sake of Allah by providing
        Sadaqah (Charity).
      </p>

      <h3>Who are we working with?</h3>
      <p>
        We work with Human Concern International (HCI), a well-established
        Muslim-Canadian Charitable Organization. This charity connects us with
        orphaned children whose needs are not being met due to the unstable
        conditions of their home countries. Simultaneously provide emergency aid
        to help save lives during disasters, emergencies and conflicts while
        working locally to improve the lives of vulnerable people in Canada
      </p>

      <h3>Why should we donate?</h3>
      <p>
        It is an incredibly generous deed to support an orphaned child, as
        related in the below hadith. Certainly, your donations will benefit not
        only a child in dire need but also yourself since these donations are a
        form of Sadaqah (charity).
      </p>
      <blockquote>
        <p>
          A hadith narrated by Abu Hurayrah (RA) who reported that the Prophet
          (peace be upon him) said, “If you want to soften your heart, then feed
          the poor and pat the head of the orphan.” (Musnad Ahmad )
        </p>
      </blockquote>
      <p>
        Each child we are supporting has been born into difficult circumstances
        as a result of political conflicts taking place in their country.
        Although they do the best they can to live in these conditions, they
        need more support - they need our support. You can support these orphans
        without having to individually sponsor them yourself through
        contributing to the OSP and donating what you can.
      </p>

      <h3>Who receives Donations?</h3>
      <p>
        Every child we support has been born into unfortunate, difficult
        situations through the political conflicts prevalent in their country.
        They are deprived of basic needs and have no form of support. The kids
        we sponsor range from the ages of 11 to 14. These orphans being
        sponsored live in Syria, Pakistan, Lebanon, Somalia and Afghanistan.
        Through your donations, these children can manage to get themselves an
        education instead of having to find ways to earn wages to support
        themselves at such young ages.
      </p>
    </div>
    <div className="osp-content">
      <h2 className="title-2">Past OSP Initiatives</h2>
      <div className="container">
        <div className="osp-btn-container">    
          <button className={`osp-year-btn ${yearIndex == 2024 ? 'selected-btn': '' }`} onClick={() => setYear(2024)}>2023 - 2024</button>
          <button className={`osp-year-btn ${yearIndex == 2023 ? 'selected-btn': '' }`} onClick={() => setYear(2023)}>2022 - 2023</button>
        </div>
        {slideData[yearIndex]}
        <div className="dot-container">
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
        </div>
      </div>
    </div>
  </section>
  )
};

const OSPSection = () => (
  <div>
    {/* <OSP /> */}
    <OspSlide />
  </div>
);

export default OSPSection;
