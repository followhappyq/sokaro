import React from "react"
import { Icon, Image } from "semantic-ui-react"

import ImageSrc from "./assets/header-center-logo.png"
import { HeaderMenu } from "../"
import "./Header.scss"

const Header = ({ onSideBarVisible }) => {
  return (
    <div className="header-wrap">
      <div className="header-top">
        <div className="header-top__contacts">
          <ul className="header-top__contacts-list">
            <li className="item">
              <Icon name="mail outline" />
              SOKARO
            </li>
            <li className="item">
              <Icon name="call" rotated="clockwise" />
              +7 988 314 05 06
            </li>
          </ul>
        </div>
        <div className="header-top__social">
          <a
            href="https://pikabu.ru/@Sokaro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="facebook f" />
          </a>
          <a
            href="https://vk.com/teemkampy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="vk" />
          </a>
          <a
            href="https://www.instagram.com/sokarocraft/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="instagram" />
          </a>
        </div>
        <div className="header-top__button">
          <Icon name="plus" size="big" onClick={onSideBarVisible} />
        </div>
      </div>
      <div className="header-center">
        <div className="header-center__logo">
          <div className="header-center__logo-item">
            <Image src={ImageSrc} alt="SOKARO" />
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <HeaderMenu />
      </div>
    </div>
  )
}

export default Header
