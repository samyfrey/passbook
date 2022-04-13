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

export default function NewsTable ({ data }) {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className="tableCell">Headline</TableCell>
            <TableCell className="tableCell">Published</TableCell>

            {/* {data.map(item => (
              <TableCell key={item.id}className="tableCell">{item}</TableCell>

            ))} */}
          </TableRow>

        </TableHead>
        <TableBody>
          {data.map(news => (
            <TableRow
              key={news.id}
            >

              <TableCell className="tableCell">{news.title}</TableCell>
              <TableCell className="tableCell">{news.publishedAt}</TableCell>

            </TableRow>
          ))}

        </TableBody>

      </Table>
    </TableContainer>
  )
}
