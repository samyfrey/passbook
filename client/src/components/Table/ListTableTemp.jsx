import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './listTable.scss'
// import { Link } from 'react-router-dom'

export default function ListTableTemp ({ data, news }) {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            {data.map(item => (
              <TableCell key={item.id}className="tableCell">{item}</TableCell>

            ))}
          </TableRow>

        </TableHead>
        <TableBody>
          {news.map(item => (
            <TableRow
              key={item.id}
            >
              <TableCell className="tableCell">{item.title}</TableCell>
              <TableCell className="tableCell">{item.publishedAt}</TableCell>
              {/* <Link to={`/clients/${client._id}`}>
                <TableCell>
                  {client.name}
                </TableCell>

              </Link> */}
              {/* <TableCell align="right">{client.industry}</TableCell> */}

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  )
}
