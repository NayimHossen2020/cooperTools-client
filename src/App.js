import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Auth/RequireAuth';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import NotFound from './Pages/NotFound/NotFound';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Auth/RequireAdmin';

function App() {
  return (
    <div className='backgroundApp'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='purchase/:productId' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyOrders />} > </Route>
          <Route path='addReview' element={<AddReview />} />
          <Route path='profile' element={<MyProfile />} />
          <Route path='users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          } />
        </Route>
        <Route path='signIn' element={<SignIn />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
