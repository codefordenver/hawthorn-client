import React from 'react'
import { Redirect } from "react-router-dom"
import { withRouter } from "react-router"
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { REGISTER } from '../services/graphql/queries'

export const Register = withRouter((props) => {
  let email, password, username;
  const [register, { data, loading, error }] = useMutation(
    REGISTER,
    {
      onError(error) {
         errorHandler(error, props.history)
      },
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>I'm so very sorry, a real bad error occured while adding your response</p>
  if (data) {
    return (
      <Redirect to="/login"/>
    )
  }

  return (
    <div className="m-3">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (username.value) {
            register({ variables: { email: email.value, password: password.value, username: username.value } })
          }
        }}
      >
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="inputUsername">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
              </div>
              <input type="text" class="form-control" id="inputUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required ref={node => {
                  username = node;
                }}/>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="inputEmail">Email</label>
            <div class="input-group">
              <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required ref={node => {
                  email = node;
                }}/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else. We use it for password resets, and sending notifications (notification settings can be update later)</small>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail">Password</label>
          <input type="password" class="form-control" id="inputEmail" placeholder="Password" required ref={node => {
              password = node;
            }}/>
        </div>
        <button type="submit" className="btn btn-primary">submit</button>
      </form>
    </div>
  )
});
