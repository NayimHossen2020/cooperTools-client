import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Navbar from './Pages/Shared/Navbar'
import Blogs from './Pages/Blogs/Blogs'
import MyOrders from './Pages/MyOrders/MyOrders'
import AddReview from './Pages/AddReview/AddReview'
import MyProfile from './Pages/MyProfile/MyProfile'
import Dashboard from './Pages/Dashboard/Dashboard'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import Footer from './Pages/Shared/Footer'
import Purchase from './Pages/Purchase/Purchase'

function App () {
  return (
    <div className='backgroundApp'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/orders' element={<MyOrders />} />
        <Route path='/addReview' element={<AddReview />} />
        <Route path='/addReview' element={<AddReview />} />
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
