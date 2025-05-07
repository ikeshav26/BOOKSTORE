import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import Cards from './Cards';
import axios from 'axios';
import backendUri from '../config'
const FreeBook = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {

    const getBook=async()=>{
      try{
        const res =await axios.get(`${backendUri}/book`);

   
        setbook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);
  const filterData = book.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-base-100 max-w-screen shadow-sm mx-auto md:px-20 px-4">
        <h1 className="font-sembold pb-2 text-xl">Free offered courses</h1>
        <p>
          Discover our wide selection of free courses, thoughtfully designed to
          help you gain valuable skills, expand your knowledge, and achieve your
          personal or professional goals—no cost, no commitment.
        </p>
      </div>
      <div className="bg-base-100 max-w-screen shadow-sm mx-auto md:px-20 px-4 mb-16">
        <Slider {...settings}>
          {filterData.map((item, index) => {
            return <Cards key={index} item={item} />;
          })}
        </Slider>
      </div>
    </>
  );
};

export default FreeBook;
