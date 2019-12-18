import React, { useState } from 'react';
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { GROUPS } from '../services/graphql/queries'
import { errorHandler } from '../services/graphql/errorHandler'
import { AddGroup } from './AddGroup';
import { GroupPreview } from './GroupPreview';

export const Groups = withRouter((props) => {
  const [moderated, setModerated] = useState(false)
  const [showNewGroupForm, setShowNewGroupForm] = useState(false)

  const { loading, error, data, refetch } = useQuery(GROUPS,
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })

  let newGroupForm
  if (showNewGroupForm) {
    newGroupForm = <AddGroup updateParent={refetch} setModerated={setModerated}/>
  } else {
    newGroupForm = <button
                      type="button"
                      class="btn btn-primary m-3"
                      onClick={() => setShowNewGroupForm(!showNewGroupForm)}>build a new community</button>
  }


  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  let moderationAlert = <div />
  if (moderated) {
    moderationAlert = <div class="alert alert-warning" role="alert">
      The content of your community name or description may violate the Hawthorn Code of Conduct.  A moderator will review your response shortly and publish it if it falls within the Code of Conduct.
    </div>
  }
  if (data.groups.length > 0) {
    return (
      <div class="bg-white rounded shadow-sm">
        <h1>Communities of Support</h1>
        {moderationAlert}
        {newGroupForm}
        <ul>
          {data.groups.map(function(group) {
            return <GroupPreview
                      key={group.id}
                      groupId={group.id}
                      name={group.name}
                      description={group.description} />;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1>welcome.</h1>
        <p>there is nothing to see here yet.</p>
        {moderationAlert}
        {newGroupForm}
      </div>
    )
  }
});
