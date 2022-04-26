import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import { changePasswordSuccess, changePasswordFailure } from '../AutoDismissAlert/messages'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

const ChangePassword = ({ msgAlert, user }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onChangePassword = async (event) => {
    event.preventDefault()
    try {
      await changePassword(oldPassword, newPassword, user)
      msgAlert({
        heading: 'Change Password Success',
        message: changePasswordSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      setOldPassword('')
      setNewPassword('')
      msgAlert({
        heading: 'Change Password Failed with error: ' + error.message,
        message: changePasswordFailure,
        variant: 'danger'
      })
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }
  console.log('user is', user)

  return (

    <div className='fill-form'>
      <form onSubmit={onChangePassword}>
        <div className='email'>
          <input
            required
            name='oldPassword'
            value={oldPassword}
            type='password'
            placeholder='Old Password'
            onChange={event => setOldPassword(event.target.value)}
          />
        </div>

        <div className='password'>
          <input
            required
            name='newPassword'
            value={newPassword}
            type='password'
            placeholder='New Password'
            onChange={event => setNewPassword(event.target.value)
            }
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default ChangePassword
