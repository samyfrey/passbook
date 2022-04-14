import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'

export default function LoansTable ({ clients }) {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" size="small">Description Name</TableCell>
            <TableCell className="tableCell" size="small">Company Name</TableCell>
            <TableCell className="tableCell" align="right" size="small">Credit Limit <span className='amountStyle' >($MM)</span></TableCell>
            <TableCell className="tableCell" align="right" size="small">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map(client => (
            client.loans.map(loan =>
              <TableRow key={loan._id}>
                <TableCell >{loan.description}</TableCell>
                <Link to={`/clients/${client._id}`}>
                  <TableCell >
                    <div className="cellWrapper">
                      <img src={`https://logo.clearbit.com/${client.name}.com`} alt="" className="image" />
                      {client.name}
                    </div>
                  </TableCell>
                </Link>
                <TableCell size="small"align="right">{loan.amount}</TableCell>
                <TableCell size="small"align="right">
                  <span className={`status ${loan.status}`}>{loan.status}</span>

                </TableCell>

              </TableRow>
            )

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
