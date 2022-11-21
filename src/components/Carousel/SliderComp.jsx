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
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={4}
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
                                    <img className='venueImg' src={data.imgUrl} alt="" />
                                    <div className="location">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span>{data.address[0].venue}</span>
                                    </div>
                                    <p className="venue">{data.address[0].venue}</p>
                                    <p className="location_detail">{data.about.length > 100 ? `${data.about.substring(0, 70)}...` : data.about}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Item>
                ))}
            </Swiper>
        </>
    );
}