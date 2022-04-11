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

export default function LoansTable ({ clients }) {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Company Name</TableCell>
            <TableCell className="tableCell">Description Name</TableCell>
            <TableCell className="tableCell" align="right">Amount</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map(client => (
            client.loans.map(loan =>
              <TableRow key={loan._id}>
                <Link to={`/clients/${client._id}`}>
                  <TableCell>
                    {client.name}
                  </TableCell>

                </Link>                <TableCell >{loan.description}</TableCell>
                <TableCell align="right">{loan.amount}</TableCell>

              </TableRow>
            )

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
