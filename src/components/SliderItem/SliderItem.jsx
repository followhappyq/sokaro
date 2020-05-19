import React from "react"

const SliderItem = ({ link }) => {
  return (
    <div className="carousel__item">
      <img src={link} alt="img" />
    </div>
  )
}

export default SliderItem
