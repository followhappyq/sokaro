import React from "react"

import { Social } from "../"
import "./Post.scss"

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__image">
        <img src={post.thumbnailUrl} alt="img" />
      </div>
      <div className="post__header">
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          My creation
        </a>
      </div>
      <div className="post__text">{post.caption}</div>
      <Social />
    </div>
  )
}

export default Post
