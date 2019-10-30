import React from 'react'
import { Avatar } from './Avatar'

export const Post = (props) => {
  const imageUrl = `https://api.adorable.io/avatars/32/${Math.floor(Math.random() * 1000000000)}.png`

  return (
    <li class="media m-3 border-bottom border-gray" key={props.key}>
      <Avatar imageUrl={imageUrl} />
      <p class="media-body">{props.body}</p>
    </li>
  )
}
