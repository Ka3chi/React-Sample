import { Link } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";

export const Signup = () => {
  return (
    <div className="flex justify-center items-center pt-[20px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 h-screen">
      
      <div className=" bg-lightblue2 h-[400px] w-[300px] rounded-[30px] flex justify-center items-center p-10 flex-col ">
        <div className="flex justify-center items-center text-white text-[30px] font-medium">
          <span>Register Form</span>
        </div>
        <form action="" className="p-[20px] g-4 ">
          <div className="flex flex-row ">
          <FaUser className="h-[26px] w-[40px] border-b-[2px] text-[white] p-1 "/>
          <input type="text" placeholder="   Username" className=" bg-transparent text-[white] border-b-[2px] flex mb-[30px]"/>
          </div>
          <div className="flex flex-row ">
          <HiOutlineMail className="h-[26px] w-[40px] border-b-[2px] text-[white] p-1 "/>
          <input type="text" placeholder="   Email" className=" bg-transparent text-[white] border-b-[2px] flex mb-[30px]"/>
          </div>
          <div className="flex flex-row ">
          <CiLock  className="h-[26px] w-[40px] border-b-[2px] text-[white] p-1 "/>
          <input type="text" placeholder="   Confirm Password" className=" bg-transparent text-[white] border-b-[2px] flex mb-[30px]"/>
          </div>
          <div className="flex flex-row ">
          <CiLock  className="h-[26.5px] w-[40px] border-b-[2px] text-[white] p-1 "/>
          <input type="text" placeholder="   Password" className=" text-[white] bg-transparent border-b-[2px] flex items-center justify-center" />
          </div>
          <div className="flex justify-center items-center mt-[20px]  ">
            <Link to='/Login' className="text-[white] justify-center items-center flex bg-green-700 h-[40px] w-[100px] rounded-[10px]">Sign Up</Link>
            </div>
        </form>
    </div>
    </div>
  )
}
