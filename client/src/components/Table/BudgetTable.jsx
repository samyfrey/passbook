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

export const BudgetTable = ({ budgets }) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" size="small">Budget Category</TableCell>
            <TableCell className="tableCell" align="right" size="small">Amount  <span className='amountStyle' >($MM)</span></TableCell>
            <TableCell className="tableCell" align="right" size="small">Actions</TableCell>

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
                  <Link to={`/budget/${budget._id}`}>
                    <div className="viewButton">Edit</div>
                  </Link>

                </div>
              </TableCell>

            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  )
}
