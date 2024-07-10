import React, { useEffect, useState } from "react";
import "../styles/announcements.css";

const AnnouncementsSection = () => {
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

  return (
    <section id="announcements">
      <h2 style={{ color: "white", textDecoration: "underline #ceb378 5px" }}>
        Announcements
      </h2>
      <div className="slideshow-container">
        <div className="mySlides">
          <q>
            Then We will turn to whatever ˹good˺ deeds they did, reducing them
            to scattered dust
          </q>
          <p className="author">- 08/14/2023</p>
        </div>
        <div className="mySlides">
          <q>
            ˹But˺ on that Day the residents of Paradise will have the best
            settlement and the finest place to rest
          </q>
          <p className="author">- 08/14/2023</p>
        </div>
        <div className="mySlides">
          <q>
            Watch for˺ the Day the heavens will burst with clouds, and the
            angels will be sent down in successive ranks.
          </q>
          <p className="author">- 08/14/2023</p>
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
      <a href="https://www.utscmsa.com/progs-events/#announcements">
        <button className="view-all-button"> View All Announcements</button>
      </a>
    </section>
  );
};

export default AnnouncementsSection;
