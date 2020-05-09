import React from "react"
import { Container } from "semantic-ui-react"

import { LastPost } from "../"
import "./Main.scss"
import { Instagram } from "../../containers"

const Main = () => {
  return (
    <Container className="main-container">
      <LastPost />
      <Instagram />
    </Container>
  )
}

export default Main
