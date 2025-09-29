import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore consequuntur aperiam. Ullam ad quia magnam nesciunt voluptate, itaque quas hic nostrum ipsam similique qui consectetur pariatur. Natus, tempore quae!
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
                        <li className=' hover:text-black'>Home</li>
                        <li className=' hover:text-black'>About Us</li>
                        <li className=' hover:text-black'>Delivery</li>
                        <li className=' hover:text-black'>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
                    <li>+91 85546415615</li>
                    <li>contact@fitinframe.com</li>
                </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ FitInFrame.com All Right reserved.</p>
            </div>
        </div>
    )
}

export default Footer