import React from 'react'
import { deleteClient } from '../../../api/clients'

const ClientDelete = ({ client, user, msgAlert, setRender }) => {
  async function handleDelete (client) {
    const res = confirm('Are you sure you want to delete?')
    if (res) {
      try {
        const clientId = client._id
        await deleteClient(user, clientId)
        // setRender(false)
        setRender(true)
        msgAlert({
          heading: 'Post deleted',
          variant: 'success'
        })
      } catch (error) {
        msgAlert({
          heading: 'Failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
  }
  return (
    <div className="deleteButton" onClick={() => handleDelete(client)}>Delete</div>

  )
}

export default ClientDelete
