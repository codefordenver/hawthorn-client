import React from 'react'
import { Avatar } from './Avatar'

export const Post = (props) => {
  const imageUrl = `https://api.adorable.io/avatars/50/${Math.floor(Math.random() * 1000000000)}.png`

  return (
    <li key={props.key}>
      <Avatar imageUrl={imageUrl} />
      <span id="post-body">{props.body}</span>
    </li>
  )
}
