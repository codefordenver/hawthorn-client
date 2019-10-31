import React from 'react';
import { AddResponse } from './AddResponse';

export const Prompt = (props) => {
  return (
    <div class="border-bottom border-gray m-3">
      <h2>{props.body}</h2>
      <AddResponse promptId={props.promptId} />
    </div>
  );
};
