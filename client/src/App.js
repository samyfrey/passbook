/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import { Sidebar } from './components/sidebar/Sidebar'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import { Dashboard } from './components/pages/Dashboard/Dashboard'
import { Account } from './components/pages/Account/Account'
import ClientsOverview from './components/pages/Clients/ClientsOverview'
import ClientDetail from './components/pages/Clients/ClientDetail'
import { ClientCreate } from './components/pages/Clients/ClientCreate'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  return (
    <div className='app'>
      <Sidebar />
      <div className='appContainer'>
        <Header user={user} />
        {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
          />
        ))}
        container
        <Routes>
          <Route path='/account/'>
            <Route index element={<Account />} />
            <Route
              path='sign-up'
              element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
            />
            <Route
              path='sign-in'
              element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
            />
            <Route
              path='change-password'
              element={<ChangePassword msgAlert={msgAlert} user={user} />}
            />
            <Route
              path='sign-out'
              element={
                <SignOut
                  msgAlert={msgAlert}
                  clearUser={clearUser}
                  user={user}
                />
              }
            />
          </Route>

          <Route path='/clients/'>
            <Route index element={<ClientsOverview />} />
            <Route path=':borrowerId' element={<ClientDetail />} />
            <Route path='create' element={<ClientCreate user={user} />} />
          </Route>

          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
