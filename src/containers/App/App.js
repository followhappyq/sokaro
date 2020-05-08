import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { App as BaseApp } from "../../components"
import { sideBarActions } from "../../redux/actions"

const App = ({ isVisible }) => {
  return <BaseApp isVisible={isVisible} />
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(sideBarActions, dispatch),
})

export default connect(
  ({ sidebar }) => ({ isVisible: sidebar.isVisible }),
  mapDispatchToProps
)(App)
