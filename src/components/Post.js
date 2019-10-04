import React from 'react';

export const Post = (props) => {
  return (
    <li key={props.key}>
      <img src="https://i.pravatar.cc/25" alt="Avatar" id="avatar"/>
      <sub>{props.author.firstName} {props.author.lastName}</sub>
      <span id="post-body">{props.body}</span>
    </li>
  );
};
