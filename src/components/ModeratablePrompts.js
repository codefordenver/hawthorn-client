import React from 'react';
import { withRouter } from "react-router"
import { ModeratablePrompt } from './ModeratablePrompt'
import { useQuery } from '@apollo/react-hooks';
import { MODERATABLE_PROMPTS } from '../services/graphql/queries'
import { errorHandler } from '../services/graphql/errorHandler'

export const ModeratablePrompts = withRouter((props) => {
  const { loading, error, data } = useQuery(MODERATABLE_PROMPTS,
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  if (data.moderatablePrompts.length > 0) {
    const moderatablePrompts = data.moderatablePrompts.map((prompt) =>
      <li key={prompt.id}>
        <ModeratablePrompt prompt={prompt} />
      </li>
    );
    return (
      <div class="bg-white rounded shadow-sm">
        <h1>Unpublished Prompts:</h1>
        <ul>{moderatablePrompts}</ul>
      </div>
    );
  } else {
    return (
      <div>
        <p>there are no unpublished prompts currently</p>
      </div>
    )
  }
});
