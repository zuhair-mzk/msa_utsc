// src/components/Advocacy.js
import React, { useEffect, useState } from "react";
import "../styles/advocacy.css";

const AdvocacyInfo = () => (
  <section id="advocacy">
    <div className="advocacy-content">
      <h2 className="title">Advocacy</h2>

      <div className="advocacy-block">
        <h3>What is Advocacy?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tincidunt sapien. Vestibulum nulla nibh, dictum at metus in, scelerisque volutpat purus. Duis non orci nisl. Nullam vitae enim nulla. Sed feugiat neque eu accumsan pulvinar. Aenean ullamcorper lectus ut dui placerat sodales. Pellentesque eget est nec purus maximus faucibus.</p>
      
        <h3>Why is it Important to the MSA?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tincidunt sapien. Vestibulum nulla nibh, dictum at metus in, scelerisque volutpat purus. Duis non orci nisl. Nullam vitae enim nulla. Sed feugiat neque eu accumsan pulvinar. Aenean ullamcorper lectus ut dui placerat sodales. Pellentesque eget est nec purus maximus faucibus.</p>
    
        <h3>How does the MSA Advocate for Muslim Students?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tincidunt sapien. Vestibulum nulla nibh, dictum at metus in, scelerisque volutpat purus. Duis non orci nisl. Nullam vitae enim nulla. Sed feugiat neque eu accumsan pulvinar. Aenean ullamcorper lectus ut dui placerat sodales. Pellentesque eget est nec purus maximus faucibus.</p>
      </div>
    </div>
  </section>
);

//turn into slide that has selectors for each past year
const AdvocacySlide = () => {
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
      <div className="slideshow-container">
        <div className="mySlides" id="slide1">slide 1</div>
        <div className="mySlides" id="slide2">slide 2</div>
        <div className="mySlides" id="slide3">slide 3</div>
      

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
    ),
    2023: (
      <div className="slideshow-container">
        <div className="mySlides" id="slide1">slide 1</div>
        <div className="mySlides" id="slide2">slide 2</div>
        <div className="mySlides" id="slide3">slide 3</div>
      

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
    )
  }
  return(
  <section id="advocacy">
    <div className="advocacy-content">
      <h2 className="title2">Our Initiatives</h2>

      {/* <div className="slideshow-container">
        <div className="mySlides" id="slide1">slide 1</div>
        <div className="mySlides" id="slide2">slide 2</div>
        <div className="mySlides" id="slide3">slide 3</div>
      

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div> */}
      {slideData[yearIndex]}
      <div className="dot-container">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  </section>
  )
};

const Advocacy = () => (
  <div>
    <AdvocacyInfo />
    <AdvocacySlide />
  </div>
);

export default Advocacy;
