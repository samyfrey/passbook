import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createClient } from '../../../api/clients'
import './Client.scss'

export const ClientCreate = ({ user }) => {
  const [client, setClient] = useState(
    { name: '', industry: '' }
  )
  const [isNewClient, setIsNewClient] = useState(false)

  const handleChange = (event) => {
    setClient({ ...client, [event.target.name]: event.target.value })
  }

  const handleCreate = async event => {
    event.preventDefault()
    try {
      console.log('user is', user)
      await createClient(user, client)
      setIsNewClient(true)
    } catch (error) {
      console.log(error)
    }
  }

  if (isNewClient) {
    return <Navigate to={'/clients'} />
  }
  return (

    <form className='create-client-form' onSubmit={ handleCreate}>
      <div className="create-client-item">
        <label>Company Name</label>
        <input type='text' placeholder='Type Company Name' name='name' value={client.name} onChange={handleChange}/>
      </div>
      <div className="create-client-item">
        <label>Industry</label>
        <input type='text' placeholder='Type Company Industry' name='industry' value={client.industry} onChange={handleChange}/>
      </div>
      <button className="create-client-btn" type="submit">Create</button>

    </form>

  )
}
