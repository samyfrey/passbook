import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createClient } from '../../../api/clients'
import './Client.scss'
import { CreateForm } from './CreateForm'

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
      console.log(error)
      msgAlert({
        heading: 'Failed',
        message: error.message,
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
      placeholder: 'Company Legal Name'

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
      placeholder: 'Credit Limit'
    }
  ]
  return (

    <CreateForm data={clientFormData} handleChange={handleChange} handleCreate={handleCreate} />
    // <form className='create-client-form' onSubmit={ handleCreate}>
    //   <div className="create-client-item">
    //     <label>Company Name</label>
    //     <input type='text' placeholder='Type Company Name' name='name' value={client.name} onChange={handleChange}/>
    //   </div>
    //   <div className="create-client-item">
    //     <label>Industry</label>
    //     <input type='text' placeholder='Type Company Industry' name='industry' value={client.industry} onChange={handleChange}/>
    //   </div>
    //   <button className="create-client-btn" type="submit">Create</button>

  // </form>

  )
}
