import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-row justify-center items-center bg-cyan p-[10px]'>
      <div className='flex justify-center'>
        <MdOutlineMenu className='h-[40px] w-[40px]' />
      </div>
      <div className='w-[937px]'></div>
      <div className='flex justify-center items-center'>
        <input type="text" placeholder='Search' className='h-[30px] text-[13px] rounded-l-[5px] p-[5px]' />
        <div className='bg-blue-500 rounded-r-[5px]'>
          <IoMdSearch className='h-[30px] w-[30px]' />
        </div>

        <div className='w-[60px]'></div>
        <FaRegUser className='h-[25px] w-[30px]' />
        <span className='pl-[5px] font-semibold'>Admin</span>
        <Link to="Login"><IoLogOutOutline className='h-[20px] w-[20px]'/></Link>
      </div>
    </div>
  )
}

export default Header
