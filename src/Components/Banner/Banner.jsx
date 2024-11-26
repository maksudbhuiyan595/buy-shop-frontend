import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    image: '/anton-malanin-FVJbRdb-QzY-unsplash.jpg',
    title: 'Welcome to MyWebsite',
    subtitle: 'Discover amazing products and services',
    buttonText: 'Shop Now',
  },
  {
    image: '/antonin-fels-OdqmOsUgNwk-unsplash.jpg',
    title: 'Exclusive Deals',
    subtitle: 'Get the best offers only here',
    buttonText: 'Explore More',
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="relative w-full max-h-[420px] overflow-hidden bg-gray-200">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full max-h-[420px] relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold">{slide.title}</h1>
                <p className="mt-2 text-sm sm:text-base">{slide.subtitle}</p>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
