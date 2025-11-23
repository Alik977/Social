import { useEffect, useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { SocialAPI } from './api/api'

function App() {
 const dispatch= useDispatch()
const {users}=useSelector((state)=>state.usersData)

useEffect(()=>{
SocialAPI.getUsers(dispatch)

},[])
  return (
    <>
     
    </>
  )
}

export default App
