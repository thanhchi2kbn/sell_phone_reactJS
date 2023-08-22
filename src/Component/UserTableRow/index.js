import { TableCell, TableRow } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import UserModalContext from '../../Contexts/UserModalContext';
import UserApi from '../../Apis/UserApi';
export default function UserTableRow({ row ,reFetch}) {
  const { setIsOpenModal, setInitDataModal }
  = React.useContext(UserModalContext)

  const handleDeleteUser = async () => {
    await UserApi.deleteByID(row.id);
    reFetch();
  }

  const handleEditUser = () =>{
    setInitDataModal(row)
    setIsOpenModal(true)
  }

  const maskedPassword = `${row.password.slice(0, 3)}${'*'.repeat(row.password.length - 3)}`;

  return (
    
    <TableRow
      key={row.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{row.email}</TableCell>
      <TableCell>{maskedPassword}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleEditUser}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => { handleDeleteUser(row.id) }}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
