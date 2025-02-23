import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../styles/duas.css";

const Duas = () => {

    return(
        <section id="duas">
            <h2 className="section-title">Duas</h2>
            <div className="category-container">
                <Link smooth to="/duas/prayer-duas">
                    <div className="dua-card">
                        {/* <img></img> */}
                    </div>
                </Link>
                <Link smooth to="/duas/praising-Allah-duas">
                    <div className="dua-card">
                        {/* <img></img> */}
                    </div>
                </Link>
                <Link smooth to="/duas/knowledge-duas">
                    <div className="dua-card">
                        {/* <img></img> */}
                    </div>
                </Link>
                <Link smooth to="/duas/distress-duas">
                    <div className="dua-card">
                        {/* <img></img> */}
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