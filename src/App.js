import React from "react"

import { Header, SideBar } from "./components"

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar visible={true} />
    </div>
  )
}

export default App
