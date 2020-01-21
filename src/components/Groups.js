import React, { useState } from 'react';
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { GROUPS } from '../services/graphql/queries'
import { errorHandler } from '../services/graphql/errorHandler'
import { GroupPreview } from './GroupPreview';

export const Groups = withRouter((props) => {
  const { loading, error, data, refetch } = useQuery(GROUPS,
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

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
        <div className="card-deck">
          {groupCards}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>welcome.</h1>
      </div>
    )
  }
});
