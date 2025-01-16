import React, { useState, useEffect } from "react";
import "../styles/osp_banner.css";

// Milestones
import milestone1 from "../images/osp_milestone1.png"
import milestoneQmark from "../images/milestoneQMarks.png"

const Osp_Banner = () => {
    return(
        <section id="osp_banner">
            <h2 className="title">Weekly Progress</h2>
            <div className="osp-banner-content">
                <div className="challenge-container">
                    <h2>WEEK 1</h2>
                    <div className="challenge-img current-challenge">
                        <img alt="OSP milestone image" src={milestone1}></img>
                    </div>
                </div>

                <div className="challenge-container">
                    <h2>WEEK 2</h2>
                    <div className="challenge-img">
                        <img alt="OSP milestone image" src={milestoneQmark}></img>
                    </div>
                </div>

                <div className="challenge-container">
                    <h2>WEEK 3</h2>
                    <div className="challenge-img">
                        <img alt="OSP milestone image" src={milestoneQmark}></img>
                    </div>
                </div>

                <div className="challenge-container">
                    <h2>WEEK 4</h2>
                    <div className="challenge-img">
                        <img alt="OSP milestone image" src={milestoneQmark}></img>
                    </div>
                </div>
            </div>
            

        </section>
    );
}

export default Osp_Banner