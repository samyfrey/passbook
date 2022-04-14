import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './listTable.scss'

export const BudgetTable = ({ creditBudget, budgets }) => {
  // async function handleDelete (client) {
  //   const res = confirm('Are you sure you want to delete?')
  //   if (res) {
  //     try {
  //       setRender(false)
  //       const clientId = client._id
  //       await deleteClient(user, clientId)
  //       setRender(true)
  //       msgAlert({
  //         heading: 'Post deleted',
  //         variant: 'success'
  //       })
  //     } catch (error) {
  //       msgAlert({
  //         heading: 'Failed to load',
  //         message: error.message,
  //         variant: 'danger'
  //       })
  //     }
  //   }
  // }
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Budget</TableCell>
            <TableCell className="tableCell" align="right">Amount  <span className='amountStyle' >($MM)</span></TableCell>
            <TableCell className="tableCell" align="right">Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {budgets.map(budget => (
            <TableRow
              key={budget._id}>

              <TableCell >{budget.type}</TableCell>
              <TableCell align="right">{budget.amount}</TableCell>
              <TableCell align="right">
                <div className="cellAction">
                  <div className="viewButton">Edit</div>
                  {/* <div className="deleteButton" onClick={() => handleDelete(budget)}>Delete</div> */}
                </div>
              </TableCell>

            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  )
}
