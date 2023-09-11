import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React from 'react'

export const FlightsTable = (props:any) => {
  return (
<TableContainer>
      <Table  aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>Uçuş Kodu</TableCell>
            <TableCell align="right">Kalkış</TableCell>
            <TableCell align="right">İniş</TableCell>
            <TableCell align="right">Gidiş Tarihi</TableCell>
            <TableCell align="right">Geri Dönüş Tarihi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row:any) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.destination}</TableCell>
              <TableCell align="right">{row.flightDate}</TableCell>
              <TableCell align="right">{row.backDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}
