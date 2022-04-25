import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../../auth/SignIn'
import SignUp from '../../auth/SignUp'
import '../../../index.scss'
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
      <div className="overview-top">
        <div className="container-box">
          <SignIn msgAlert={msgAlert} setUser={setUser}/>
        </div>
        <div className="container-box">
          <SignUp msgAlert={msgAlert} setUser={setUser}/>
        </div>

      </div>

    </>
  )
}

export default Account
