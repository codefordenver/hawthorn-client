import React from 'react'
import { Avatar } from './Avatar'

export const Post = (props) => {
  const imageUrl = `https://api.adorable.io/avatars/32/${Math.floor(Math.random() * 1000000000)}.png`

  return (
    <div className="media m-3 border-bottom border-gray">
      <Avatar imageUrl={imageUrl} />
      <div className="media-body">

        <p className="post-body">{props.body}</p>
      </div>
    </div>
  )
}
