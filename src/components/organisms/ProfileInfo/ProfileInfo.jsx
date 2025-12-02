import { Box, Typography } from '@mui/material'
import React from 'react'
import ProfileHeader from '../../molecules/ProfileHeader/ProfileHeader'
import { ProfileDescription } from '../../molecules/ProfileDescription/ProfileDescription'

export const ProfileInfo = ({profile}) => {

  

    const profileHeader = {
        id : profile?.userId ,
        name : profile?.fullName,
        img : profile?.photos?.large
    }
    
    return (
        <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}
        >

            <ProfileHeader profileHeader={profileHeader}/>
        


            <Box sx={{ flexGrow: 1 }}>
<ProfileDescription profile={profile}/>
            </Box>
        </Box>


    )
}
