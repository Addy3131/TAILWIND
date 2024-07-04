import React from 'react';

const Body = () => {
  return (
    <div className='space-y-4 lg:flex'>
      <div className='lg:flex-1 lg:h-[400px] lg:order-2 lg:'><img src="./assets/main.svg" alt="" /></div>
      <div className='lg:flex-1 lg:order-1' >
        <h1 className='text-5xl font-bold font-playfair leading-tight'>Next.js developer crafting dynamic web experiences.</h1>
        <p className='font-lato text-gray-800'>Experienced Next.js developer passionate about creating efficient, responsive, and feature-rich web applications that elevate user experience and performance.</p>
        <form action="" className='flex flex-col gap-4 m-4 md:flex-row '>
            <input className='rounded py-4 px-4 placeholder:text-gray-800' type="email" placeholder='Enter email address'/>
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-800 text-white'>Inquire Now</button>
        </form>
      
      <div className='flex gap-2'>
        <img src="" alt="" />
        <p className='font-lato text-gray-800'>Dynamic Next.js developer.</p>
      </div>
      </div>
    </div>
  );
}

export default Body;

