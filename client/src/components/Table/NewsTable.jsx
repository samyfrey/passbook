import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './listTable.scss'

export default function NewsTable ({ data }) {
  function dataFormatter (input) {
    const newsApiDate = input
    const timestamp = new Date(newsApiDate).getTime()
    const Day = new Date(timestamp).getDate()
    const Month = new Date(timestamp).toLocaleString('default', { month: 'short' })
    const Year = new Date(timestamp).getFullYear()
    const newDateFormat = `${Month} ${Day}, ${Year}`
    return newDateFormat
  }

  return (
    <div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableBody>
            {data.map(news => (
              <TableRow key={news.url}>
                <TableCell className="tableCell" size="small">
                  <a
                    href={news.url}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {news.title}
                  </a>
                </TableCell>
                <TableCell align="right"className="tableCell" size="small">{dataFormatter(news.publishedAt)}</TableCell>

              </TableRow>
            ))}

          </TableBody>

        </Table>
      </TableContainer>
    </div>
  )
}
