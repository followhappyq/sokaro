import React from "react"

import { LastPost, MyCreations, Post } from "../"
import "./Main.scss"

const Main = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        <LastPost />
        <MyCreations />
        <div className="main-container__post-container">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default Main
