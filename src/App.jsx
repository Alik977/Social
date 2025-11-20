import { useEffect, useState } from 'react'

import './App.css'

function App() {

useEffect(()=>{
fetch('https://social-network.samuraijs.com/api/1.0/users')
.then((res)=>res.json())
.then(res=>console.log(res))

},[])
  return (
    <>
     
    </>
  )
}

export default App
