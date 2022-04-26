import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../../auth/SignIn'
import SignUp from '../../auth/SignUp'
import './account.scss'
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
      <div className='screen'>
        <div className="screen-container">
          <div className="screen-top">
            <div className="account">

              <div className="header-box container-box">
                {!user &&
              <h1>Sign-in</h1>
                }
                <div className="table-box fill-form">
                  <div className="title">Welcome back!</div>
                  <SignIn msgAlert={msgAlert} setUser={setUser}/>
                </div>

              </div>

              <div className="header-box container-box">
                {!user &&
              <h1>Register</h1>
                }
                <div className="table-box fill-form">
                  <div className="title">Create an account</div>
                  <SignUp msgAlert={msgAlert} setUser={setUser}/>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Account
