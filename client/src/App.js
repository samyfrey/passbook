/* eslint-disable no-tabs */
import React, { useState, useEffect } from 'react'
// import { ClientDetail } from './ClientDetail'
import { indexClients } from './api/clients'
import { indexBudgets } from './api/budget'

import { Route, Routes } from 'react-router-dom'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Sidebar from './components/sidebar/Sidebar'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Dashboard from './components/pages/Dashboard/Dashboard'
import ClientsOverview from './components/pages/Clients/ClientsOverview'
import ClientDetail from './components/pages/Clients/ClientDetail'
import ClientCreate from './components/pages/Clients/ClientCreate'
import Account from './components/pages/Account/Account'
import LoansOverview from './components/pages/Loans/LoansOverview'
import LoanCreate from './components/pages/Loans/LoanCreate'
import Budget from './components/pages/Budget/Budget'
import TopBar from './components/sidebar/TopBar'
import BudgetEdit from './components/pages/Budget/BudgetEdit'
import ClientEdit from './components/pages/Clients/ClientEdit'
import Register from './components/pages/Account/Register'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [revenueChartData, setRevenueChartData] = useState([])
  const [clients, setClients] = useState([])
  const [render, setRender] = useState(false)
  const [revenueBudget, setRevenueBudget] = useState(null)
  const [creditBudget, setCreditBudget] = useState(null)
  const [budgets, setBudgets] = useState(null)

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant }]))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resClients = await indexClients()
        setClients(resClients.data.clients)
        const resBudget = await indexBudgets()
        setBudgets(resBudget.data.budget)
        setCreditBudget(resBudget.data.budget[0].amount)
        setRevenueBudget(resBudget.data.budget[1].amount)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [render])

  return (
    <div className='app'>
      <Sidebar user={user} />
      <div className='app-container'>
        <TopBar user={user} clients={clients} render={render} />
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
          <Route
            path='/'
            element={
              <Dashboard
                clients={clients}
                revenueChartData={revenueChartData}
                setRevenueChartData={setRevenueChartData}
                revenueBudget={revenueBudget}
                user={user}
                msgAlert={msgAlert}
                setRender={setRender}
                render={render}
              />
            }
          />
          <Route path='/account/'>
            <Route
              index
              element={
                <Account msgAlert={msgAlert} user={user} setUser={setUser} />
              }
            />
            <Route
              path='register'
              element={
                <Register msgAlert={msgAlert} user={user} setUser={setUser} />
              }
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
            <Route
              path=':borrowerId'
              element={
                <ClientDetail
                  user={user}
                  render={render}
                  setRender={setRender}
                  msgAlert={msgAlert}
                />
              }
            />
            <Route
              path=':borrowerId/edit'
              element={
                <ClientEdit
                  user={user}
                  render={render}
                  setRender={setRender}
                  msgAlert={msgAlert}
                />
              }
            />
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
                  msgAlert={msgAlert}
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

          <Route path='/budget/'>
            <Route
              index
              element={
                <Budget
                  user={user}
                  budgets={budgets}
                  msgAlert={msgAlert}
                  setBudgets={setBudgets}
                />
              }
            />

            <Route
              path=':budgetId'
              element={
                <BudgetEdit
                  render={render}
                  user={user}
                  setRender={setRender}
                  msgAlert={msgAlert}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
