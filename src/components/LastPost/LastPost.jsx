import React, { useEffect, useState } from "react"
import { Header } from "semantic-ui-react"

import posts from "../../data/posts.json"
import "./LastPost.scss"

const LastPost = () => {
  const [post, setPost] = useState()

  useEffect(() => {
    setPost(posts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return post ? (
    <div className="last-post">
      <img className="last-post__image" src={post.slice(-1)[0].image} alt="1" />
      <Header className="last-post__header" textAlign="center">
        {post.slice(-1)[0].title}
      </Header>
      <p className="last-post__text">{post.slice(-1)[0].text}</p>

      {console.log(post && post.slice(-1)[0])}
    </div>
  ) : (
    <div></div>
  )
}

export default LastPost
