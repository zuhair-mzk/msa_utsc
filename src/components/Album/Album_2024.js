import "../../styles/album.css"
import React, { useEffect, useState } from "react"
import osp_image1 from "../../images/album/album_pic_2024_osp1.png"
import osp_image2 from "../../images/album/album_pic_2024_osp2.png"
import osp_image3 from "../../images/album/album_2024_pic_osp3.png"
import osp_image4 from "../../images/album/album_2024_pic_osp4.png"

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
            <div className="test-image" id="image1">

            </div>
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

    const osp_images = [
        {"image": (
            <img src={osp_image1}></img>
        )},
        {"image": (
            <img src={osp_image2}></img>
        )},
        {"image": (
            <img src={osp_image3}></img>
        )},
        {"image": (
            <img src={osp_image4}></img>
        )}
    ]
    return(
        <section id="album">
            <h2 className="title">Photo Album</h2>
            <div className="album-content" id="osp">
                <h2 className="title2">OSP Gala</h2>
                <div className="view-container">
                    <div className="main-image">
                        {osp_images[mainImageIndex1]["image"]}
                    </div>

                </div>
                    <ul className="scroll-list">
                        {osp_images.map((image) => (
                            <li>
                                <div className="scroll-image-box" onClick={() => setMainImageIndex1(osp_images.indexOf(image))}>
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