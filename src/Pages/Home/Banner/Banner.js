import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from '../../../Assate/image/toolBanner.png';
import banner2 from '../../../Assate/image/toolBanner-2.png';
import banner3 from '../../../Assate/image/toolBanner-3.png';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              `url(${banner2})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            NO1 POWER TOOLS MANUFACTURER'S
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Tools & Materials
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Pro Tool Reviews provides power tool reviews and hand tool reviews and comparisons for the construction industry professional. Find information about tools and the world of commercial and residential construction.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Manufacturers and Companies in Bangladesh
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            The Best Scroll Saw
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              World's Largest Brand Marketplace. Choose Your Favorite Product and Order Now! Global Brands Coverage. 100% On-time Shipment Protection. Shop Online Today! Logistics Service.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            strategies deployed by the leading power tool
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Woodsmith's Hand Tool Headlines
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Tools in Action is an online publication dedicated to professional power tool reviews. Find helpful guides and information for professionals and homeowners information about power tools and OPE products. We review the latest in the tool world and report back to you.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
