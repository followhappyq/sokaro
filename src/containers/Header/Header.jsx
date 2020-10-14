import React from "react"
import { connect } from "react-redux"

import { Header as BaseHeader } from "../../components/"
import { sideBarActions } from "../../redux/actions"

const Header = ({ isVisible, sideBarVisible }) => {
  const onSideBarVisible = () => {
    sideBarVisible(!isVisible)
  }
  return <BaseHeader onSideBarVisible={onSideBarVisible} />
}

export default connect(
  ({ sidebar }) => ({ isVisible: sidebar.isVisible }),
  sideBarActions
)(Header)
