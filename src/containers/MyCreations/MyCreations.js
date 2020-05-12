import React from "react"
import { connect } from "react-redux"

import { MyCreations as BaseMyCreations } from "../../components"

const MyCreations = ({ content }) => {
  return <BaseMyCreations images={content} />
}

export default connect(({ content }) => ({ content: content.content }))(
  MyCreations
)
