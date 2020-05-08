import React from "react"
import { connect } from "react-redux"

import { SideBar as BaseSideBar } from "../../components/"
import { sideBarActions } from "../../redux/actions"

const SideBar = ({ isVisible, sideBarVisible }) => {
  const onSideBarVisible = () => {
    sideBarVisible(!isVisible)
  }
  return (
    <BaseSideBar
      onSideBarVisible={onSideBarVisible}
      isVisible={isVisible}
      animation="uncover"
      direction="right"
    />
  )
}

export default connect(
  ({ sidebar }) => ({ isVisible: sidebar.isVisible }),
  sideBarActions
)(SideBar)
