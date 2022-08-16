import * as React from 'react';
import './Toast.css';
import monkey from '../../assets/monkey.png'

export default function Toast({img, text}){


    return (
        <div className='toast__container'>
            <img src={img} alt={'name'} className='toast__img'/>
            <p className='toast__text'>{text}</p>
        </div>
    )
}

