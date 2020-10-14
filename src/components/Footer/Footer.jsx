import React from "react"

import Img1Src from "./assets/1.jpg"
import Img2Src from "./assets/2.jpg"
import Img3Src from "./assets/3.jpg"
import Img4Src from "./assets/4.jpg"
import Img5Src from "./assets/5.jpg"
import Img6Src from "./assets/6.jpg"
import Img7Src from "./assets/7.jpg"
import Img8Src from "./assets/8.jpg"

import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer-line"></div>
      <div className="footer-instagram">
        <img src={Img1Src} alt="img1" className="footer-instagram__item" />
        <img src={Img2Src} alt="img2" className="footer-instagram__item" />
        <img src={Img3Src} alt="img3" className="footer-instagram__item" />
        <img src={Img4Src} alt="img4" className="footer-instagram__item" />
        <img src={Img5Src} alt="img5" className="footer-instagram__item" />
        <img src={Img6Src} alt="img6" className="footer-instagram__item" />
        <img src={Img7Src} alt="img7" className="footer-instagram__item" />
        <img src={Img8Src} alt="img8" className="footer-instagram__item" />
      </div>
      <div className="footer-info">
        <p>Copyrights &copy; 2020 SokaroCraft</p>
      </div>
    </footer>
  )
}

export default Footer
