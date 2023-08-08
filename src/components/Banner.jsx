import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="overflow-hidden my-20 " >
      <Slider {...settings}>
        <div className=" w-20">
          <img src="../../public/Images/img1.jpeg"  className=" h-80 w-full"/>
        </div>
        <div className=" w-20">
          <img src="../../public/Images/img2.jpeg" className=" h-80 w-full "/>
        </div>
        <div className=" w-20">
          <img src="../../public/Images/img3.jpeg" className=" h-80 w-full" />
        </div>
        <div className=" w-20">
          <img src="../../public/Images/img4.jpeg"  className=" h-80 w-full"/>
        </div>
        {/* <div className=" w-20">
          <img src="#"  className=" h-80 w-full"/>
        </div>  <div className=" w-20">
          <img src="#"  className="  h-80 w-full"/>
        </div>  <div className=" w-20">
          <img src="#"  className="  h-80 w-full"/>
        </div>  <div className=" w-20">
          <img src="#"  className="  h-80 w-full"/>
        </div> */}
        
      </Slider>
    </div>
  );
};

export default Banner;
