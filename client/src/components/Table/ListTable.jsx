import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './listTable.scss'
import { Link } from 'react-router-dom'

export default function ListTable ({ clients }) {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Company Name</TableCell>
            <TableCell className="tableCell" align="right">Industry</TableCell>
            <TableCell className="tableCell" align="right">Industry</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map(client => (
            <TableRow
              key={client._id}
            ><Link to={`/clients/${client._id}`}>
                <TableCell>
                  <div className="cellWrapper">
                    <img src={`https://logo.clearbit.com/${client.name}.com`} alt="" className="image" />
                    {client.name}
                  </div>
                </TableCell>

              </Link>
              <TableCell align="right">{client.industry}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
