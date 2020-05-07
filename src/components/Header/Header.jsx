import React from "react"
import { Icon } from "semantic-ui-react"

import { SideBar } from "../"
import "./Header.scss"

const Header = () => {
  return (
    <div className="header-top">
      <div className="header-top__social">
        <Icon name="facebook f" />
        <Icon name="vk" />
        <Icon name="instagram" />
      </div>
      <div className="header-top__button"></div>
    </div>
  )
}

export default Header
