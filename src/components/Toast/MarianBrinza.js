import * as React from "react";
import './Toast.css';

export default function MarianBrinza({img, text}) {
    return (
        <div className='toast__container'>
            <img src={img} alt={'name'} className='toast__img02'/>
            <p className='toast__text'>{text}</p>
        </div>
    )
}