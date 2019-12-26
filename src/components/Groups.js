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

  let groupAdded = function() {
    setShowNewGroupForm(!showNewGroupForm)
    refetch()
  }

  let newGroupForm
  let newGroupButton
  if (showNewGroupForm) {
    newGroupForm = <AddGroup updateParent={groupAdded} setModerated={setModerated}/>
  } else {
    newGroupButton = <button
                      type="button"
                      className="btn btn-outline-secondary btn-circle m-3"
                      title="Create a new community"
                      onClick={() => setShowNewGroupForm(!showNewGroupForm)}>+</button>
  }


  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  let moderationAlert = <div />
  if (moderated) {
    moderationAlert = <div className="alert alert-warning" role="alert">
      The content of your community name or description may violate the <a href='/code-of-conduct'>Hawthorn Code of Conduct</a>.  A moderator will review your response shortly and publish it if it falls within the Code of Conduct.
    </div>
  }
  if (data.groups.length > 0) {
    let groupCards = []
    data.groups.forEach((group, i) =>{
      groupCards.push(<GroupPreview
                  key={group.id}
                  groupId={group.id}
                  name={group.name}
                  description={group.description}
                  threads={group.threads} />)
      if((i+1) % 3 == 0){
        groupCards.push(
          <div class="w-100"></div>
        )
      }
    });
    return (
      <div>
        <h1 className="display-3 text-center">Communities of Support
          <small>
            {newGroupButton}
          </small>
        </h1>
        <p className="text-muted text-center lead">find your people</p>
        {newGroupForm}
        {moderationAlert}

        <div className="card-deck">
          {groupCards}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>welcome.</h1>
        <p>there is nothing to see here yet. create a community to get started</p>
        {moderationAlert}
        {newGroupForm}
      </div>
    )
  }
});
