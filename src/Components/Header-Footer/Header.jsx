import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className='flex flex-row justify-center items-center bg-cyan p-[10px] md:fixed h-[76px] top-0 w-screen flex-shrink-0 bg-white'>
      <div className='flex justify-center'>
        <span className=' font-serif font-semibold text-[40px]'>SFlash</span>
      </div>
      <div className='w-[937px]'></div>
      <div className='flex justify-center items-center'>
        <input type="text" placeholder='Search' className='h-[35px] text-[13px] rounded-l-[5px] p-[5px] bg-slate-500' />
        <div className='bg-blue-500 rounded-r-[5px]'>
          <IoMdSearch className='h-[35px] w-[30px]' />
        </div>

        <div className='w-[60px]'></div>
        <Link to="Login" className='mr-[30px] font-serif font-bold'>Sign In</Link>
        <Link to="Login"><AiOutlineShoppingCart className='h-[25px] w-[25px]' /></Link>
      </div>
    </div>
  )
}

export default Header
