import React from "react"

import "./HeaderMenu.scss"

const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <ul className="header-menu__list">
        <li className="header-menu__list-item">HOME</li>
        <li className="header-menu__list-item">GALLERY</li>
        <li className="header-menu__list-item">CONTACT US</li>
        <li className="header-menu__list-item">SHOP</li>
      </ul>
    </div>
  )
}

export default HeaderMenu
