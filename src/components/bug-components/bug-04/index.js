import * as React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './index.css';
import SwiperCard from "../../Swiper-Card/SwiperCard";
import { swiperObj } from "../../../data/data";

export function Bug04() {

    return (
        <>
            <h2 style={{textAlign:'center', paddingTop:'24px'}}> Testing Week Organizers </h2>
            <Swiper
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    1050: {
                        slidesPerView: 3
                    }
                }}
                spaceBetween={30}
                slidesPerView={3}
                onSwiper={(swiper) => console.log(swiper)}>
                { swiperObj.map((item) => {
                    return (

                        <SwiperSlide key={item.id}>
                            <SwiperCard sObj={item}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>

    )
}