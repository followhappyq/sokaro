import React from "react"
import { Link } from "react-router-dom"

import "./HeaderMenu.scss"

const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <ul className="header-menu__list">
        <li className="header-menu__list-item">
          <Link to="/sokaro">HOME</Link>
        </li>
        <li className="header-menu__list-item">
          <Link to="/gallery">GALLERY</Link>
        </li>
        <li className="header-menu__list-item">
          <Link to="/contact">CONTACT US</Link>
        </li>
        <li className="header-menu__list-item">SHOP</li>
      </ul>
    </div>
  )
}

export default HeaderMenu
