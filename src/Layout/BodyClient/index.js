import React, { useEffect, useState } from 'react'
import "./style.css"
import ProductItem from '../ProductItem'
import ProductApi from '../../Apis/ProductApi'


export default function BodyClient() {
  const [listProduct, setListProduct] = useState([])
  
  const fetchListProduct = async (config = {}) => {
    const res = await ProductApi.getAll(config);
    setListProduct(res.data)
  }

  useEffect(() => {
    fetchListProduct()
  }, [])




  return (
    <div className='product-list'>

      {listProduct.map((item)=>(<ProductItem item={item}/>))}

    </div>
  )
}
