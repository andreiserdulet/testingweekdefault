import * as React from 'react';
import {createPortal} from "react-dom";
import './index.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";

export default function Modal({showModal, setShowModal, showToast, setShowToast}) {
    return createPortal(<ModalContent
        showModal={showModal}
        setShowModal={setShowModal}
        showToast={showToast}
        setShowToast={setShowToast}
    />, document.getElementById('modal'));
}

function ModalContent({showModal, setShowModal, showToast, setShowToast}) {

    const [state, setState] = React.useState({
        name: '',
        lastName:'',
        email: '',
    })


    return (
        <div className='modal__container'>
            <div className='modal__container-body'>
                <div className='modal__container-head'>
                    <button onClick={()=> setShowModal(false)}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                    <h1>Feedback form</h1>
                </div>

                <form className='modal__container-form' onSubmit={(event)=> {
                    event.preventDefault();
                    setShowModal(false);
                    setShowToast(true);
                    toast.success('Your submit was a success!');
                }}>
                    <label htmlFor='fname'>First Name:</label>
                    <input
                        type='text'
                        id='fname'
                        value={state.name}
                        onChange={(event) => setState({...state, name: event.target.value})}
                        placeholder='Write your first name'
                        required={true}
                    />

                    <label htmlFor='lname'>Last Name:</label>
                    <input type='text' id='lname' value={state.lastName}
                           onChange={(event) => setState({...state, lastName: event.target.value})}
                           required={true}
                           placeholder='Write your last name'
                    />

                    <label htmlFor='e-mail' >E-mail:</label>
                    <input type='email' id='e-mail' value={state.email}
                           onChange={(event) => setState({...state, email: event.target.value})}
                           required={true}
                           placeholder='Write your email adress'
                    />

                    <label htmlFor='message'>Message:</label>
                    <textarea id='message' placeholder='Only good things allowed!'/>

                    <button type='submit' >Submit</button>
                </form>
            </div>
        </div>
    )
}