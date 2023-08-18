import React, { useEffect, useRef, useState } from 'react'
import { Button, IconButton, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import UserApi from '../../Apis/UserApi';
import UserTable from '../../Component/UserTable';
import UserModalContext from '../../Contexts/UserModalContext';
import UserModal from '../../Component/UserModal';

export default function UserPage() {
  const [listUser, setListUser] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [initDataModal, setInitDataModal] = useState({})
  const ref = useRef(null)
  const handleSearch = React.useCallback(() => {
    const text = ref.current.value?.trim().toLowerCase(); // Chuyển thành chữ thường
    fetchListUser(
      ...(text && [
        {
          params: {
            email: text,
          },
        },
      ])
    );
  }, [ref]);
  
  const fetchListUser = async (config = {}) => {
    const res = await UserApi.getAll(config);
    setListUser(res.data)
  }
  useEffect(() => {
    fetchListUser()

  }, [])

  const handleAddBtn = () =>{
    setInitDataModal({})
    setIsOpenModal(true)
  }

  return (
    <UserModalContext.Provider value={{isOpenModal,setIsOpenModal,initDataModal,setInitDataModal,handleSearch}}>

      <UserModal/>
      <div className='main-content' >
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

      <UserTable data={listUser} reFetch={fetchListUser} />
    </UserModalContext.Provider>
  )
}
