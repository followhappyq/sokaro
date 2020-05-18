import React from "react"
import { Segment, Sidebar } from "semantic-ui-react"
import { Switch, Route } from "react-router-dom"

import { Header, SideBar as BaseSideBar, Main } from "../../containers"
import { Footer, Contact, Gallery } from "../"
import "./App.scss"

const App = ({ isVisible }) => {
  return (
    <div className="App">
      <Sidebar.Pushable as={Segment}>
        <BaseSideBar />
        <Sidebar.Pusher dimmed={isVisible}>
          <Segment basic style={{ padding: 0 }}>
            <Header />
            <Switch>
              <Route exact path={["/sokaro", "/"]}>
                <Main />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/gallery">
                <Gallery />
              </Route>
            </Switch>
            <Footer />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

export default App
