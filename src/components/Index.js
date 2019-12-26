import React from 'react';
import { withRouter } from "react-router"
import { Header } from './Header';
import { Groups } from './Groups';

export const Index = withRouter((props) => {
  return (
    <div>
      <Header />
      <Groups />
    </div>
  )
})
