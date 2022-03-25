import React from 'react'
import '../../styles/Client.scss'

export const ClientCreate = () => {
  // post axios request
  // form
  return (

    <form className='create-client-form'>
      <div className="create-client-item">
        <label>Company Name</label>
        <input type='text' placeholder='Type Company Name' />
      </div>
      <div className="create-client-item">
        <label>Industry</label>
        <input type='text' placeholder='Type Company Industry' />
      </div>
      <button className="create-client-btn">Create</button>

    </form>

  )
}
