import React from 'react';
import moment from 'moment';

export const ModeratablePrompt = (props) => {
  return (
    <div class="bg-white rounded shadow-sm">
      <h3>{props.prompt.title}</h3>
      <sub>Created {moment(props.prompt.createdAt).fromNow()}</sub>
      <div>
        <button type="submit" class="btn btn-primary">Publish</button>
        <button type="submit" class="btn btn-danger">Flag for Abuse</button>
      </div>
    </div>
  );
};
