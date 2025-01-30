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
import osp_image1 from "../../images/album/2025/osp/osp0.jpeg"
import osp_image2 from "../../images/album/2025/osp/osp2.jpeg"
import osp_image3 from "../../images/album/2025/osp/osp3.jpeg"
import osp_image4 from "../../images/album/2025/osp/osp1.jpeg"
import osp_image5 from "../../images/album/2025/osp/osp5.jpeg"
import osp_image7 from "../../images/album/2025/osp/osp7.jpg"
import osp_image8 from "../../images/album/2025/osp/osp8.jpg"
import osp_image9 from "../../images/album/2025/osp/osp9.jpg"
import osp_image10 from "../../images/album/2025/osp/osp10.jpg"
import osp_image11 from "../../images/album/2025/osp/osp11.jpg"
import osp_image12 from "../../images/album/2025/osp/osp12.jpg"
import osp_image13 from "../../images/album/2025/osp/osp13.jpg"
import osp_image14 from "../../images/album/2025/osp/osp14.jpg"
import osp_image15 from "../../images/album/2025/osp/osp15.jpg"



//CW Images
import cw1 from "../../images/album/2025/charity_week/cw1.jpg"
import cw2 from "../../images/album/2025/charity_week/cw2.jpg"
import cw3 from "../../images/album/2025/charity_week/cw3.jpg"
import cw4 from "../../images/album/2025/charity_week/cw4.jpg"
import cw5 from "../../images/album/2025/charity_week/cw5.jpg"
import cw6 from "../../images/album/2025/charity_week/cw6.jpg"
import cw7 from "../../images/album/2025/charity_week/cw7.jpg"
import cw8 from "../../images/album/2025/charity_week/cw8.jpg"
import cw9 from "../../images/album/2025/charity_week/cw9.jpg"
import cw10 from "../../images/album/2025/charity_week/cw10.jpg"
import cw11 from "../../images/album/2025/charity_week/cw11.jpg"
import cw12 from "../../images/album/2025/charity_week/cw_auction.jpg"



//Kayak Images
import kyk1 from "../../images/album/2025/kayak/kayak1.png"
import kyk2 from "../../images/album/2025/kayak/kayak2.png"
import kyk3 from "../../images/album/2025/kayak/kayak3.png"
import kyk4 from "../../images/album/2025/kayak/kayak4.png"
import kyk5 from "../../images/album/2025/kayak/kayak5.png"
import kyk6 from "../../images/album/2025/kayak/kayak6.png"
import kyk7 from "../../images/album/2025/kayak/kayak7.jpg"
import kyk8 from "../../images/album/2025/kayak/kayak8.jpg"
import kyk9 from "../../images/album/2025/kayak/kayak9.jpeg"


const ALBUM2025 = () => {

    const [mainImageIndex1, setMainImageIndex1] = useState(0)
    const [mainImageIndex2, setMainImageIndex2] = useState(0)
    const [mainImageIndex3, setMainImageIndex3] = useState(0)
    const [mainImageIndex4, setMainImageIndex4] = useState(0)

    const [slidePlayer1, setSlidePlayer1] = useState(true)
    const [slidePlayer2, setSlidePlayer2] = useState(true)
    const [slidePlayer3, setSlidePlayer3] = useState(true)
    const [slidePlayer4, setSlidePlayer4] = useState(true)

    const kayak_images = [
        {"image": (
            <img alt="Kayak Photo" src={kyk1}></img>
        )},
        {"image": (
            <img alt="Kayak Photo" src={kyk2}></img>
        )},
        {"image": (
            <img alt="Kayak Photo" src={kyk3}></img>
        )},
        {"image": (
            <img alt="Kayak Photo" src={kyk4}></img>
        )},
        {"image": (
            <img alt="Kayak Photo" src={kyk5}></img>
        )},
        {"image": (
            <img alt="Kayak Photo" src={kyk6}></img>
        )},
        {"image": (
            <img alt="Kayak Photo" src={kyk7}></img>
        )},
        {"image": (
            <img alt="Kayak Photo" src={kyk8}></img>
        )},
        {"image": (
            <img alt="Kayak Photo" src={kyk9}></img>
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
            <img alt="OSP Photo" src={osp_image8}></img>
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
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image14}></img>
        )},
        {"image": (
            <img alt="OSP Photo" src={osp_image15}></img>
        )},
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
            const interval3 = setInterval(() => changeSlide(kayak_images, 3), 5000);
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

            <div className="album-content" id="kyk">
                <h2 className="title2">Kayaking Trip</h2>
                <div className="view-container">
                    <div className="main-image">
                        {kayak_images[mainImageIndex3]["image"]}
                    </div>

                </div>
                <div className="playback-button">
                    <button onClick={()=>reverseSlide(kayak_images,3)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button onClick={()=> slidePlayer3 ? setSlidePlayer3(false) : setSlidePlayer3(true)}>{ slidePlayer3 ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
                    <button onClick={()=>changeSlide(kayak_images,3)}><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                    <ul className="scroll-list">
                        {kayak_images.map((image) => (
                            <li>
                                <div className="scroll-image-box" onClick={() => setMainImageIndex3(kayak_images.indexOf(image))}>
                                 {image["image"]}
                                </div>
                            </li>
                        ))}
                    </ul>

            </div>
            
        </section>
    );
}

export default ALBUM2025