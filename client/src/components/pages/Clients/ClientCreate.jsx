import React, { useState } from 'react'
import { createClient } from '../../../api/clients'
import '../../styles/Client.scss'

export const ClientCreate = ({ user }) => {
  const [client, setClient] = useState('')
  // post axios request
  // form

  const handleCreate = async event => {
    event.preventDefault()
    try {
      const res = await createClient(user, client)
      setClient(res.data.client)
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <form className='create-client-form' onSubmit={{ handleCreate }}>
      <div className="create-client-item">
        <label>Company Name</label>
        <input type='text' placeholder='Type Company Name' value={client.name}/>
      </div>
      <div className="create-client-item">
        <label>Industry</label>
        <input type='text' placeholder='Type Company Industry' value={client.industry}/>
      </div>
      <button className="create-client-btn">Create</button>

    </form>

  )
}
