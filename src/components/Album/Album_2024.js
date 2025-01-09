import "../../styles/album.css"
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faArrowLeft,
    faArrowRight,
    faPause
  } from "@fortawesome/free-solid-svg-icons";

//OSP Images
import osp_image1 from "../../images/album/2024/osp/pic1.png"
import osp_image2 from "../../images/album/2024/osp/pic2.png"
import osp_image3 from "../../images/album/2024/osp/pic3.png"
import osp_image4 from "../../images/album/2024/osp/pic4.png"
import osp_image5 from "../../images/album/2024/osp/pic5.png"
import osp_image6 from "../../images/album/2024/osp/pic6.png"
import osp_image7 from "../../images/album/2024/osp/pic7.png"
import osp_image8 from "../../images/album/2024/osp/pic8.png"
import osp_image9 from "../../images/album/2024/osp/pic9.png"
import osp_image10 from "../../images/album/2024/osp/pic10.png"
import osp_image11 from "../../images/album/2024/osp/pic11.png"
import osp_image12 from "../../images/album/2024/osp/pic12.png"
import osp_image13 from "../../images/album/2024/osp/pic13.png"

//CW Images
import cw1 from "../../images/album/2024/charity_week/charitygala1.png"
import cw2 from "../../images/album/2024/charity_week/charitygala2.png"
import cw3 from "../../images/album/2024/charity_week/charitygala3.png"
import cw4 from "../../images/album/2024/charity_week/charitygala4.png"
import cw5 from "../../images/album/2024/charity_week/charitygala5.png"
import cw6 from "../../images/album/2024/charity_week/cw6.png"
import cw7 from "../../images/album/2024/charity_week/cw7.png"
import cw8 from "../../images/album/2024/charity_week/cw8.png"
import cw9 from "../../images/album/2024/charity_week/cw9.png"
import cw10 from "../../images/album/2024/charity_week/cw10.png"
import cw11 from "../../images/album/2024/charity_week/cw11.png"
import cw12 from "../../images/album/2024/charity_week/cw12.png"
import cw13 from "../../images/album/2024/charity_week/cw13.png"
import cw14 from "../../images/album/2024/charity_week/cw14.png"
import cw15 from "../../images/album/2024/charity_week/cw15.png"

//GI Images
import gi1 from "../../images/album/2024/grand_iftaar/GrandIftar_1.png"
import gi2 from "../../images/album/2024/grand_iftaar/GrandIftar_2.png"
import gi3 from "../../images/album/2024/grand_iftaar/GrandIftar_3.png"
import gi4 from "../../images/album/2024/grand_iftaar/GrandIftar_4.png"
import gi5 from "../../images/album/2024/grand_iftaar/GrandIftar_5.png"
import gi6 from "../../images/album/2024/grand_iftaar/GrandIftar_6.png"
import gi7 from "../../images/album/2024/grand_iftaar/GrandIftar_7.png"
import gi8 from "../../images/album/2024/grand_iftaar/GrandIftar_8.png"
import gi9 from "../../images/album/2024/grand_iftaar/GrandIftar_9.png"
import gi10 from "../../images/album/2024/grand_iftaar/GrandIftar_10.png"
import gi11 from "../../images/album/2024/grand_iftaar/GrandIftar_11.png"
import gi12 from "../../images/album/2024/grand_iftaar/GrandIftar_12.png"
import gi13 from "../../images/album/2024/grand_iftaar/GrandIftar_13.png"
import gi14 from "../../images/album/2024/grand_iftaar/GrandIftar_14.png"
import gi15 from "../../images/album/2024/grand_iftaar/GrandIftar_15.png"
import gi16 from "../../images/album/2024/grand_iftaar/GrandIftar_16.png"
import gi17 from "../../images/album/2024/grand_iftaar/GrandIftar_17.png"
import gi18 from "../../images/album/2024/grand_iftaar/GrandIftar_18.png"
import gi19 from "../../images/album/2024/grand_iftaar/GrandIftar_19.png"

