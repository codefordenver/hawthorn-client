import React from 'react'
import { withRouter } from "react-router"
import { Thread } from './Thread';

export const GroupPreview = withRouter((props) => {
  return (
    <div class="m-3 border-bottom border-gray">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button
        type="button"
        class={"btn btn-outline-primary"}
        onClick={() => {props.history.push('/group/' + props.groupId)}}>
        join community
        </button>
    </div>
  )
})
