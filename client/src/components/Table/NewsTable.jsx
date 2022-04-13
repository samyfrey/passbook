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
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow className='tableRow'>
            <TableCell className="tableCell"size="small">Headline</TableCell>
            <TableCell className="tableCell" size="small">Published</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {data.map(news => (
            <TableRow key={news.id}>
              <TableCell className="tableCell" size="small">
                <a
                  href={news.url}
                  target='_blank'
                  rel='noopener noreferrer'>
                  {news.title}
                </a>
              </TableCell>
              <TableCell alight="right"className="tableCell" size="small">{news.publishedAt}</TableCell>

            </TableRow>
          ))}

        </TableBody>

      </Table>
    </TableContainer>
  )
}
