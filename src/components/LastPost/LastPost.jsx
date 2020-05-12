import React from "react"
import { Header } from "semantic-ui-react"

import { Social } from "../"
import "./LastPost.scss"

const LastPost = ({ data }) => {
  return data ? (
    <div className="last-post">
      <img className="last-post__image" src={data.thumbnailUrl} alt="1" />
      <Header className="last-post__header" textAlign="center">
        My last creation
      </Header>
      <p className="last-post__text">
        {data.caption.slice(0, data.caption.indexOf("#"))}
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
