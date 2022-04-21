import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../../auth/SignIn'
import SignUp from '../../auth/SignUp'

const Profile = ({ msgAlert, user, setUser }) => {
  console.log('the user from the profile component is', user)
  if (user) {
    return (

      <div>

        <Link to='/account/change-password'>Change password</Link>

      </div>
    )
  }
  return (
    <>
      <SignIn msgAlert={msgAlert} setUser={setUser}/>

      <SignUp msgAlert={msgAlert} setUser={setUser}/>

    </>
  )
}

export default Profile
