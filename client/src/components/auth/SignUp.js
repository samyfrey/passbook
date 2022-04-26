import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

const SignUp = ({ msgAlert, setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onSignUp = async (event) => {
    event.preventDefault()

    try {
      await signUp(email, password, passwordConfirmation)
      const res = await signIn(email, password)
      setUser(res.data.user)
      msgAlert({
        heading: 'Sign Up Success',
        message: signUpSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      setEmail('')
      setPassword('')
      setPasswordConfirmation('')
      msgAlert({
        heading: 'Sign Up Failed with error: ' + error.message,
        message: signUpFailure,
        variant: 'danger'
      })
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='fill-form'>
      <form onSubmit={onSignUp}>
        <div className='email'>
          {/* <label>Email address</label> */}
          <input
            required
            type='email'
            name='email'
            value={email}
            placeholder='Enter email'
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className='password'>
          {/* <label>Password</label> */}
          <input
            required
            name='password'
            value={password}
            type='password'
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className='password'>
          {/* <label>Password</label> */}
          <input
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            type='password'
            placeholder='Confirm Password'
            onChange={event => setPasswordConfirmation(event.target.value)}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default SignUp
