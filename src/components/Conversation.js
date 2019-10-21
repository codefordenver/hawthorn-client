import React from 'react';
import { AddResponse } from './AddResponse';
import { Post } from './Post';
import { Prompt } from './Prompt';

export const Conversation = (props) => {
  return (
    <div id={props.id}>
      <Prompt body={props.title} />
      <ul>
        {props.posts.map((post) =>
          <Post key={post.id} body={post.title} author={post.author}/>
        )}
      </ul>
      <AddResponse promptId={props.id}/>
    </div>
  )
};
