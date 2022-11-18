import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import { Item } from '../Dashboard/ConstData';

import './sliderComp.css';

export function SliderComp({ venue }) {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                slidesPerGroup={5}
                loop={false}
                loopFillGroupWithBlank={false}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {venue.map((data) => (
                    <Item>
                        <SwiperSlide>
                            <div className='flex'>
                                <div>
                                    <img className='venueImg' height="230px" width="310px" src={data.imgUrl} alt="" />
                                    <h5>{data.address[0].venue}</h5>
                                    <p>{data.about.length > 100 ? `${data.about.substring(0, 75)}...` : data.about}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Item>
                ))}
                {/* <SwiperSlide><h1>hello</h1></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
}