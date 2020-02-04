import React from 'react';
import { withRouter } from "react-router"
import { Post } from './Post';

export const ThreadPreview = withRouter((props) => {
  const posts = <div className="ml-0">
                {/* Limit post content for preview */}
                {props.posts.slice(0, 2).map((post) =>
                  <Post
                    key={post.id}
                    body={post.content.substring(0, 33) + (post.content.length > 33 ? ". . ." : "")} />
                )}
              </div>

  return (
    <div className="border-bottom border-gray m-3">
      <h4>{props.title}</h4>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {props.history.push(`/thread/${  props.threadId}`)}}>
        join conversation
        </button>
      {posts}
    </div>
  )
})
