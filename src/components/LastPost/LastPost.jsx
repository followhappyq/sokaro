import React from "react"
import { Header } from "semantic-ui-react"

import { Social } from "../"
import "./LastPost.scss"

const LastPost = ({ data }) => {
  return data ? (
    <div className="last-post">
      <img className="last-post__image" src={data.thumbnailUrl} alt="1" />
      <Header className="last-post__header" textAlign="center">
        {data.caption.slice(0, data.caption.indexOf("#"))}
      </Header>
      <p className="last-post__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        corporis qui dolore pariatur incidunt nostrum cupiditate reiciendis
        aspernatur expedita consequuntur, magnam hic obcaecati quis tenetur
        deleniti id? Delectus, cumque quisquam?Facilis itaque libero sit soluta
        facere. Voluptatibus dolorem aliquid voluptate fugit animi.
        Necessitatibus praesentium in, sint sequi repellendus nobis atque
        delectus magnam odio debitis corporis, provident blanditiis similique
        ea. Neque.
      </p>
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="last-post__button"
      >
        VIEW POST
      </a>
      <Social />
    </div>
  ) : (
    <div></div>
  )
}

export default LastPost
