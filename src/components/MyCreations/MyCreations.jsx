import React from "react"

import "./MyCreations.scss"

const MyCreations = ({ images }) => {
  return (
    <div className="my-creations">
      <div className="my-creations__header">
        <h3>my creations</h3>
      </div>
      <div className="my-creations__content">
        {images &&
          images.map((image) => (
            <a
              key={image.url}
              href={image.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="my-creations__content-image"
                src={image.thumbnailUrl}
                alt="1"
              />
            </a>
          ))}
      </div>
    </div>
  )
}

export default MyCreations
