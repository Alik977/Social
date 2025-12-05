import { useState } from "react"
import { loginThunk } from "../../../store/reducers/authReducer"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { useLocalStorage } from "../../../shared/hooks/useLocalStorage"

import '../../../components/pages/Home/Home.css'
export const Home = () => {
  const {userId} = useSelector((state) => state.authData)
  const [a, setA] = useState(localStorage.getItem('userId'))
  console.log(a);
  
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()


    let body = {email, password}
    dispatch(loginThunk({email : 'alikhakobyanshotayi97@gmail.com', password : 'alik1997'}))
    setA(() => true)
  }

  if(userId){
    return <Navigate to={`/users/profile/${userId}`}/>
  }
  
  return (
    <div >
      <form onSubmit={handleSubmit} className="login">
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="login1" placeholder="email" type="text" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className="login1" placeholder="password" type="password" />
        <button>📲</button>
      </form>
    </div>
  )
}