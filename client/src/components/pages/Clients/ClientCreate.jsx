import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createClient } from '../../../api/clients'
import '../../styles/Client.scss'

export const ClientCreate = ({ user }) => {
  const [name, setName] = useState('')
  const [industry, setIndustry] = useState('')
  const [newClient, setNewClient] = useState(false)
  // post axios request
  // form

  const handleCreate = async event => {
    event.preventDefault()
    try {
      const res = await createClient(user, name, industry)
      setName(res.data.client.name)
      setIndustry(res.data.client.industry)
      setNewClient(true)
    } catch (error) {
      console.log(error)
    }
  }

  if (newClient) {
    return <Navigate to={'/clients'} />
  }
  return (

    <form className='create-client-form' onSubmit={ handleCreate}>
      <div className="create-client-item">
        <label>Company Name</label>
        <input type='text' placeholder='Type Company Name' value={name} onChange={event => setName(event.target.value)}/>
      </div>
      <div className="create-client-item">
        <label>Industry</label>
        <input type='text' placeholder='Type Company Industry' value={industry} onChange={event => setIndustry(event.target.value)}/>
      </div>
      <button className="create-client-btn" type="submit">Create</button>

    </form>

  )
}
