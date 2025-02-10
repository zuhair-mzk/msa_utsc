import "../styles/gallery.css"
import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

// 
import cw from "../images/album/2024/charity_week/cw_banner.png"
import osp from "../images/album/2024/osp/osp_banner.png"
import wd from "../images/album/2024/welcome_day/wd_banner.png"
import gi from "../images/album/2024/grand_iftaar/gi_banner.png"

import cw2023 from "../images/album/2023/charity_week/cw_preview.png"
import bonfire2023 from "../images/album/2023/bonfire/bonfire_preview.png"
import osp2023 from "../images/album/2023/osp_gala/osp_preview.png"

import osp2025 from "../images/album/2025/kayak/kayak_preview.png"
import cw2025 from "../images/album/2025/charity_week/cw_preview.png"
import kyk2025 from "../images/album/2025/osp/osp_preview.png"


const Gallery = () => {

    const [yearIndex, setYearIndex] = useState(2025);

    const slideData = {
        2025: (
            <div className="gallery-preview-container">
                <Link smooth to="/album-2025#osp">
                    <div className="preview" id="">
                        <img src={osp2025} alt="OSP Gala"></img>
                    </div>
                </Link>
                <Link smooth to="/album-2025#cw">
                    <div className="preview" id="">
                        <img src={cw2025} alt="Charity Week"></img>
                    </div>
                </Link>
                <Link smooth to="/album-2025#kyk">
                    <div className="preview" id="">
                        <img src={kyk2025} alt="Kayaking"></img>
                    </div>
                </Link>
            </div>
        ),
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
                <Link smooth to="/album-2023#osp">
                    <div className="preview" id="">
                        <img src={osp2023} alt="OSP Gala"></img>
                    </div>
                </Link>
                <Link smooth to="/album-2023#cw">
                    <div className="preview" id="">
                        <img src={cw2023} alt="Charity Week"></img>
                    </div>
                </Link>
                <Link smooth to="/album-2023#bf">
                    <div className="preview" id="">
                        <img src={bonfire2023} alt="Bonfire"></img>
                    </div>
                </Link>
            </div>
        )
    }
    return(
        <section id="gallery-home">
            <div className="gallery-home-content">
                <h2 className="gallery-title">MSA Photo Gallery</h2>

                <div className="gallery-year-container">
                    <div className="gallery-preview-btn-container">
                        <button className={`gallery-year-btn ${yearIndex == 2025 ? 'selected-btn': ''}`} onClick={() => setYearIndex(2025)}>2025</button>
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