import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import grab from "../../assets/home/grab.png";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex items-center'>
        <div className='p-[20px]'>
            <AiOutlineMenu className='w-[28px] h-[32px]'/>
            <span className='text-[11px]'>Menu</span>
        </div>
        <div className='p-[20px] '>
            <img className='w-[91px] h-[35px]'src={grab} alt="" />
        </div>
        <div className='flex flex-row'>
            <span className='pe-2'>Be Our Partner</span>
            <FaChevronDown className='w-[10px] h-[20px] pt-2' />
        </div>
        <div>
            <span>Help Center</span>
        </div>
    </div>
  )
}

export default Header
