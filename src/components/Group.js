import React, { useState } from 'react'
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { GROUP } from '../services/graphql/queries'
import { errorHandler } from '../services/graphql/errorHandler'
import { AddThread } from './AddThread';
import { Threads } from './Threads';

export const Group = withRouter((props) => {
  const [moderated, setModerated] = useState(false)
  const [showNewThreadForm, setShowNewThreadForm] = useState(false)

  const { groupId } = props.match.params
  const { loading, error, data, refetch } = useQuery(GROUP, { variables: { id: groupId } },
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })

  let newThreadForm
  if (showNewThreadForm) {
    newThreadForm = <AddThread groupId={groupId} updateParent={refetch} setModerated={setModerated}/>
  } else {
    newThreadForm = <button
                      type="button"
                      class="btn btn-primary m-3"
                      onClick={() => setShowNewThreadForm(!showNewThreadForm)}>Start a conversation</button>
  }

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  let moderationAlert = <div />
  if (moderated) {
    moderationAlert = <div class="alert alert-warning" role="alert">
      The content of your response may violate the community's code of conduct.  A moderator will review your response shortly and publish it if it falls within the code of conduct.
    </div>
  }
  return (
    <div>
      <div class="m-3 border-bottom border-gray">
        <h1>{data.group.name}</h1>
        <p>{data.group.description}</p>
      </div>
      {moderationAlert}
      {newThreadForm}
      <Threads threads={data.group.threads} />
    </div>
  )
})
