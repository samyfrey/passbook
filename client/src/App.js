/* eslint-disable no-tabs */
import React, { useState, useEffect } from 'react'
// import { ClientDetail } from './ClientDetail'
import { indexClients } from './api/clients'

import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import { Sidebar } from './components/sidebar/Sidebar'
// import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import { Dashboard } from './components/pages/Dashboard/Dashboard'
import ClientsOverview from './components/pages/Clients/ClientsOverview'
import ClientDetail from './components/pages/Clients/ClientDetail'
import { ClientCreate } from './components/pages/Clients/ClientCreate'
import Profile from './components/pages/Profile/Profile'
import LoansOverview from './components/pages/Loans/LoansOverview'
import LoanCreate from './components/pages/Loans/LoanCreate'
import Budget from './components/pages/Budget/Budget'
import { indexBudgets } from './api/budget'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [RevChartData, setRevChartData] = useState([])
  const [clients, setClients] = useState([])
  const [render, setRender] = useState(false)
  const [revenueBudget, setRevenueBudget] = useState(null)
  const [creditBudget, setCreditBudget] = useState(null)

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resClients = await indexClients()
        setClients(resClients.data.clients)
        const resBudget = await indexBudgets()
        setRevenueBudget(resBudget.data.budget[0].revenueBudget)
        setCreditBudget(resBudget.data.budget[0].creditBudget)
      } catch (error) {
        console.log('error is', error)
      }
    }
    fetchData()
  }, [render])

  return (
    <div className='app'>
      <Sidebar />
      <div className='appContainer'>
        {/* <Header user={user} /> */}
        {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
          />
        ))}
        <Routes>
          <Route path='/account/'>
            <Route
              index
              element={<Profile msgAlert={msgAlert} setUser={setUser} />}
            />
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
            <Route
              index
              element={
                <ClientsOverview
                  msgAlert={msgAlert}
                  clients={clients}
                  user={user}
                  setRender={setRender}
                  revenueBudget={revenueBudget}
                />
              }
            />
            <Route path=':borrowerId' element={<ClientDetail />} />
            <Route
              path='create'
              element={
                <ClientCreate
                  user={user}
                  setRender={setRender}
                  msgAlert={msgAlert}
                />
              }
            />
          </Route>
          <Route path='/loans/'>
            <Route
              index
              element={
                <LoansOverview
                  clients={clients}
                  user={user}
                  setRender={setRender}
                  render={render}
                  creditBudget={creditBudget}
                />
              }
            />
            <Route
              path='create'
              element={
                <LoanCreate
                  user={user}
                  clients={clients}
                  msgAlert={msgAlert}
                  setRender={setRender}

                />
              }
            />
          </Route>

          <Route
            path='/'
            element={
              <Dashboard
                clients={clients}
                RevChartData={RevChartData}
                setRevChartData={setRevChartData}
                revenueBudget={revenueBudget}
              />
            }
          />
          <Route
            path='/budget/'
            element={
              <Budget
                user={user}
                revenueBudget={revenueBudget}
                setRevenueBudget={setRevenueBudget}
                creditBudget={creditBudget}
                setCreditBudget={setCreditBudget}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
