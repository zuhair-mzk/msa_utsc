import React, { useState } from "react";
import "../styles/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ isMobile }) => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)
    return (
        <>
            {isMobile ? (
                <button onClick={toggleModal} className="dropdown-toggle">
                    Donate
                </button>
            ) : (
                <a onClick={toggleModal} className="donate-btn">
                    Donate
                </a>
            )}
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div style={{position:'relative',overflow:'hidden',height:'100%',width:'100%', maxHeight:'100%'}}><iframe title='Donation form powered by Zeffy' style={{position: 'absolute', border: 0, top:0,left:0,bottom:0,right:0,width:'100%',height:'100%'}} src='https://www.zeffy.com/embed/donation-form/donations-to-utsc-msa' allowpaymentrequest allowTransparency="true"></iframe></div>
                        <button onClick={toggleModal} className="close-modal">
                        <FontAwesomeIcon icon={faXmark} />
                         </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
