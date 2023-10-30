import React from 'react'
import { Route, Routes } from "react-router-dom"
import Posts from './Posts'
import Register from './Register'
import Login from './Login'
import CreatePost from './CreatePost'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createPost' element={<CreatePost />} />
    </Routes>
  )
}

export default AllRoutes
