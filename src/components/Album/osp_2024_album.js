import "../../styles/album.css"
import React, { useEffect, useState } from "react"

const OSP2024 = () => {

    const [mainImageIndex, setMainImageIndex] = useState(0)

    const images = [
        {"image":(
            <div className="test-image" id="image0"></div>
        )},
        {"image":(
            <div className="test-image" id="image1"></div>
        )},
        {"image":(
            <div className="test-image" id="image2"></div>
        )},
        {"image":(
            <div className="test-image" id="image3"></div>
        )},
        {"image":(
            <div className="test-image" id="image4"></div>
        )},
        {"image":(
            <div className="test-image" id="image5"></div>
        )},
        {"image":(
            <div className="test-image" id="image0"></div>
        )},
        {"image":(
            <div className="test-image" id="image1"></div>
        )},
        {"image":(
            <div className="test-image" id="image2"></div>
        )},
        {"image":(
            <div className="test-image" id="image3"></div>
        )},
        {"image":(
            <div className="test-image" id="image4"></div>
        )},
        {"image":(
            <div className="test-image" id="image5"></div>
        )}
    ]
    return(
        <section id="album">
            <div className="album-content">
                <h2>OSP Gala</h2>
                <div className="view-container">
                    <div className="other-previews-container">

                    </div>
                    <div className="main-image">
                        {images[mainImageIndex]["image"]}
                    </div>

                </div>
                    <ul className="scroll-list">
                        {images.map((image) => (
                            <li>
                                <div className="scroll-image-box" onClick={() => setMainImageIndex(images.indexOf(image))}>
                                 {image["image"]}
                                </div>
                            </li>
                        ))}
                    </ul>

            </div>
        </section>
    );
}

export default OSP2024