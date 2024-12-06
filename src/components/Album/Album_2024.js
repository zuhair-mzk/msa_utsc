import "../../styles/album.css"
import React, { useEffect, useState } from "react"
import osp from "../../images/album/album_2024_osp.png"

const OSP2024 = () => {

    const [mainImageIndex1, setMainImageIndex1] = useState(0)
    const [mainImageIndex2, setMainImageIndex2] = useState(0)
    const [mainImageIndex3, setMainImageIndex3] = useState(0)
    const [mainImageIndex4, setMainImageIndex4] = useState(0)

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
            <h2 className="title">Photo Album</h2>
            <div className="album-content" id="osp">
                <h2 className="title2">OSP Gala</h2>
                <div className="view-container">
                    <div className="main-image">
                        {images[mainImageIndex1]["image"]}
                    </div>

                </div>
                    <ul className="scroll-list">
                        {images.map((image) => (
                            <li>
                                <div className="scroll-image-box" onClick={() => setMainImageIndex1(images.indexOf(image))}>
                                 {image["image"]}
                                </div>
                            </li>
                        ))}
                    </ul>

            </div>

            <div className="album-content" id="cw">
                <h2 className="title2">Charity Week</h2>
                <div className="view-container">
                    <div className="main-image">
                        {images[mainImageIndex2]["image"]}
                    </div>

                </div>
                    <ul className="scroll-list">
                        {images.map((image) => (
                            <li>
                                <div className="scroll-image-box" onClick={() => setMainImageIndex2(images.indexOf(image))}>
                                 {image["image"]}
                                </div>
                            </li>
                        ))}
                    </ul>

            </div>

            <div className="album-content" id="wd">
                <h2 className="title2">Welcome Day</h2>
                <div className="view-container">
                    <div className="main-image">
                        {images[mainImageIndex3]["image"]}
                    </div>

                </div>
                    <ul className="scroll-list">
                        {images.map((image) => (
                            <li>
                                <div className="scroll-image-box" onClick={() => setMainImageIndex3(images.indexOf(image))}>
                                 {image["image"]}
                                </div>
                            </li>
                        ))}
                    </ul>

            </div>

            <div className="album-content" id="gi">
                <h2 className="title2">Grand Iftaar</h2>
                <div className="view-container">
                    <div className="main-image">
                        {images[mainImageIndex4]["image"]}
                    </div>

                </div>
                    <ul className="scroll-list">
                        {images.map((image) => (
                            <li>
                                <div className="scroll-image-box" onClick={() => setMainImageIndex4(images.indexOf(image))}>
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