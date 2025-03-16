import React, { useState } from "react";
import "../styles/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping
} from "@fortawesome/free-solid-svg-icons";

const Modal = () => {

    const [modal, setModal] = useState(false)
    
    const toggleModal = () => {
        console.log(modal) 
        setModal(!modal)
    }
    return(
        <>
            <a onClick={toggleModal} className="donate-btn">
                <FontAwesomeIcon icon={faHandsHelping} />
                Donate
            </a>
            {modal &&(
            <div className="modal">
                <div onClick={toggleModal} className="overlay">

                </div>
                
                <div className="modal-content">
                    <p>Modal Info</p>
                    <button onClick={toggleModal} className="close-modal">
                    Close
                     </button>

                </div>
            </div>
             )}
        </>
    )
}

export default Modal
