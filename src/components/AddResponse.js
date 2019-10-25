import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_POST, PUBLISHED_PROMPTS } from '../services/graphql/queries';

export const AddResponse = (props) => {
  let input;
  const [createPost, { loading, error }] = useMutation(
    CREATE_POST,
    {
      update(cache, { data: { createPost } }) {
        const { publishedPrompts } = cache.readQuery({ query: PUBLISHED_PROMPTS });
        let prompts = publishedPrompts.slice()
        for (let i = 0; i < prompts.length; i++) {
          if (prompts[i].id === createPost.prompt.id) {
            prompts[i].posts = [createPost].concat(prompts[i].posts)
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

  if (loading) return <p>Loading...</p>
  if (error) return <p>I'm so very sorry, a real bad error occured while adding your response</p>

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          createPost({ variables: { title: input.value, promptId: props.promptId } });
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
