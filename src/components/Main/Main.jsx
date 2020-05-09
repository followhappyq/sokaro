import React from "react"
import { Container } from "semantic-ui-react"

import { LastPost, MyCreations } from "../"
import "./Main.scss"

const Main = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        <LastPost />
        <MyCreations />
      </div>
    </div>
  )
}

export default Main
