import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import '../pages/Account/Account.scss'
import { signIn } from '../../api/auth'
import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

const SignIn = ({ msgAlert, setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onSignIn = async (event) => {
    event.preventDefault()
    try {
      const res = await signIn(email, password)
      // console.log(email, password)
      setUser(res.data.user)

      msgAlert({
        heading: 'Sign In Success',
        message: signInSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      setEmail('')
      setPassword('')
      msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: signInFailure,
        variant: 'danger'
      })
    }
  }
  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='container-box'>
      <div className='auth-form'>
        <form onSubmit={onSignIn}>
          <div className='email'>
            <label>Email address</label>
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
            <label>Password</label>
            <input
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>

  // <div className='row'>
  //   <div className='col-sm-10 col-md-8 mx-auto mt-5'>
  //     <h3>Sign In</h3>
  //     <Form onSubmit={onSignIn}>
  //       <Form.Group controlId='email'>
  //         <Form.Label>Email address</Form.Label>
  //         <Form.Control
  //           required
  //           type='email'
  //           name='email'
  //           value={email}
  //           placeholder='Enter email'
  //           onChange={event => setEmail(event.target.value)}
  //         />
  //       </Form.Group>
  //       <Form.Group controlId='password'>
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control
  //           required
  //           name='password'
  //           value={password}
  //           type='password'
  //           placeholder='Password'
  //           onChange={event => setPassword(event.target.value)
  //           }
  //         />
  //       </Form.Group>
  //       <Button className='mt-2' variant='primary' type='submit'>Submit</Button>
  //     </Form>
  //   </div>
  // </div>
  )
}

export default SignIn
