import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../../auth/SignIn'

const Profile = ({ msgAlert, setUser }) => {
  return (

    <>
      <SignIn msgAlert={msgAlert} setUser={setUser}/>
      <Link to='/account/change-password'>Change password</Link>
    </>
  )
}

export default Profile
