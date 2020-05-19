import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { Slider as BaseSlider } from "../../components"

const Slider = ({ content }) => {
  const [currentSlider, setCurrentSlider] = useState(0)

  const onChangeCurrentSlider = () => {
    setCurrentSlider((currentSlider) => currentSlider + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      onChangeCurrentSlider()
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const slides = content.map((item) => {
    return {
      key: Math.random(),
      content: <img src={item.thumbnailUrl} alt="slide" />,
    }
  })

  return <BaseSlider content={slides} currentSlide={currentSlider} />
}

export default connect(({ content }) => ({ content: content.content }))(Slider)
