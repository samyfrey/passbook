import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './listTable.scss'

export const BudgetTable = ({ creditBudget }) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Budget</TableCell>
            <TableCell className="tableCell" align="right">Amount  <span className='amountStyle' >($MM)</span></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>

            <TableCell align="right">Credit Limits</TableCell>
            <TableCell align="right">{creditBudget}</TableCell>

          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  )
}
