import { PiUserCircleDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export const Login = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 h-screen flex justify-center items-center ">
      {/* Container for Login */}
      <div className="flex flex-row animate-jump animate-once animate-duration-500 animate-delay-0 animate-ease-in animate-alternate-reverse">
        {/* image */}
        <div className="loginimg bg-white justify-center items-center h-[500px] w-[400px] p-5"></div>
        <div className="bg-sky-500 h-[500px] w-[400px] flex flex-col justify-center p-8">
          <div className="flex justify-center items-center">
          <PiUserCircleDuotone className="h-[200px] w-[400px]"/>
          </div>
          <form action="">
          <div className="flex justify-center items-center bg-blue1 rounded-[20px] p-[2px] my-[20px] h-[40px]">
          <CiUser className="h-[30px] w-[45px]"/>
            <input type="text" placeholder="Username" className="bg-transparent focus:outline-none focus:shadow-none" />
          </div>
          <div className="flex justify-center items-center bg-blue1 rounded-[20px] p-[5px]" >
            <CiLock className="h-[30px] w-[50px]"/>
            <input type="text" placeholder="Password" className="bg-transparent focus:outline-none focus:shadow-none"/>
          </div>
          <div className="flex justify-center items-center mt-[20px]">
            <Link to='/' className="bg-red-500 rounded-[10px] h-[40px] w-[100px] flex justify-center items-center">Log in</Link>
          </div>
          </form>
          <div className="flex justify-center items-center mt-[20px]">
            <span className="mr-[10px]">Don't have account?</span><Link to='/Register'>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
