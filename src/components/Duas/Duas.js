import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../../styles/duas/duas.css";
//IMAGES
import prayerDuaImage from "../../images/Prayer Duas.png"
import praiseAllahDuaImage from "../../images/Praise Allah Duas.png"
import knowledgeDuaImage from "../../images/Knowledge Duas.png"
import distressDuaImage from "../../images/Distress Duas.png"

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

            {/* <div className="dawah-container">
                <div className="dawah-title-container">
                    <h2>Da'wah</h2>
                    <p>Here is a video of our Da'wah training session with the Muslim Hub Club.</p>
                </div>
                
                <div className="dawah-video">
                    <iframe
                     width="1210"
                     height="681"
                     src="https://www.youtube.com/embed/r74JkBnqQSU"
                     title="Da&#39;wah Training with MuslimHubClub!" 
                     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                     referrerpolicy="strict-origin-when-cross-origin" 
                     allowfullscreen>

                     </iframe>
                </div>

            </div> */}

        </section>
    )
}
/*Dua categories
Prayer
Praising Allah
Knowledge
Distress

Sources:
https://theislamicworkplace.com/2012/03/03/dua-for-studying-or-seeking-knowledge-and-taking-exams
// 
// 
// */

export default Duas