const OSP2024 = () => {

    const [mainImageIndex1, setMainImageIndex1] = useState(0)
    const [mainImageIndex2, setMainImageIndex2] = useState(0)
    const [mainImageIndex3, setMainImageIndex3] = useState(0)
    const [mainImageIndex4, setMainImageIndex4] = useState(0)

    const [slidePlayer1, setSlidePlayer1] = useState(true)
    const [slidePlayer2, setSlidePlayer2] = useState(true)
    const [slidePlayer3, setSlidePlayer3] = useState(true)
    const [slidePlayer4, setSlidePlayer4] = useState(true)

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
    ]

    const grand_iftaar_images = [
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi1}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi2}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi3}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi4}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi5}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi6}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi7}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi8}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi9}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi10}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi11}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi12}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi13}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi14}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi15}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi16}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi17}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi18}></img>
        )},
        {"image": (
            <img alt="Grand Iftaar Photo" src={gi19}></img>
        )}
    ]

    const osp_images = [
        {"image": (
            <img alt="OSP Photo" src={osp_image1}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image2}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image3}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image4}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image5}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image6}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image7}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image8}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image9}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image10}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image11}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image12}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image13}></img>
        )}
    ]

    const cw_images = [
        {"image": (
            <img alt="Charity Week Photo" src={cw1}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw2}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw3}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw4}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw5}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw6}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw7}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw8}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw9}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw10}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw11}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw12}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw13}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw14}></img>
        )},
        {"image": (
            <img alt="Charity Week Photo" src={cw15}></img>
        )}
    ]

    //playing the gallery
    useEffect(() => {
        if(slidePlayer1){
            const interval1 = setInterval(() => changeSlide(osp_images, 1), 5000);
            return () => clearInterval(interval1);
        }},[slidePlayer1])
    useEffect(()=>{
        if(slidePlayer2){
            const interval2 = setInterval(() => changeSlide(cw_images, 2), 5000);
            return () => clearInterval(interval2)
        }},[slidePlayer2])
    useEffect(()=>{
        if(slidePlayer3){
            const interval3 = setInterval(() => changeSlide(images, 3), 5000);
            return () => clearInterval(interval3)
        }},[slidePlayer3])
    useEffect(()=>{
        if(slidePlayer4){
            const interval4 = setInterval(() => changeSlide(grand_iftaar_images, 4), 5000);
            return () => clearInterval(interval4)
        }},[slidePlayer4])

    const changeSlide = (image_list,album_num) => {
        const len = image_list.length
        if (album_num === 1) {
            setMainImageIndex1(prevIndex => (prevIndex + 1) % len);
        } else if (album_num === 2) {
            setMainImageIndex2(prevIndex => (prevIndex + 1) % len);
        } else if (album_num === 3) {
            setMainImageIndex3(prevIndex => (prevIndex + 1) % len);
        } else if (album_num === 4) {
            setMainImageIndex4(prevIndex => (prevIndex + 1) % len);
        }
    }
    const reverseSlide = (image_list,album_num) => {
        const len = image_list.length
        if (album_num === 1) {
            setMainImageIndex1(prevIndex => (prevIndex - 1 + len) % len);
        } else if (album_num === 2) {
            setMainImageIndex2(prevIndex => (prevIndex - 1 + len) % len);
        } else if (album_num === 3) {
            setMainImageIndex3(prevIndex => (prevIndex - 1 + len) % len);
        } else if (album_num === 4) {
            setMainImageIndex4(prevIndex => (prevIndex - 1 + len) % len);
        }
    }



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
                <div className="playback-button">
                    <button onClick={()=>reverseSlide(osp_images,1)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button onClick={()=> slidePlayer1 ? setSlidePlayer1(false) : setSlidePlayer1(true)}>{ slidePlayer1 ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
                    <button onClick={()=>changeSlide(osp_images,1)}><FontAwesomeIcon icon={faArrowRight} /></button>
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
                        {cw_images[mainImageIndex2]["image"]}
                    </div>

                </div>
                <div className="playback-button">
                    <button onClick={()=>reverseSlide(cw_images,2)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button onClick={()=> slidePlayer2 ? setSlidePlayer2(false) : setSlidePlayer2(true)}>{ slidePlayer2 ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
                    <button onClick={()=>changeSlide(cw_images,2)}><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                    <ul className="scroll-list">
                        {cw_images.map((image) => (
                            <li>
                                <div className="scroll-image-box" onClick={() => setMainImageIndex2(cw_images.indexOf(image))}>
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
                <div className="playback-button">
                    <button onClick={()=>reverseSlide(images,3)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button onClick={()=> slidePlayer3 ? setSlidePlayer3(false) : setSlidePlayer3(true)}>{ slidePlayer3 ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
                    <button onClick={()=>changeSlide(images,3)}><FontAwesomeIcon icon={faArrowRight} /></button>
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
                        {grand_iftaar_images[mainImageIndex4]["image"]}
                    </div>

                </div>
                <div className="playback-button">
                    <button onClick={()=>reverseSlide(grand_iftaar_images,4)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button onClick={()=> slidePlayer4 ? setSlidePlayer4(false) : setSlidePlayer4(true)}>{ slidePlayer4 ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
                    <button onClick={()=>changeSlide(grand_iftaar_images,4)}><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                    <ul className="scroll-list">
                        {images.map((image) => (
                            <li>
                                <div className="scroll-image-box" onClick={() => setMainImageIndex4(grand_iftaar_images.indexOf(image))}>
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