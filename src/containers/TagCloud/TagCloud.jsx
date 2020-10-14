import React from "react"
import { Loader } from "semantic-ui-react"

import { TagCloud as BaseTagCloud } from "../../components"

const TagCloud = ({ tags }) => {
  return tags ? (
    <BaseTagCloud
      tags={
        tags.caption !== undefined
          ? tags.caption.slice(tags.caption.indexOf("#")).trim().split("#")
          : ["tag"]
      }
    />
  ) : (
    <Loader />
  )
}

export default TagCloud
