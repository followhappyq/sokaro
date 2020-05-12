import React from "react"
import { connect } from "react-redux"

import { LastPost as BaseLastPost } from "../../components"

const LastPost = ({ content }) => {
  return <BaseLastPost data={content[0]} />
}

export default connect(({ content }) => ({ content: content.content }))(
  LastPost
)
