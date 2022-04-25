import React from 'react'
import { deleteClient } from '../../../api/clients'

const ClientDelete = ({ client, user, msgAlert, setRender }) => {
  async function handleDelete (client) {
    const res = confirm('Are you sure you want to delete?')
    setRender(false)

    if (res) {
      try {
        const clientId = client._id
        await deleteClient(user, clientId)
        setRender(true)
        msgAlert({
          heading: 'Done!',
          variant: 'success'
        })
      } catch (error) {
        msgAlert({
          heading: 'Failed!',
          message: 'Please try again',
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
