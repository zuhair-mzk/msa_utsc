import "../styles/gallery.css"
import React, { useEffect, useState } from "react";
import testimage from "../images/ra_meet_the_team.png"
import testimage2 from "../images/internal_meet_the_team.png"
import { HashLink as Link } from "react-router-hash-link";

// 
import cw from "../images/album/album_2024_cwB.png"
import osp from "../images/album/album_2024_ospB.png"
import wd from "../images/album/album_2024_wdB.png"
import gi from "../images/album/album_2024_giB.png"


const Gallery = () => {

    const [yearIndex, setYearIndex] = useState(2024);

    const slideData = {
        2024: (
          <div className="gallery-preview-container">

            <Link smooth to="/album-2024#osp">
                <div className="preview" id="">
                    <img src={osp} alt="OSP"></img>
                </div>
            </Link>

            <Link smooth to="/album-2024#cw">
                <div className="preview" id="">
                    <img src={cw} alt="Charity Week"></img>
                </div>
            </Link>
            
            <Link smooth to="/album-2024#wd">
                <div className="preview" id="">
                    <img src={wd} alt="Welcome Day"></img>
                </div>
            </Link>
            <Link smooth to="/album-2024#gi">
                <div className="preview" id="">
                    <img src={gi} alt="Grand Iftaar"></img>
                </div>
            </Link>
            
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
                        <button className={`gallery-year-btn ${yearIndex == 2024 ? 'selected-btn': ''}`} onClick={() => setYearIndex(2024)}>2024</button>
                        <button className={`gallery-year-btn ${yearIndex == 2023 ? 'selected-btn': ''}`} onClick={() => setYearIndex(2023)}>2023</button>
                    </div>
                    {slideData[yearIndex]}
                </div>
            </div>
        </section>
    );
};

export default Gallery;