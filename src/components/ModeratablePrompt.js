import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { withRouter } from "react-router"
import moment from 'moment'
import { errorHandler } from '../services/graphql/errorHandler'
import { PUBLISH_PROMPT, MODERATABLE_PROMPTS } from '../services/graphql/queries'

export const ModeratablePrompt = withRouter((props) => {
  const [publishPrompt, { loading, error }] = useMutation(
    PUBLISH_PROMPT,
    {
      onError(error) {
         errorHandler(error, props.history)
      },
      update(cache, { data: { publishPrompt } }) {
        const { moderatablePrompts } = cache.readQuery({ query: MODERATABLE_PROMPTS });
        let prompts = moderatablePrompts.slice()
        for (let i = 0; i < prompts.length; i++) {
          if (prompts[i].id === publishPrompt.id) {
            cache.writeQuery({
              query: MODERATABLE_PROMPTS,
              data: { moderatablePrompts: prompts.slice(0, i).concat(prompts.slice(i+1, prompts.length)) },
            });
            break;
          }
        }
      }
    }
  )

  return (
    <div class="bg-white rounded shadow-sm">
      <h3>{props.prompt.title}</h3>
      <sub>Created {moment(props.prompt.createdAt).fromNow()}</sub>
      <div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => publishPrompt({ variables: { promptId: props.prompt.id } })}>
            Publish
        </button>
        <button type="submit" class="btn btn-danger">Flag for Abuse</button>
      </div>
    </div>
  );
});