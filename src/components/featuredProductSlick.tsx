"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const FeaturedProductSlick = () => {
    // product Data
   
    const BestSell = useAppSelector((state)=>state.products.slice(0,9))
  //carosel Settings

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 id="shop"
          className="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-4
            capitalize text-center"
        >
          Featured products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-[100px] h-1 rounded-full bg-orange-500 inline-flex" />
        </div>
      </div>
      {/* Slick slider/carosel container*/}
      <Slider {...settings}>
      {
            BestSell.map((items:any,i) =>(
               <BestSellingCard 
                key={i}
                src={items.image[0]} 
                alt={items.title} 
                title={items.title}
                description={items.description} 
                price={items.price}
                category={items.category}
                slug={items.slug}
                discount={items.discount} />
            ))
          }
      </Slider>
    </div>
  );
};

export default FeaturedProductSlick;
