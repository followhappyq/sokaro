import React from "react"
import Carousel from "react-spring-3d-carousel"

import "./Slider.scss"

const Slider = ({ content, currentSlide }) => {
  return (
    <div className="carousel">
      <Carousel slides={content} offsetRadius={3} goToSlide={currentSlide} />
    </div>
  )
}

export default Slider
