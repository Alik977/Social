import React from 'react'
import userImg from '../../../assets/image/User-Avatar-Profile-PNG-Photos.png'

export const ProfileImg = ({profileImg}) => {
  return (
    <img src={profileImg ? profileImg : userImg} />
  )
}
