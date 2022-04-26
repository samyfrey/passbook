import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../../auth/SignIn'
import SignUp from '../../auth/SignUp'

const Account = ({ msgAlert, user, setUser }) => {
  if (user) {
    return (

      <div>
        <Link to='/account/change-password'>Change password</Link>

      </div>
    )
  }
  return (
    <>
      <div className='app-container'>
        <div className="container-box">
          <div className="auth-form">
            <div className="title">Sign In</div>
            <SignIn msgAlert={msgAlert} setUser={setUser}/>
          </div>
        </div>

        <div className="container-box">
          <div className="auth-form">
            <div className="title">Sign Up</div>

            <SignUp msgAlert={msgAlert} setUser={setUser}/>
          </div>
        </div>

      </div>
    </>
  )
}

export default Account
