import React from 'react'
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { GROUP } from '../services/graphql/queries'
import { errorHandler } from '../services/graphql/errorHandler'
import { Threads } from './Threads';

export const Group = withRouter((props) => {
  const { groupId } = props.match.params
  const { loading, error, data } = useQuery(GROUP, { variables: { id: groupId } },
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div>
      <div class="m-3 border-bottom border-gray">
        <h1>{data.group.name}</h1>
        <p>{data.group.description}</p>
      </div>
      <Threads threads={data.group.threads} />
    </div>
  )
})
