import React from "react"
import { Menu, Sidebar, Image, Icon } from "semantic-ui-react"

import "./SideBar.scss"

const SideBar = ({ animation, direction, isVisible, onSideBarVisible }) => {
  return (
    <Sidebar
      as={Menu}
      animation={animation}
      direction={direction}
      icon="labeled"
      inverted
      vertical
      visible={isVisible}
      width="wide"
      className="sidebar-menu"
    >
      <Icon
        name="close"
        size="big"
        className="sidebar-menu-close"
        onClick={onSideBarVisible}
      />
      <div className="sidebar-menu__image">
        <Image src="./assets/images/sokaro.jpg" size="medium" circular />
      </div>
      <div className="sidebar-menu__description">Like to create things...</div>
      <div className="sidebar-menu__social">
        <a
          href="https://pikabu.ru/@Sokaro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="facebook f" size="big" />
        </a>
        <a
          href="https://vk.com/teemkampy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="vk" size="big" />
        </a>
        <a
          href="https://www.instagram.com/teemkampy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" size="big" />
        </a>
      </div>
    </Sidebar>
  )
}

export default SideBar
