import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner6 from '../../Images/Banner/banner6.jpg';


const Banner = () => {
    return (
      <Carousel>
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