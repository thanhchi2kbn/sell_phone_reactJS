import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductTableRow from '../ProductTableRow';
import "./style.css"
import { Pagination, Stack, TableSortLabel, Typography } from '@mui/material';
import ProductModalContext from '../../Contexts/ProductModalContext';

export default function ProductTable({ data, reFetch }) {
  const { pagingData, setPagingData }
    = React.useContext(ProductModalContext);  

  const handlePageChange = (e, newPage) =>{
    setPagingData({
      ...pagingData,
      currentPage: newPage
    })

  }

  const [sortOrder, setSortOrder] = React.useState({
    field: 'name', // Default field to sort by
    direction: 'asc',
  });

  const toggleSortOrder = (field) => {
    if (sortOrder.field === field) {
      setSortOrder(prevSortOrder => ({
        ...prevSortOrder,
        direction: prevSortOrder.direction === 'asc' ? 'desc' : 'asc'
      }));
    } else {
      setSortOrder({
        field,
        direction: 'asc'
      });
    }
  };

  const sortedData = React.useMemo(() => {
    const sorted = [...data];
    sorted.sort((a, b) => {
      if (sortOrder.field === 'price') {
        return (sortOrder.direction === 'asc' ? a.price - b.price : b.price - a.price);
      } else if (sortOrder.field === 'name') {
        return sortOrder.direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      return 0;
    });
    return sorted;
  }, [data, sortOrder]);

  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className='table-title-product'>
              <TableCell className='sort-field'>
                <TableSortLabel
                  active={sortOrder.field === 'name'}
                  direction={sortOrder.field === 'name' ? sortOrder.direction : 'asc'}
                  onClick={() => toggleSortOrder('name')}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell >Image</TableCell>
              <TableCell >Detail</TableCell>
              <TableCell className='sort-field'>
                <TableSortLabel
                  active={sortOrder.field === 'price'}
                  direction={sortOrder.field === 'price' ? sortOrder.direction : 'asc'}
                  onClick={() => toggleSortOrder('price')}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  Price
                </TableSortLabel>
              </TableCell>

              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row) => (
              <ProductTableRow row={row} key={row.id} reFetch={reFetch} />
            ))}
          </TableBody>
        </Table>

        <div className='pagination'>
          <Stack >
            <Pagination variant="outlined" shape="rounded" count={Math.ceil(pagingData.total/pagingData.limit) } page={pagingData.currentPage} onChange={handlePageChange} />
          </Stack>
        </div>
      </TableContainer>
    </>
  )
}
