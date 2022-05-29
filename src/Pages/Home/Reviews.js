import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './Reviews.css';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
    const [reviews, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://frozen-dawn-70899.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews?.map(review =>
                        <SwiperSlide key={review._id}>
                            <div class="card bg-neutral text-neutral-content" style={{ height: "330px" }}>
                                <div class="card-body items-center text-center bg-[rgb(238, 254, 226)]">
                                    <div class="avatar">
                                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                                        </div>
                                    </div>
                                    <p>{review.name}</p>
                                    <div className="flex"><span></span> <FaStar className="icon-style" /> <FaStar className="icon-style" /> <FaStar className="icon-style" /> <FaStar className="icon-style" /> <FaStar className="icon-style" /></div>
                                    <div class="justify-end">
                                        <h2>{review.review}</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default Reviews;