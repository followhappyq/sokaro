import React from "react"
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react"

const SideBar = ({ visible }) => {
  return (
    <Sidebar
      as={Menu}
      animation="uncover"
      direction="right"
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </Sidebar>
  )
}

export default SideBar
