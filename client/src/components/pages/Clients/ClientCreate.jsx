import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createClient } from '../../../api/clients'
import './Client.scss'
import { ClientCreateForm } from '../Clients/ClientCreateForm'

export const ClientCreate = ({ user, setRender, msgAlert }) => {
  const [client, setClient] = useState(
    { name: '', industry: '', creditLimit: '' }
  )
  const [isNewClient, setIsNewClient] = useState(false)

  const handleChange = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value })
  }

  const handleCreate = async event => {
    event.preventDefault()
    try {
      setRender(false)
      setIsNewClient(false)

      await createClient(user, client)
      setIsNewClient(true)
      setRender(true)
      msgAlert({
        heading: 'Client created',
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed',
        message: 'Please try again',
        variant: 'danger'
      })
    }
  }

  if (isNewClient) {
    return <Navigate to={'/clients'} />
  }
  const clientFormData = [
    {
      id: 1,
      property: 'name',
      value: `${client.name}`,
      placeholder: 'Company  Name'

    },
    {
      id: 2,
      property: 'industry',
      value: `${client.industry}`,
      placeholder: 'Industry'
    },
    {
      id: 3,
      property: 'creditLimit',
      value: `${client.creditLimit}`,
      placeholder: 'Credit Limit ($MM)'
    }
  ]
  return (
    <div className='screen'>
      <div className="screen-container">
        <div className="table-box">
          <ClientCreateForm data={clientFormData} handleChange={handleChange} handleCreate={handleCreate} />
        </div>
      </div>
    </div>
  )
}
