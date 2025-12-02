import React from 'react'
import { UserCard } from '../../molecules/UserCard/UserCard'
import { Box, Pagination } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changePageAC } from '../../../store/reducers/usersReducer'
import '..//../organisms/UsersList/UserList.css'
export const UsersList = ({ users }) => {
  const dispatch = useDispatch()

  const { totalUsersCount, currentPage } = useSelector((state) => state.usersData)

  let pageCount = Math.round(totalUsersCount / 100)

  let pages = []

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  const changePage = (e, newPage) => {
    dispatch(changePageAC(newPage))
  }

  return (
    <Box>

      <Box className='page'>
       <Pagination
  onChange={changePage}
  page={currentPage}
  count={pageCount}
  color="secondary"
  sx={{
    '& .MuiPaginationItem-root': {
      color: 'white',
      fontWeight: 'bold',
    },
    '& .Mui-selected': {
      backgroundColor: '#1976d2',
      color: 'white',
    },
  }}
/>
      </Box>

      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
      >
        {
          users?.map((user) => < UserCard key={user.id} user={user} />)
        }
      </Box>
    </Box>
  )
}
