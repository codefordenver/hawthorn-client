import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { CREATE_PROMPT } from '../services/graphql/queries';

export const AddPrompt = (props) => {
  let input;
  const [createPost, { loading, error }] = useMutation(CREATE_PROMPT,
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  });

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
        <label>Publish prompt:</label>
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
