import React, { useEffect, useRef, useState } from 'react'
import ProductTable from '../../Component/ProductTable'
import ProductApi, {PAGE_SIZE} from '../../Apis/ProductApi'
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

  const [pagingData, setPagingData] = useState({
    currentPage: 1,
    total: 0,
    limit: 5,
    search: "",  
  });

  
 
  
  const ref = useRef(null)


  const getPagingProduct = async() =>{
    const res = await ProductApi.getPaging(pagingData.limit, pagingData.currentPage,
      ref.current.value?.trim() && {name: ref.current.value?.trim()},)


    const {data, headers} = res;
    setPagingData({
      ...pagingData,
      total: headers["x-total-count"]
    })
    setListProduct(data)
  }

  useEffect(() => {
    getPagingProduct();
  }, [pagingData.currentPage]);

  const handleSearch = async () => {
    // try {
    //   const searchTerm = ref.current.value.trim(); // Lấy và loại bỏ khoảng trắng của giá trị từ input search
    //   if (!searchTerm) {
    //     // Nếu giá trị search rỗng, fetch tất cả sản phẩm
    //     await getPagingProduct();
    //   } else {
    //     // Nếu có giá trị search, gọi API để lấy danh sách sản phẩm tương ứng
    //     const res = await ProductApi.getAllList(); // Lấy danh sách tất cả sản phẩm 
    //     const filteredProducts = res.data.filter(product =>
    //       product.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //     setListProduct(filteredProducts);
    //     getPagingProduct(Math.ceil(filteredProducts.length / PAGE_SIZE) )
    //   }
    // } catch (error) {
    //   console.error("Error searching products:", error);
    // }
    if(ref.current.value?.trim() &&  pagingData.currentPage > 1){
    setPagingData({
      ...pagingData,
      currentPage: 1,
      search: ref.current.value?.trim(),
    })
    }
    else {
      getPagingProduct()
    }
  };
  

  const handleAddBtn = () =>{
    setIsOpenModal(true)
    setInitDataModal({})
  }

  return (
    <ProductModalContext.Provider value={{isOpenModal,setIsOpenModal,initDataModal,setInitDataModal,handleSearch,pagingData, setPagingData, refetch: getPagingProduct}}>

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

      <ProductTable data={listProduct}  />
    </ProductModalContext.Provider>
  )
}
