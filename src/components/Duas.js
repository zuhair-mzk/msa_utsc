import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../styles/duas.css";
//IMAGES
import prayerDuaImage from "../images/Prayer Duas.png"
import praiseAllahDuaImage from "../images/Praise Allah Duas.png"
import knowledgeDuaImage from "../images/Knowledge Duas.png"
import distressDuaImage from "../images/Distress Duas.png"

const Duas = () => {

    return(
        <section id="duas">
            <h2 className="section-title">Duas</h2>
            <div className="category-container">
                <Link smooth to="/duas/prayer-duas" style={{ textDecoration: 'none' }}>
                    <div className="dua-card">
                        <div>
                            <img src={prayerDuaImage} alt="Prayer Duas Cover"></img>
                        </div>
                        <p>Duas for prayer</p>                    
                    </div>
                </Link>
                <Link smooth to="/duas/praising-Allah-duas" style={{ textDecoration: 'none' }}>
                    <div className="dua-card">
                        <div>
                            <img src={praiseAllahDuaImage} alt="Praise Allah Duas Cover"></img>
                        </div>
                        <p>Duas for praising Allah</p>
                    </div>
                </Link>
                <Link smooth to="/duas/knowledge-duas" style={{ textDecoration: 'none' }}>
                    <div className="dua-card">
                    <div>
                            <img src={knowledgeDuaImage} alt="Knowledge Duas Cover"></img>
                        </div>
                        <p>Duas for knowledge</p>
                    </div>
                </Link>
                <Link smooth to="/duas/distress-duas" style={{ textDecoration: 'none' }}>
                    <div className="dua-card">
                        <div>
                            <img src={distressDuaImage} alt="Distress Duas Cover"></img>
                        </div>
                        <p>Duas for distress</p>
                    </div>
                </Link>

            </div>

        </section>
    )
}
/*Dua categories
Prayer
Praising Allah
Knowledge
Distress*/

export default Duas