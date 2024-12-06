import "../styles/gallery.css"
import React, { useEffect, useState } from "react";
import testimage from "../images/ra_meet_the_team.png"
import testimage2 from "../images/internal_meet_the_team.png"



const Gallery = () => {

    const [yearIndex, setYearIndex] = useState(2024);

    const slideData = {
        2024: (
          <div className="gallery-preview-container">
            <div className="preview" id="event1-2024">
                <img src={testimage} alt=""></img>
            </div>
            <div className="preview" id="event2-2024">
                <img src={testimage} alt=""></img>
            </div>
            <div className="preview" id="event3-2024">
                <img src={testimage} alt=""></img>
            </div>
            
          </div>
        ),
        2023: (
            <div className="gallery-preview-container">
                <div className="preview" id="event1-2023">
                    <img src={testimage2} alt=""></img>
                </div>
                <div className="preview" id="event2-2023">
                    <img src={testimage2} alt=""></img>
                </div>
                <div className="preview" id="event3-2023">
                    <img src={testimage2} alt=""></img>
                </div>
            </div>
        )
    }
    return(
        <section id="gallery-home">
            <div className="gallery-home-content">
                <h2 className="gallery-title">MSA Gallery</h2>

                <div className="gallery-year-container">
                    <div className="gallery-preview-btn-container">
                        <button className={`gallery-year-btn ${yearIndex == 2024 ? 'selected-btn': ' '}`} onClick={() => setYearIndex(2024)}>2024</button>
                        <button className={`gallery-year-btn ${yearIndex == 2023 ? 'selected-btn': ' '}`} onClick={() => setYearIndex(2023)}>2023</button>
                    </div>
                    {slideData[yearIndex]}
                </div>
            </div>
        </section>
    );
};

export default Gallery;