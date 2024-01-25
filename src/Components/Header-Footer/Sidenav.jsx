import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdPointOfSale } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";
import logo from "../../assets/home/logo.png"


const Sidenav = () => {
  return (
    //side nav
    <div className=' bg-lightblue2 position-fix h-screen w-[242px] '>
      <div className='flex items-center justify-center gap-[15px] ml-[20px] mt-[2px] mr-[40px]'>
        <img src={logo} alt="" className='h-[70px] w-[80px]' />
        <span className='text-[25px] font-extrabold'>Guardians</span>
      </div>
      <div className='flex justify-center flex-col gap-[15px] ml-[20px] mt-[50px] mr-[40px]'>
        <div className='flex flex-row items-center bg-white rounded-[5px] ease-in-out duration-300 hover:bg-white h-[40px] w-[190px] pl-[5px]'>
          <FaHome className='h-[20px] w-[20px] m-[5px]' />
          <span className='text-[16px] font-medium ml-[10px]'>Dashboard</span>
        </div>
        <div className='flex flex-row items-center  rounded-[5px] ease-in-out duration-300 hover:bg-white h-[40px] w-[190px] pl-[5px]'>
          <FaUsers className='h-[20px] w-[20px] m-[5px] mar' />
          <span className='text-[16px] font-medium ml-[10px]'>Usermanagement</span>
        </div>
        <div className='flex flex-row items-center  rounded-[5px] ease-in-out duration-300 hover:bg-white h-[40px] w-[190px] pl-[5px]'>
          <MdPointOfSale className='h-[20px] w-[20px] m-[5px]' />
          <span className='text-[16px] font-medium ml-[10px]'>Point of Sale</span>
        </div>
        <div className='flex flex-row items-center  rounded-[5px] ease-in-out duration-300 hover:bg-white h-[40px] w-[190px] pl-[5px]'>
          <FaBoxArchive className='h-[20px] w-[20px] m-[5px]' />
          <span className='text-[16px] font-medium ml-[10px]'>Archieved</span>
        </div>
        <div className='flex flex-row items-center  rounded-[5px] ease-in-out duration-300 hover:bg-white h-[40px] w-[190px] pl-[5px]'>
          <MdOutlineSettings className='h-[25px] w-[21px] m-[5px]' />
          <span className='text-[16px] font-medium ml-[10px]'>About System</span>
        </div>
      </div>
    </div>

  )
}

export default Sidenav