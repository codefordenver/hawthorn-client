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
                      className="btn btn-primary m-3"
                      onClick={() => setShowNewThreadForm(!showNewThreadForm)}>start a conversation</button>
  }

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  let moderationAlert = <div />
  if (moderated) {
    moderationAlert = <div className="alert alert-warning" role="alert">
      The content of your response may violate the <a href='/code-of-conduct'>Hawthorn Code of Conduct</a>.  A moderator will review your response shortly and publish it if it falls within the Code of Conduct.
    </div>
  }
  return (
    <div>
      <div className="m-3 border-bottom border-gray">
        <h1 className="display-3 text-center">{data.group.name}</h1>
        <p className="text-muted text-center lead">{data.group.description}</p>
      </div>
      {moderationAlert}
      {newThreadForm}
      <Threads threads={data.group.threads} />
    </div>
  )
})
