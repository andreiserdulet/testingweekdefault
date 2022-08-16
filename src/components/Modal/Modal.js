import * as React from 'react';
import {createPortal} from "react-dom";
import './index.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";
import Toast from "../Toast/Toast";
import monkey from '../../assets/monkey.png'
import giggle from '../../assets/giggle.png'
import sun from '../../assets/sun.gif';
import highfive from '../../assets/highfive.gif';
import pledgeface from '../../assets/pledgeface.png';
import marianbrinza from '../../assets/marian.jpg';
import MarianBrinza from "../Toast/MarianBrinza";

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

                <form className='modal__container-form'>
                    <label htmlFor='fname'>First Name:</label>
                    <input
                        type='text'
                        id='fname'
                        value={state.name}
                        onChange={(event) => setState({...state, name: event.target.value})}/>

                    <label htmlFor='lname'>Last Name:</label>
                    <input type='text' id='lname' value={state.name}
                           onChange={(event) => setState({...state, name: event.target.value})}/>

                    <label htmlFor='e-mail' >E-mail:</label>
                    <input type='email' id='e-mail' value={state.name}/>

                    <label htmlFor='message'>Message:</label>
                    <textarea id='message' placeholder='Only good things allowed!'/>

                    <button type='submit' onClick={(event)=> {
                        event.preventDefault();
                        setShowModal(false);
                        setShowToast(true);
                        toast.success('Your submit was a success!');
                        toast.error(<Toast img={giggle} text='Something went wrong...'/>, {
                            position: "top-right",
                            autoClose: 10000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        toast.error(<Toast img={sun} text='Everything has a solution...'/>, {
                            position: "top-right",
                            autoClose: 10000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                        toast.error(<Toast img={highfive} text='BUT you should count all these notifications as 1 bug'/>, {
                            position: "top-right",
                            autoClose: 10000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        toast.warning(<Toast img={monkey} text='One might be to consider a vacation'/>, {
                            position: "top-right",
                            autoClose: 10000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        toast.success(<Toast img={pledgeface} text='Good luck with the rest of the bugs'/> , {
                            position: "top-right",
                            autoClose: 10000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                        toast.info(<MarianBrinza img={marianbrinza} text='Mare branza!'/>, {
                            position: "top-right",
                            autoClose: 10000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }}>Submit</button>
                </form>
            </div>
        </div>
    )
}