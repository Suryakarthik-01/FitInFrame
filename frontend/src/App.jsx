import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import NavBanner from './components/NavBanner.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Men from './pages/Men.jsx'
import Orders from './pages/Orders.jsx'
import Footer from './components/Footer.jsx'
import Collection from './pages/Collection.jsx'
import About from './pages/About.jsx'
import Women from './pages/Women.jsx'
import Product from './pages/Product.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/CArt.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import SearchBar from './components/SearchBar.jsx'
import { ToastContainer, toast } from 'react-toastify';





const App = () => {
  return (
    <>
      <NavBanner />
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[15vw]'>
        <ToastContainer/>
        <Navbar />
        <SearchBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>  
        <Footer/>      
      </div>
    </>
  )
}

export default App