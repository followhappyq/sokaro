import React from "react"

import { Social } from "../"
import "./Post.scss"

const Post = () => {
  return (
    <div className="post">
      <div className="post__image">
        <img
          src="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c2.0.1436.1436a/s640x640/92694613_172235770522838_5300259745358794985_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=xJpJK8wc-RAAX96yFGT&oh=8c28aadecf38c4bb31290da4d790b532&oe=5EE34636"
          alt="img"
        />
      </div>
      <div className="post__header">Mask</div>
      <div className="post__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
        consequatur quidem cupiditate dignissimos, doloribus quis, assumenda
        nostrum ut porro fugiat deleniti! Optio ipsa voluptatibus eaque,
        aspernatur exercitationem aperiam tempora rerum?
      </div>
      <Social />
    </div>
  )
}

export default Post
