import React from 'react'
import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import {SocialAPI} from '../../../api/api'
const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersData);
  console.log(users);

  useEffect(() => {
    SocialAPI.getUsers(dispatch);
  }, []);
  return (
    <div>Home</div>
  )
}

export default Home