// src/components/OSP.js
import React, { useState, useEffect } from "react";
import "../styles/osp.css";

// Import image
import ospPathImg from "../images/osp_path.JPG";

const OSP = () => (
  <section className="osp-section">
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

      <div className="osp-history">
        <h3>OSP history since Revamp (2018):</h3>
        <img src={ospPathImg} alt="OSP Path" className="osp-path-image" />
      </div>
    </div>
  </section>
);

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
    const slides = document.getElementsByClassName("mySlidesOsp");
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
        <div className="mySlides" id="slide1-2024">slide 1</div>
        <div className="mySlides" id="slide2-2024">slide 2</div>
        <div className="mySlides" id="slide3-2024">slide 3</div>
      

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
        <div className="mySlides" id="slide1-2023">slide 1</div>
        <div className="mySlides" id="slide2-2023">slide 2</div>
        <div className="mySlides" id="slide3-2023">slide 3</div>
      

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
        <div className="mySlides" id="slide1-2022">slide 1</div>
        <div className="mySlides" id="slide2-2022">slide 2</div>
        <div className="mySlides" id="slide3-2022">slide 3</div>
      

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
    ),
    2021: (
      <div className="slideshow-container-osp">
        <div className="mySlides" id="slide1-2021">slide 1</div>
        <div className="mySlides" id="slide2-2021">slide 2</div>
        <div className="mySlides" id="slide3-2021">slide 3</div>
      

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
    <div className="osp-content">
      <h2 className="title-2">Past OSP Initiatives</h2>
      <div className="container">
        <div className="osp-btn-container">    
          <button className={`osp-year-btn ${yearIndex == 2021 ? 'selected-btn': '' }`} onClick={() => setYear(2021)}>2018 - 2020</button>
          <button className={`osp-year-btn ${yearIndex == 2022 ? 'selected-btn': '' }`} onClick={() => setYear(2022)}>2021 - 2022</button>
          <button className={`osp-year-btn ${yearIndex == 2023 ? 'selected-btn': '' }`} onClick={() => setYear(2023)}>2022 - 2023</button>
          <button className={`osp-year-btn ${yearIndex == 2024 ? 'selected-btn': '' }`} onClick={() => setYear(2024)}>2023 - 2024</button>
        </div>
        {slideData[yearIndex]}
        <div className="dot-container">
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
    <OSP />
    <OspSlide />
  </div>
);

export default OSPSection;
