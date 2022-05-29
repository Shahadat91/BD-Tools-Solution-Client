import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner6 from '../../Images/Banner/banner6.jpg';
import banner5 from '../../Images/Banner/banner5.jpg';

const Banner = () => {
    return (
      <Carousel>
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner5}
          alt="Second slide"
        />
      </Carousel.Item>
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner6}
          alt="Third slide"
        />
      </Carousel.Item>
            </Carousel>
    );
};

export default Banner;