import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_RESPONSE, PUBLISHED_PROMPTS } from '../services/graphql/queries';

export const AddResponse = (props) => {
  let input;
  const [addResponse, { loading, error }] = useMutation(
    ADD_RESPONSE,
    {
      update(cache, { data: { createDraftPost } }) {
        const { publishedPrompts } = cache.readQuery({ query: PUBLISHED_PROMPTS });
        let prompts = publishedPrompts.slice()
        for (let i = 0; i < prompts.length; i++) {
          if (prompts[i].id === createDraftPost.prompt.id) {
            prompts[i].posts = prompts[i].posts.concat(createDraftPost)
            cache.writeQuery({
              query: PUBLISHED_PROMPTS,
              data: { publishedPrompts: prompts },
            });
            break;
          }
        }
      }
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Real bad error, but what is it?</p>;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addResponse({ variables: { title: input.value, userId: "5933d51f-f989-4c09-aac1-0406aa621510", promptId: props.promptId } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Response</button>
      </form>
    </div>
  );
};
