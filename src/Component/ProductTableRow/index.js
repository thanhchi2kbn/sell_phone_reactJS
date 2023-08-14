import { TableCell, TableRow } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import ProductApi from '../../Apis/ProductApi';
import './style.css'
import ProductModalContext from '../../Contexts/ProductModalContext';
export default function ProductTableRow({ row ,reFetch}) {
  const { isOpenModal, setIsOpenModal, initDataModal, setInitDataModal, handleSearch }
  = React.useContext(ProductModalContext)

  const handleDeleteProduct = async () => {
    await ProductApi.deleteByID(row.id);
    reFetch();
  }

  const handleEditProduct = () =>{
    setInitDataModal(row)
    setIsOpenModal(true)
  }
  
  // Destructuring to access details properties
  const { brand, operatingSystem, camera, display, memory, color } = row.details;


  return (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{row.name}</TableCell>
      <TableCell><img className='img-product' src={row.image}></img> </TableCell>
      {/* Display all details */}
      <TableCell>
        <div>
          <strong>Brand:</strong> {brand}<br />
          <strong>Operating System:</strong> {operatingSystem}<br />
          <strong>Camera:</strong> {camera}<br />
          <strong>Display:</strong> {display}<br />
          <strong>Memory:</strong> {memory}<br />
          <strong>Color:</strong> {color}
        </div>
      </TableCell>
      <TableCell>{row.price}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleEditProduct}>
          <EditIcon />
        </IconButton>

        <IconButton onClick={() => { handleDeleteProduct(row.id) }}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
