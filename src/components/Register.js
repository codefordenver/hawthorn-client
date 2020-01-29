import React from 'react'
import { Redirect } from "react-router-dom"
import { withRouter } from "react-router"
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { REGISTER } from '../services/graphql/queries'
import NetworkError from './NetworkError'

const Register = withRouter((props) => {
  let email
  let password
  let username
  let errorMessage = <div />
  const [register, { data, loading, error }] = useMutation(
    REGISTER,
    {
      onError(registerError) {
         errorHandler(registerError, props.history)
      },
  });


  if (loading) return <p>Loading...</p>
  if (error) errorMessage = <NetworkError action="completing your account registration" />

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
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
              </div>
              <label htmlFor="input-username">Username</label>
              <input type="text" className="form-control" id="input-username" placeholder="Username" aria-describedby="inputGroupPrepend" required ref={node => {
                  username = node;
                }}/>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="inputEmail">Email</label>
            <div className="input-group">
              <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required ref={node => {
                  email = node;
                }}/>
              <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else. We use it for password resets, and sending notifications (notification settings can be update later)</small>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Password</label>
          <input type="password" className="form-control" id="inputEmail" placeholder="Password" required ref={node => {
              password = node;
            }}/>
        </div>
        <button type="submit" className="btn btn-primary">submit</button>
      </form>
      {errorMessage}
    </div>
  )
})

export default Register
