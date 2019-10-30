import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_POST, PUBLISHED_PROMPTS } from '../services/graphql/queries';

export const AddResponse = (props) => {
  const [showResponseForm, setShowResponseForm] = useState(false)

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

  let responseForm
  if (showResponseForm) {
    responseForm = <form
                    onSubmit={e => {
                      e.preventDefault()
                      if (input.value) {
                        createPost({ variables: { title: input.value, promptId: props.promptId } })
                      }
                      input.value = ''
                      setShowResponseForm(!showResponseForm)
                    }}>
                    <div class="form-group">
                      <textarea class="form-control" rows="3" ref={node => {
                          input = node
                        }}
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">submit</button>
                  </form>
  } else {
    responseForm = <button
                      type="button"
                      class="btn btn-link"
                      onClick={() => setShowResponseForm(!showResponseForm)}>share your response</button>
  }

  return (
    <div class="m-3">
      {responseForm}
    </div>
  );
};
