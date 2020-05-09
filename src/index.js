import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import store from "./store"
import { App } from "./containers"
import "./index.scss"
import "./styles/page.scss"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
