import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { UsersList } from '../../organisms/UsersList/UsersList'
import { userThunkCreator } from '../../../store/reducers/usersReducer'

import { GridLoader } from 'react-spinners'

export const Users = () => {

  const dispatch = useDispatch()
  const { users, currentPage, isLoading } = useSelector(state => state.usersData)

  useEffect(() => {
    dispatch(userThunkCreator(currentPage))
  }, [currentPage])

  return (
    <Box>
      {isLoading ? (
        <GridLoader color="#32cd32" size={50}  />
      ) : (
        <UsersList users={users} />
      )}
    </Box>
  )
}
