import React from "react"

import "./TagCloud.scss"

const TagCloud = ({ tags }) => {
  console.log(tags)
  return (
    <div className="tag-cloud">
      <h3 className="tag-cloud__header">TAG CLOUD</h3>
      <ul className="tag-cloud__list">
        {tags.map(
          (tag) =>
            tag !== "" && (
              <li className="tag-cloud__list-item" key={Math.random()}>
                {tag}
              </li>
            )
        )}
      </ul>
    </div>
  )
}

export default TagCloud
