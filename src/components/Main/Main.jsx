import React from "react"

import { Post } from "../"
import { MyCreations, LastPost, TagCloud, Slider } from "../../containers"
import "./Main.scss"

const Main = ({ posts }) => {
  return (
    posts && (
      <div className="wrapper">
        <div className="main__carousel">
          <Slider />
        </div>
        <div className="main-container">
          <LastPost />
          <div className="main-container__sidebar">
            <MyCreations />
            <TagCloud tags={posts[0]} />
          </div>

          <div className="main-container__post-container">
            {posts.slice(1, 7).map((post) => (
              <Post post={post} key={Math.random()} />
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default Main
