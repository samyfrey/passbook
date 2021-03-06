import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { editClient } from '../../../api/clients'

const ClientEdit = ({ user, msgAlert, render, setRender }) => {
  const { borrowerId } = useParams()
  const [name, setName] = useState('')
  const [industry, setIndustry] = useState('')
  const [creditLimit, setCreditLimit] = useState('')

  setRender(false)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await editClient(borrowerId, user, name, industry, creditLimit)
      setRender(false)
      msgAlert({
        heading: 'Done!',
        variant: 'success'
      })
      setRender(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed!',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (render) {
    return <Navigate to={'/clients'} />
  }
  return (
    <div className='screen'>
      <div className="screen-container create">
        <div className="table-box">
          {!user && <Link to='/account/register'>Sign in or Register to edit a client</Link>}
          <h1>Edit Client</h1>

          <form className='fill-form' onSubmit={handleSubmit} >

            <div className="name">
              <label>Company name</label>

              <input type='text' placeholder='Enter name' name='amount' value={name} onChange={event => setName(event.target.value)}/>

            </div>

            <div className="industry">
              <label>Company Industry</label>

              <input type='text' placeholder='Industry' name='amount' value={industry} onChange={event => setIndustry(event.target.value)}/>

            </div>

            <div className="amount">
              <label>Total Credit Limit</label>

              <input type='text' placeholder='Credit limit ($MM)' name='amount' value={creditLimit} onChange={event => setCreditLimit(event.target.value)}/>

            </div>

            <button className="button" type="submit">Update</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default ClientEdit
