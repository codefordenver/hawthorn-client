import React from 'react'
import { Avatar } from './Avatar'

export const Post = (props) => {
  return (
    <li key={props.key}>
      <Avatar imageUrl={props.author.imageUrl} /> 
      <span id="post-body">{props.body}</span>
    </li>
  )
}
