import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import logo from "../../assets/home/logo.png"
import { FaRegUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";


const Header = () => {
  return (
    <div className='flex flex-row justify-center items-center bg-lightblue2 p-[10px]'>
      <div className='flex items-center'>
        <img src={logo} alt="" className='h-[50px] w-[60px]' />
        <span className='text-[20px] font-extrabold'>Guardians</span>
      </div>
      <div className='w-[90px]'></div>
      <div className='flex justify-center'>
        <MdOutlineMenu className='h-[40px] w-[40px]' />
      </div>
      <div className='w-[800px]'></div>
      <div className='flex justify-center items-center'>
        <input type="text" placeholder='Search' className='h-[30px] rounded-l-[5px] p-[5px]' />
        <div className='bg-blue-500 rounded-r-[5px]'>
          <IoMdSearch className='h-[30px] w-[30px]' />
        </div>

        <div className='w-[60px]'></div>
        <FaRegUser className='h-[25px] w-[30px]' />
        <span className='pl-[5px] font-semibold'>Admin</span>
      </div>
    </div>
  )
}

export default Header
