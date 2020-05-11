import React, { useState, useEffect } from "react"
import axios from "axios"

import "./MyCreations.scss"

const MyCreations = () => {
  const [images, setImages] = useState([])
  const instagramRegExp = new RegExp(
    /<script type="text\/javascript">window\._sharedData = (.*);<\/script>/
  )

  const fetchInstagramPhotos = async (accountUrl) => {
    const response = await axios.get(accountUrl)
    console.log(response)
    const json = JSON.parse(response.data.match(instagramRegExp)[1])
    console.log(json)
    const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
      0,
      12
    )
    const photos = edges.map(({ node }) => {
      return {
        url: `https://www.instagram.com/p/${node.shortcode}/`,
        thumbnailUrl: node.thumbnail_src,
        displayUrl: node.display_url,
        caption: node.edge_media_to_caption.edges[0].node.text,
      }
    })

    return photos
  }

  useEffect(() => {
    /* fetchInstagramPhotos("https://www.instagram.com/sokarocraft/").then(
      (data) => {
        setImages(data)
      }
    ) */
    // eslint-disable-next-line
  }, [])
  return (
    <div className="my-creations">
      <div className="my-creations__header">
        <h3>my creations</h3>
      </div>
      <div className="my-creations__content">
        {images.map((image) => (
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
