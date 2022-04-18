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
import TopBar from './components/sidebar/TopBar'
// import LoanEdit from './components/pages/Loans/LoanEdit'
import ShowLoan from './components/pages/Loans/ShowLoan'
import BudgetEdit from './components/pages/Budget/BudgetEdit'
import ClientEdit from './components/pages/Clients/ClientEdit'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [RevChartData, setRevChartData] = useState([])
  const [clients, setClients] = useState([])
  const [render, setRender] = useState(false)
  const [revenueBudget, setRevenueBudget] = useState(null)
  const [creditBudget, setCreditBudget] = useState(null)
  const [budgets, setBudgets] = useState(null)
  const [selectClient, setSelectClient] = useState(null)
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
        setBudgets(resBudget.data.budget)
        setCreditBudget(resBudget.data.budget[0].amount)
        setRevenueBudget(resBudget.data.budget[1].amount)
      } catch (error) {
        console.log('error is', error)
      }
    }
    fetchData()
  }, [render])

  // console.log('budgets is', budgets)
  return (
    <div className='app'>
      <Sidebar />
      <div className='appContainer'>
        <TopBar user={user} />
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
            <Route path=':borrowerId/edit' element={<ClientEdit />} />
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
                  selectClient={selectClient}
                  setSelectClient={setSelectClient}
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
            <Route
              path=':loanId'
              element={
                // <LoanEdit
                //   user={user}
                //   clients={clients}
                //   msgAlert={msgAlert}
                //   setRender={setRender}
                //   selectClient={selectClient}
                //   setSelectClient={setSelectClient}
                // />
                <ShowLoan user={user} selectClient={selectClient} />
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
                user={user}
                msgAlert={msgAlert}
                setRender={setRender}
                setSelectClient={setSelectClient}
              />
            }
          />
          <Route path='/budget/'>
            <Route
              index
              element={
                <Budget
                  user={user}
                  revenueBudget={revenueBudget}
                  setRevenueBudget={setRevenueBudget}
                  creditBudget={creditBudget}
                  setCreditBudget={setCreditBudget}
                  budgets={budgets}
                />
              }
            />

            <Route path=':budgetId' element={<BudgetEdit />} />
          </Route>

        </Routes>
      </div>
    </div>
  )
}

export default App
