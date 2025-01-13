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
import osp_image1 from "../../images/album/2023/osp_gala/osp_pic1.png"
import osp_image2 from "../../images/album/2023/osp_gala/pic2.png"
import osp_image3 from "../../images/album/2023/osp_gala/pic3.png"
import osp_image4 from "../../images/album/2023/osp_gala/pic4.png"
import osp_image5 from "../../images/album/2023/osp_gala/pic5.png"
import osp_image6 from "../../images/album/2023/osp_gala/pic6.png"
import osp_image7 from "../../images/album/2023/osp_gala/pic7.png"
import osp_image8 from "../../images/album/2023/osp_gala/pic8.png"



//CW Images
import cw1 from "../../images/album/2023/charity_week/cw_pic1.png"
import cw2 from "../../images/album/2023/charity_week/pic2.png"
import cw3 from "../../images/album/2023/charity_week/pic3.png"
import cw4 from "../../images/album/2023/charity_week/pic4.png"
import cw5 from "../../images/album/2023/charity_week/pic5.png"
import cw6 from "../../images/album/2023/charity_week/pic6.png"
import cw7 from "../../images/album/2023/charity_week/pic7.png"
import cw8 from "../../images/album/2023/charity_week/pic8.png"
import cw9 from "../../images/album/2023/charity_week/pic9.png"
import cw10 from "../../images/album/2023/charity_week/pic10.png"
import cw11 from "../../images/album/2023/charity_week/pic11.png"
import cw12 from "../../images/album/2023/charity_week/pic12.png"



//Bonfire Images
import bf1 from "../../images/album/2023/bonfire/bonfire_pic1.png"
import bf2 from "../../images/album/2023/bonfire/pic2.png"
import bf3 from "../../images/album/2023/bonfire/bf_3.jpg"
import bf5 from "../../images/album/2023/bonfire/pic5.png"
import bf6 from "../../images/album/2023/bonfire/fireplace.jpg"
import bf7 from "../../images/album/2023/bonfire/pic7.png"
import bf8 from "../../images/album/2023/bonfire/pic8.png"
import bf9 from "../../images/album/2023/bonfire/pic9.png"
import bf4 from "../../images/album/2023/bonfire/IMG_20221021_170336141.jpg"


const ALBUM2023 = () => {

    const [mainImageIndex1, setMainImageIndex1] = useState(0)
    const [mainImageIndex2, setMainImageIndex2] = useState(0)
    const [mainImageIndex3, setMainImageIndex3] = useState(0)
    const [mainImageIndex4, setMainImageIndex4] = useState(0)

    const [slidePlayer1, setSlidePlayer1] = useState(true)
    const [slidePlayer2, setSlidePlayer2] = useState(true)
    const [slidePlayer3, setSlidePlayer3] = useState(true)
    const [slidePlayer4, setSlidePlayer4] = useState(true)

    const bonfire_images = [
        {"image": (
            <img alt="Bonfire Photo" src={bf1}></img>
        )},
        {"image": (
            <img alt="Bonfire Photo" src={bf2}></img>
        )},
        {"image": (
            <img alt="Bonfire Photo" src={bf3}></img>
        )},
        {"image": (
            <img alt="Bonfire Photo" src={bf4}></img>
        )},
        {"image": (
            <img alt="Bonfire Photo" src={bf5}></img>
        )},
        {"image": (
            <img alt="Bonfire Photo" src={bf6}></img>
        )},
        {"image": (
            <img alt="Bonfire Photo" src={bf7}></img>
        )},
        {"image": (
            <img alt="Bonfire Photo" src={bf8}></img>
        )},
        {"image": (
            <img alt="Bonfire Photo" src={bf9}></img>
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
            <img alt="OSP Photo" src={osp_image8}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image7}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image8}></img>
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
            const interval3 = setInterval(() => changeSlide(bonfire_images, 3), 5000);
            return () => clearInterval(interval3)
        }},[slidePlayer3])

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

            <div className="album-content" id="bf">
                <h2 className="title2">Bonfire</h2>
                <div className="view-container">
                    <div className="main-image">
                        {bonfire_images[mainImageIndex3]["image"]}
                    </div>

                </div>
                <div className="playback-button">
                    <button onClick={()=>reverseSlide(bonfire_images,3)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button onClick={()=> slidePlayer3 ? setSlidePlayer3(false) : setSlidePlayer3(true)}>{ slidePlayer3 ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
                    <button onClick={()=>changeSlide(bonfire_images,3)}><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                    <ul className="scroll-list">
                        {bonfire_images.map((image) => (
                            <li>
                                <div className="scroll-image-box" onClick={() => setMainImageIndex3(bonfire_images.indexOf(image))}>
                                 {image["image"]}
                                </div>
                            </li>
                        ))}
                    </ul>

            </div>
            
        </section>
    );
}

export default ALBUM2023