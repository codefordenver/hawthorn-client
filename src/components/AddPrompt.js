import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { CREATE_PROMPT, PUBLISHED_PROMPTS } from '../services/graphql/queries';

export const AddPrompt = (props) => {
  let input;
  const [createPrompt, { loading, error }] = useMutation(
    CREATE_PROMPT,
    {
      onError(error) {
         errorHandler(error, props.history)
      },
      update(cache, { data: { createPrompt } }) {
        const { publishedPrompts } = cache.readQuery({ query: PUBLISHED_PROMPTS });
        let prompts = publishedPrompts.slice()
        prompts.unshift(createPrompt)
        cache.writeQuery({
          query: PUBLISHED_PROMPTS,
          data: { publishedPrompts: prompts },
        });
      }
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>I'm so very sorry, a real bad error occured while adding your response</p>

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (input.value) {
            createPrompt({ variables: { title: input.value, promptId: props.promptId } })
          }
          input.value = ''
          props.history.push("/")
        }}
      >
        <div class="form-group">
          <textarea placeholder="Enter prompt" class="form-control" rows="2" ref={node => {
              input = node;
            }}
          />
          <small>Please feel free to prompt or ask a question to the community.  Thank you for participating, engaging and connecting. <span role="img" aria-label="praise emoji">🙌</span></small>
        </div>
        <button type="submit" class="btn btn-primary">submit</button>
      </form>
    </div>
  );
};
