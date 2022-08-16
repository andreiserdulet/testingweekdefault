import * as React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './index.css';
import SwiperCard from "../../Swiper-Card/SwiperCard";
import { swiperObj } from "../../../data/data";
import person11 from '../../../assets/person11.jpg';

export function Bug04() {

    const [isActive, setIsActive] = React.useState(false);
    React.useEffect(()=>{
        let interval = setInterval(()=>{
            return swiperObj.push({
                id:Math.random(),
                name: 'Alexandru Tomescu',
                jobTitle: 'Test Management- Core Team',
                description: 'To infinity and beyond',
                img: person11
            })
        }, isActive ? 1000 : 500);

        return () => clearInterval(interval);

    },[swiperObj, isActive]);
    console.log('Nice try seems like you are a professional');
    return (
        <>
            <h2 style={{textAlign:'center', paddingTop:'24px'}}>Members of the community</h2>
            <Swiper
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1050: {
                        slidesPerView: 3
                    }
                }}
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={()=> {
                    setIsActive(!isActive);
                }}
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