import * as React from 'react';
import './index.css'

export default function SwiperCard({sObj}) {
    const {id, name, jobTitle, description, img} = sObj;
    return (
            <div className='swiper__container'>
                <div className='swiper__header'>
                    <img src={img} alt={`image--${id}`} className='swiper__header-img'/>
                </div>
                <div className='swiper__body'>
                    <h1 className='swiper__body-name'>{ name }</h1>
                    <p className='swiper__body-title'> { jobTitle }</p>
                    <p className='swiper__body-description'> { description }</p>
                </div>
            </div>
    )
}