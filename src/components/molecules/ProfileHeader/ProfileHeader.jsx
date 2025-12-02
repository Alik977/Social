import { Box, Button } from '@mui/material';
import React from 'react'

import { ProfileName } from '../../atoms/ProfileName/ProfileName';
import { ProfileImg } from '../../atoms/ProfileImg/ProfileImg';
import { useDispatch } from 'react-redux';
import { changePhotoThunk } from '../../../store/reducers/profileReducer';
const ProfileHeader = ({profileHeader}) => {
  const dispatch = useDispatch()

  const changeImg = (e) => {
    const file = e.target.files[0]
    // console.log(file);
    dispatch(changePhotoThunk(file))
    
  }
  return (
    <Box

    >
        <ProfileName profileName={profileHeader?.name}/>
        <ProfileImg profileImg={profileHeader.img}/>
        {/* //changePhotoThunk */}
        <input type='file' onChange={changeImg}/>
        {/* <Button variant='contained'>Edite Picture</Button> */}
    </Box>
  )
}

export default ProfileHeader