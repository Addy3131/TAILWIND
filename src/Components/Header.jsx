import React from 'react';
import { FaBars } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-2'>
        <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-3xl font-playfair text-white px-2.5 py-1.5 rounded-2xl'>Portfolio</button>
      </div>
      <ul className='hidden lg:flex justify-center items-center font-lato gap-6 text-2xl rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-100 hover:text-slate-400 text-white'>
        <li>
            <a href="#">Plans</a>
        </li>
        <li>
            <a href="#">Book a Call</a>
        </li>
        <li>
            <a href="">Contact us</a>
        </li>
      </ul>
      <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
        <a href="#" className='text-gray-800'>Sign In</a>
        <a href="#" className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-800 text-white'>Wishlist</a>
      </div>
      <div className='py-4 lg:hidden'>
            <FaBars />
      </div>
    </div>
  );
}

export default Header;
