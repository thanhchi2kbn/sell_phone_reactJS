import React, { useEffect, useRef, useState } from 'react'
import ProductTable from '../../Component/ProductTable'
import ProductApi from '../../Apis/ProductApi'
import { Button, IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import "./style.css"
import ProductModalContext from '../../Contexts/ProductModalContext';
import ProductModal from '../../Component/ProductModal';

export default function ProductPage() {
  const [listProduct, setListProduct] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [initDataModal, setInitDataModal] = useState({})
  const ref = useRef(null)
  const handleSearch = React.useCallback(() => {
    const text = ref.current.value?.trim().toLowerCase(); // Chuyển thành chữ thường
    fetchListProduct(
      ...(text && [
        {
          params: {
            name: text,
          },
        },
      ])
    );
  }, [ref]);
  
  const fetchListProduct = async (config = {}) => {
    const res = await ProductApi.getAll(config);
    setListProduct(res.data)
  }
  useEffect(() => {
    fetchListProduct()

  }, [])

  const handleAddBtn = () =>{
    setInitDataModal({})
    setIsOpenModal(true)
  }

  return (
    <ProductModalContext.Provider value={{isOpenModal,setIsOpenModal,initDataModal,setInitDataModal,handleSearch}}>

      <ProductModal/>
      <div className='main-content1' >
        <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}>
          <InputBase
            inputRef={ref}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "Search" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button onClick={handleAddBtn} variant="contained"><AddIcon /></Button>
      </div>

      <ProductTable data={listProduct} reFetch={fetchListProduct} />
    </ProductModalContext.Provider>
  )
}
