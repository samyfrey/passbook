import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './listTable.scss'
import { Link } from 'react-router-dom'
import ClientDelete from '../pages/Clients/ClientDelete'

export default function ListTable ({ user, clients, setRender, msgAlert }) {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" size="small">Company Name</TableCell>
            <TableCell className="tableCell" align="right" size="small">Industry</TableCell>
            <TableCell className="tableCell" align="right" size="small">Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map(client => (
            <TableRow
              key={client._id}
            >
              <TableCell>
                <Link to={`/clients/${client._id}`}>
                  <div className="cellWrapper">
                    <img src={`https://logo.clearbit.com/${client.name}.com`} alt="" className="image" />
                    <span className="link">{client.name}</span>
                  </div>
                </Link>
              </TableCell>

              <TableCell align="right">{client.industry}</TableCell>
              <TableCell align="right">
                <div className="cellAction">
                  <Link className="link" to={`/clients/${client._id}/edit`}>
                    <div className="viewButton">Edit</div>
                  </Link>
                  {/* <div className="deleteButton" onClick={() => handleDelete(client)}>Delete</div> */}
                  <ClientDelete user={user} client={client} msgAlert={msgAlert} setRender={setRender}/>
                </div>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
