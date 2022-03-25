import React, { useState, useEffect } from 'react'
// import { ClientDetail } from './ClientDetail'
import { indexClients } from '../../../api/clients'
import { Link } from 'react-router-dom'

export const ClientsOverview = () => {
  const [clients, setClients] = useState([])
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await indexClients()
        setClients(res.data.clients)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchClients()
  }, [])

  return (
    <div>
      <h1>Clients List</h1>
      {clients.map(client => (
        <ul key={client._id}>
          <Link to={`/clients/${client._id}`}>{client.name}</Link>

        </ul>
      ))}
    </div>
  )
}
