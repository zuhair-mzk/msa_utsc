import React, { useState, useEffect } from "react";
import "../styles/osp_banner.css";

const Osp_Banner = () => {
    return(
        <section id="osp_banner">
            <h2 className="title">Milestone Challenges</h2>
            <div className="osp-banner-content">
                <div className="challenge-container">
                    <p>Upcoming...</p>
                    <div className="challenge-img current-challenge">

                    </div>
                    <p className="challenge-complete">$1000</p>

                </div>

                <div className="challenge-container">
                    <p>Upcoming...</p>
                    <div className="challenge-img">

                    </div>
                    <p className="challenge-complete">$3000</p>

                </div>

                <div className="challenge-container">
                    <p>Upcoming...</p>
                    <div className="challenge-img">

                    </div>
                    <p className="challenge-complete">$5000</p>

                </div>
            </div>
            

        </section>
    );
}

export default Osp_Banner