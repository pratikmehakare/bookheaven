// AutoSliderPage.js
import React, { useEffect, useState } from 'react';
import './CarouselPage.css'; // Import your CSS file


const CarouselPage = () => {
  // Sample data for the slider items (replace with your own data)
  const sliderItems = [
    'https://www.professionalbookhouse.com/image/cache/catalog/slideshow/banner2-1920x450.jpg',
    'https://www.professionalbookhouse.com/image/cache/catalog/slideshow/banner3-1920x450.jpg',
  
    'https://www.professionalbookhouse.com/image/cache/catalog/banner1_professional-1920x450.jpg'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(intervalId);
  });

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + sliderItems.length) % sliderItems.length
    );
  };

  return (
    <div>
      
      <section className="auto-slider-page">
        <div className="auto-slider-content">
         
          <div className="auto-slider">
            <button className="slider-control" onClick={prevSlide}>
              &lt;
            </button>
            <img
              className="auto-slider-image"
              src={sliderItems[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
            />
            <button className="slider-control" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselPage;
