import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserTableRow from '../UserTableRow';

export default function UserTable({data, reFetch}) {
    
  return (
    <>
      <TableContainer component={Paper} style={{marginTop: '20px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='table-title-product'>
            <TableCell>Email</TableCell>
            <TableCell >Password</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <UserTableRow row={row} key={row.id} reFetch={reFetch}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
