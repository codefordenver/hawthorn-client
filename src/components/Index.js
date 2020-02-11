import React from 'react';
import { withRouter } from "react-router"
import { Header } from './Header';
import Button from "./atoms/Button";

export const Index = withRouter((props) => {
  return (
    <div>
      <Header />
      <h1 className="display-4 text-center">Hawthorn is a place for communities;
      <Button
        type="primary"
        onClick={() => props.history.push("/register")}
        text="Sign up"
      />
      </h1>
      <p className="lead text-center">an alternative to FaceBook/Google Groups, with commitment to social justice, premised on mutual support and owned by you, the community</p>
      <p className="text-center">A volunteer team with Code for Denver is building the initial platform now. Please sign up for an account now, explore, and give us feedback on what we have so far.</p>
    </div>
  )
})
