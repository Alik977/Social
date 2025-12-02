import { Typography } from '@mui/material'
import React from 'react'

export const ProfileName = ({profileName}) => {
  return (
    <Typography
            variant='h3'
        >{profileName}
        </Typography>
  )
}
