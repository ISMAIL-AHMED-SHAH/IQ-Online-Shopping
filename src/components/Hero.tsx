'use client';

import React from 'react'
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    }

    const slideData = [
        {
            id: 0,
            img: "/banner-1.jpg",
            title: "Trending Items",
            mainTitle: "WOMEN\u2019S LATEST FASHION SALE",  // Using Unicode for apostrophe
            price: "$20",
        },
        {
            id: 1,
            img: "/banner-2.jpg",
            title: "Trending Accessories",
            mainTitle: "WOMEN\u2019S LATEST FASHION SALE",  // Using Unicode for apostrophe
            price: "$15",
        },
        {
            id: 2,
            img: "/banner-3.jpg",
            title: "Sale Offer",
            mainTitle: "WOMEN\u2019S LATEST FASHION SALE",  // Using Unicode for apostrophe
            price: "$30",
        },
    ]
    
  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
            {slideData.map((item)=> (
                <Slide 
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
                />
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
