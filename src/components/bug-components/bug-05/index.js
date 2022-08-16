import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Modal from '../../Modal/Modal';
import './index.css';
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export function Bug05() {

    const [showModal, setShowModal] = React.useState(false);
    const [showToast, setShowToast] = React.useState(false);

    return (
        <div className="bug05__container">
            <h2>Give us a feedback!</h2>
            <span onClick={()=> setShowModal(true)}><FontAwesomeIcon icon={faEnvelope}/></span>
            {showModal && <Modal
                setShowModal={setShowModal}
                showModal={showModal}
                setShowToast={setShowToast}
                showToast={showToast}
            />}
            {showToast && <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover/>}
        </div>
    )
}
