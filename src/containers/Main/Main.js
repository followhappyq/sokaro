import React, { useEffect } from "react"
import { connect } from "react-redux"

import { Main as BaseMain } from "../../components"
import { contentActions } from "../../redux/actions"
import contentApi from "../../api/contentApi"

const Main = ({ fetchContent, content }) => {
  useEffect(() => {
    contentApi
      .fetchInstagramPhotos("https://www.instagram.com/sokarocraft/")
      .then((data) => {
        fetchContent(data)
      })
    // eslint-disable-next-line
  }, [])
  return <BaseMain posts={content} />
}

export default connect(
  ({ content }) => ({ content: content.content }),
  contentActions
)(Main)
