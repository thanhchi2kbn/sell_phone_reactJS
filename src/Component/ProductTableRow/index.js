import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TableCell, TableRow } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import ProductApi from '../../Apis/ProductApi';
import './style.css'
import ProductModalContext from '../../Contexts/ProductModalContext';
export default function ProductTableRow({ row }) {
  const { setIsOpenModal, setInitDataModal,pagingData, setPagingData  }
  = React.useContext(ProductModalContext)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };


   const handleDeleteProduct = async () => {
    await ProductApi.deleteByID(row.id);
    setPagingData({
      ...pagingData,
      currentPage: 1,
    });
    handleCloseDeleteModal(); // Đóng modal sau khi xóa
  };

  const handleEditProduct = () =>{
    setInitDataModal(row)
    setIsOpenModal(true)
  }
  

  // Destructuring to access details properties
  const { brand, operatingSystem, camera, display, memory, color } = row.details;

  function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}
  return (
    <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{row.name}</TableCell>
      <TableCell><img  className='img-product' src={row.image} alt='img'></img> </TableCell>
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
      <TableCell>{formatPrice(row.price)}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleEditProduct}>
          <EditIcon />
        </IconButton>

        <IconButton onClick={handleOpenDeleteModal}>
          <DeleteIcon />
        </IconButton>
      </TableCell>

    {/* Modal xác nhận xóa */}
    <Dialog style={{padding:"10px"}}
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal} color="primary">
            Cancel
          </Button>
          <Button variant="contained"  onClick={() =>handleDeleteProduct(row.id)} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

    </TableRow>
  )
}
