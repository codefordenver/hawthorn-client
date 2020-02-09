import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import { useHistory } from "react-router"
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler';
import { REGISTER } from '../services/graphql/queries';
import Alert from "./atoms/Alert";
import Input from "./atoms/Input";

const Register = () => {

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, { data, loading, error }] = useMutation(
    REGISTER,
    {
      onError(registerError) {
         errorHandler(registerError, history)
      },
  });


  if (loading) return <p>Loading...</p>

  if (data) {
    return (
      <Redirect to="/login"/>
    )
  }



  return (
    <div className="m-3">

          <Input
            name="Username"
            value={username}
            prependLabel="@"
            onChange={e=>setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <Input 
            name="Email" 
            value={email} 
            onChange={e=>setEmail(e.target.value)} 
            placeholder="Enter email" 
            required 
            helpText="We'll never share your email with anyone else. We use it for password resets, and sending notifications (notification settings can be update later)"
          />

          <Input
            name="Password"
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            placeholder="Password"
            required
          />

        <button
          className="btn btn-primary"
          disabled={!username || !password || !email}
          onClick={() => register({ variables: { email, password, username } })}
        >
          Register
        </button>

      { error && <Alert type="danger" message={error.message} />}
    </div>
  )
}

export default Register
