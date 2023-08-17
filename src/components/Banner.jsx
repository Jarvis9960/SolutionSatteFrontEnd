import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="overflow-hidden mb-20 ">
      <Slider {...settings}>
        <div className="">
          <img
            src="../../public/Images/bannerOne.jpeg"
            className="w-full h-screen md:h-96 sm:h-96 xs:h-80 xxs:h-80"
          />
        </div>
        <div className="">
          <img
            src="../../public/Images/bannerTwo.jpeg"
            className="w-full h-screen md:h-96 sm:h-96 xs:h-80 xxs:h-80"
          />
        </div>
        <div className="">
          <img
            src="../../public/Images/bannerThree.jpeg"
            className="w-full h-screen md:h-96 sm:h-96 xs:h-80 xxs:h-80"
          />
        </div>
        <div className="">
          <img
            src="../../public/Images/bannerFour.jpeg"
            className="w-full h-screen md:h-96 sm:h-96 xs:h-80 xxs:h-80"
          />
        </div>
        {/* <div className=" ">
          <img src="#"  className=" h-80 w-full"/>
        </div>  <div className=" ">
          <img src="#"  className="  h-80 w-full"/>
        </div>  <div className=" ">
          <img src="#"  className="  h-80 w-full"/>
        </div>  <div className=" ">
          <img src="#"  className="  h-80 w-full"/>
        </div> */}
      </Slider>
    </div>
  );
};

export default Banner;
