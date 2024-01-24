import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdPointOfSale } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";


const Sidenav = () => {
  return (
    <div className='p-6 bg-blue-400 position-fix h-[1000px] w-[190px]'>
      <div className='flex items-center justify-center flex-col'>
        <div className='flex flex-row items-center'>
        <FaHome />
        <span>Dashboard</span>
      </div>
      <div className='flex flex-row items-center'>
      <FaUsers />
        <span>Usermanagement</span>
      </div>
      <div className='flex flex-row items-center'>
      <MdPointOfSale />
        <span>Point of Sale</span>
      </div>
      <div className='flex flex-row items-center'>
      <FaBoxArchive />
        <span>Archieved</span>
      </div>
      <div className='flex flex-row items-center'>
      <MdOutlineSettings />
        <span>About System</span>
      </div>
        </div>
    </div>

  )
}

export default Sidenav