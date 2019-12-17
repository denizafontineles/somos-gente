import React from "react";
import { Carousel } from "react-bootstrap";

import imageSlider from '../../../assets/RF2153825_Rohingya-Girls-Education-076.jpg'
import imageSlider1 from '../../../assets/children-306607_960_720.jpg'
import imageSlider3 from '../../../assets/crianças-separadas.png'

import './styles.css'

// import imageSlider2 from '../../../assets/maos-de-um-desabrigado-crianca-implorando-palma-implorando-mao_92256-79.jpg'


const Caroucel = () => (
  <div className="slider">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carrossel"
          src={imageSlider}
          alt="First slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carrossel"
          src={imageSlider1}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carrossel"
          src={imageSlider3}
          alt="Third slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Caroucel   