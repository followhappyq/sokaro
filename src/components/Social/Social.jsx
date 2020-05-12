import React from "react"
import { Icon } from "semantic-ui-react"

import "./Social.scss"

const Social = () => {
  return (
    <div className="social">
      <h3>
        <a
          href="https://pikabu.ru/@Sokaro"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <span>Pikabu?</span>
          <Icon name="facebook f" size="large" />
        </a>
        <a
          href="https://vk.com/teemkampy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>VK</span>
          <Icon name="vk" size="large" />
        </a>
        <a
          href="https://www.instagram.com/sokarocraft/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Instagram</span>
          <Icon name="instagram" size="large" />
        </a>
      </h3>
    </div>
  )
}

export default Social
