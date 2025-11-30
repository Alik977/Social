import React from 'react'
import { UserCard } from '../../molecules/UserCard/UserCard'
import { Box } from '@mui/material'

export const UsersList = ({users}) => {
  return (
     <Box>
        {
          users?.map((user)=><UserCard key={user.id} user={user}/>)
        }
      </Box>
  )
}
