import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { HeartIcon } from '@heroicons/react/24/outline';
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext)


  return (
    <>
      <div className='flex items-center justify-between py-5 font-medium'>

        <Link to='/'>
          <img src={assets.logo} className='w-32 object-contain' alt="FitInFrame Logo" />
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/Men' className='flex flex-col items-center gap-1'>
            <p>Men</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/Women' className='flex flex-col items-center gap-1'>
            <p>Women</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/Collection' className='flex flex-col items-center gap-1'>
            <p>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/About' className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

        </ul>

        <div className='flex items-center gap-6'>

          <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="search" className='w-5 cursor-pointer' />
          <HeartIcon className="h-7 w-7 text-gray-600 cursor-pointer" />

          <div className='group relative'>
            <Link to = '/login'><img src={assets.profile_icon} alt="profile" className='w-5 cursor-pointer' /></Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500'>
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-red-600">Logout</p>
              </div>
            </div>
          </div>

          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-violet-700 text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
          </Link>

          <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer sm:hidden' />
        </div>

        {/* sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180' />
              <p>back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Men'>MEN</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Women'>WOMEN</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Collection'>COLLECTION</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/About'>ABOUT</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Contact'>CONTACT</NavLink>
          </div>

        </div>


      </div>
    </>
  )
}

export default Navbar
