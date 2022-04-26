import React from 'react'
import ChangePassword from '../../auth/ChangePassword'

import './account.scss'
const Account = ({ msgAlert, user, setUser }) => {
  if (user) {
    return (
      <div className='screen'>
        <div className="screen-container">
          <div className="screen-top">
            <div className="account">

              <div className="header-box container-box">
                <h1>Account</h1>
                <div className="table-box fill-form">
                  <div className="title">Change your password</div>

                  <ChangePassword msgAlert={msgAlert} user={user}setUser={setUser}/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Account
