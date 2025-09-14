import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const banners = [
  "https://rukminim1.flixcart.com/fk-p-flap/1010/490/image/1294293c77c4c11e.jpeg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/800/390/image/d376eef0550ae4f2.jpg?q=90",
  "https://rukminim1.flixcart.com/fk-p-flap/1010/490/image/3f9204b1a54b0310.jpg?q=90",
];

function BannerCarousel() {
  const settings = {
    dots: true,          // small dots below
    infinite: true,      // infinite loop
    autoplay: true,      // auto slide
    autoplaySpeed: 5000, // time between slides (ms)
    pauseOnHover: false, // do not pause on hover
    speed: 1000,         // transition speed
    slidesToShow: 1,     // show one image at a time
    slidesToScroll: 1,
    appendDots: dots => (
      <div className="w-full mt-6 z-20">
        <ul className="flex justify-center items-center gap-2 p-0 m-0">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2 h-2 rounded-full bg-gray-800 mx-1" />
    )
  };

  return (
  <div className="overflow-hidden w-full h-[400px] md:h-[600px] lg:h-[800px] relative bg-white">
      <Slider {...settings}>
        {banners.map((src, i) => (
          <div key={i} className="px-5 h-full flex items-center justify-center">
            <img
              src={src}
              alt="banner"
              className="w-full h-full object-contain shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerCarousel;
