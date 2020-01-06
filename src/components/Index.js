import React from 'react';
import { withRouter } from "react-router"
import { Header } from './Header';
import { Groups } from './Groups';

export const Index = withRouter((props) => {
  return (
    <div>
      <Header />
      <p className="lead text-center">Hawthorn is a safe environment, with focus on nurturing supportive communities,</p>
      <p className="text-center">a platform with commitment to social justice, premised on mutual support and owned by you, the community</p>
      <Groups />
    </div>
  )
})
