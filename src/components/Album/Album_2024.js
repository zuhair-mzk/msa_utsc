import "../../styles/album.css"
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faArrowLeft,
    faArrowRight,
    faPause
  } from "@fortawesome/free-solid-svg-icons";

import osp_image1 from "../../images/album/album_pic_2024_osp1.png"
import osp_image2 from "../../images/album/album_pic_2024_osp2.png"
import osp_image3 from "../../images/album/album_2024_pic_osp3.png"
import osp_image4 from "../../images/album/album_2024_pic_osp4.png"

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
        )},
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
        )},
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

    //playing the gallery
    useEffect(() => {
        if(slidePlayer1){
            const interval1 = setInterval(() => changeSlide(osp_images, 1), 5000);
            return () => clearInterval(interval1);
        }},[slidePlayer1])
    useEffect(()=>{
        if(slidePlayer2){
            const interval2 = setInterval(() => changeSlide(images, 2), 5000);
            return () => clearInterval(interval2)
        }},[slidePlayer2])
    useEffect(()=>{
        if(slidePlayer3){
            const interval3 = setInterval(() => changeSlide(images, 3), 5000);
            return () => clearInterval(interval3)
        }},[slidePlayer3])
    useEffect(()=>{
        if(slidePlayer4){
            const interval4 = setInterval(() => changeSlide(images, 4), 5000);
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
                        {images[mainImageIndex2]["image"]}
                    </div>

                </div>
                <div className="playback-button">
                    <button onClick={()=>reverseSlide(images,2)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button onClick={()=> slidePlayer2 ? setSlidePlayer2(false) : setSlidePlayer2(true)}>{ slidePlayer2 ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
                    <button onClick={()=>changeSlide(images,2)}><FontAwesomeIcon icon={faArrowRight} /></button>
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
                        {images[mainImageIndex4]["image"]}
                    </div>

                </div>
                <div className="playback-button">
                    <button onClick={()=>reverseSlide(images,4)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button onClick={()=> slidePlayer4 ? setSlidePlayer4(false) : setSlidePlayer4(true)}>{ slidePlayer4 ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
                    <button onClick={()=>changeSlide(images,4)}><FontAwesomeIcon icon={faArrowRight} /></button>
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