import React from 'react';
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { GROUPS } from '../services/graphql/queries'
import { errorHandler } from '../services/graphql/errorHandler'
import { GroupPreview } from './GroupPreview';

export const Groups = withRouter((props) => {
  const { loading, error, data } = useQuery(GROUPS,
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  if (data.groups.length > 0) {
    return (
      <div class="bg-white rounded shadow-sm">
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
        <p>there is nothing to see here yet. please come back later</p>
      </div>
    )
  }
});
