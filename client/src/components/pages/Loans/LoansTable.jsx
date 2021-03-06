import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'
import { deleteLoan } from '../../../api/loans'

export default function LoansTable ({ clients, user, setRender, msgAlert }) {
  async function handleDelete (user, loan, client) {
    const res = confirm('Are you sure you want to delete?')
    if (res) {
      try {
        setRender(false)
        const loanId = loan._id
        const transactionId = client._id

        await deleteLoan(user, loanId, transactionId)
        setRender(true)
        msgAlert({
          heading: 'Transaction deleted',
          variant: 'success'
        })
      } catch (error) {
        msgAlert({
          heading: 'Failed',
          message: 'Make sure you are logged in before deleting',
          variant: 'danger'
        })
      }
    }
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" size="small">Description Name</TableCell>
            <TableCell className="tableCell" size="small">Company Name</TableCell>
            <TableCell className="tableCell" align="right" size="small">Credit Limit <span className='amountStyle' >($MM)</span></TableCell>
            <TableCell className="tableCell" align="right" size="small">Status</TableCell>
            <TableCell className="tableCell" align="right" size="small">Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map(client => (
            client.loans.map(loan =>
              <TableRow key={loan._id}>
                <TableCell >{loan.description}</TableCell>
                <TableCell >
                  <Link to={`/clients/${client._id}`}>
                    <div className="cellWrapper">
                      <img src={`https://logo.clearbit.com/${client.name}.com`} alt="" className="image" />
                      <span className="link">{client.name}</span>
                    </div>
                  </Link>
                </TableCell>
                <TableCell size="small"align="right">{loan.amount}</TableCell>
                <TableCell size="small"align="right">
                  <span className={`status ${loan.status}`}>{loan.status}</span>
                </TableCell>
                <TableCell align="right">
                  <div className="cellAction">
                    <div className="deleteButton" onClick={() => handleDelete(user, loan, client)}>Delete</div>
                  </div>
                </TableCell>

              </TableRow>
            )

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
