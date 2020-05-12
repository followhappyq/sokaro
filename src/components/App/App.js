import React from "react"
import { Segment, Sidebar } from "semantic-ui-react"

import { Header, SideBar as BaseSideBar, Main } from "../../containers"
import { Footer } from "../"
import "./App.scss"

const App = ({ isVisible }) => {
  return (
    <div className="App">
      <Sidebar.Pushable as={Segment}>
        <BaseSideBar />
        <Sidebar.Pusher dimmed={isVisible}>
          <Segment basic style={{ padding: 0 }}>
            <Header />
            <Main />
            <Footer />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

export default App
