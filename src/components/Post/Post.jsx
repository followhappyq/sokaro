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
          {post.caption.slice(0, post.caption.indexOf("#"))}
        </a>
      </div>
      <div className="post__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora
        dolore quia cupiditate excepturi, enim corrupti id assumenda expedita
        dolorum error ipsam animi! Dolore sit reiciendis unde libero, aut
        possimus!Maxime maiores, quae vero enim tempore veniam nam aliquid
        explicabo obcaecati. Blanditiis eius fuga rem reprehenderit obcaecati
        temporibus excepturi natus voluptate? Cumque odit blanditiis corporis
        aliquid quibusdam consequatur ut laboriosam?
      </div>
      <Social />
    </div>
  )
}

export default Post
