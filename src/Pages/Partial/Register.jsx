import { Link } from "react-router-dom"
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";


export const Register = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 h-screen flex justify-center items-center ">
      <div className="flex flex-row animate-jump animate-once animate-duration-500 animate-delay-0 animate-ease-in animate-alternate-reverse">
        <div className="bg-sky-500 h-[500px] w-[400px] flex flex-col justify-center p-8 rounded-[10px]">
          {/* sign up start here */}
          <div className="flex justify-center items-center mb-[25px]"><span className="font-medium text-[25px]">Sign Up</span></div>
          <form action="">
            <div className="flex justify-center items-center bg-blue1 rounded-[20px] my-[30px] p-[2px] h-[40px]">
              <CiUser className="h-[30px] w-[45px]" />
              <input type="text" placeholder="  Username" className="bg-transparent focus:outline-none focus:shadow-none flex justify-center items-center " />
            </div>
            <div className="flex justify-center items-center bg-blue1 rounded-[20px] p-[2px] my-[30px] h-[40px]">
              <AiOutlineMail className="peer h-[30px] w-[45px]" />
              <div>
              <input type="email" placeholder="  Email" className="peer ... bg-transparent focus:outline-none focus:shadow-none"/>
              <p class="absolute bottom-[231px] left-[80px] invisible peer-invalid:visible text-pink-600 text-sm ">
                Please provide a valid email address.
              </p>
              </div>
            </div>
            <div className="flex justify-center items-center bg-blue1 rounded-[20px] p-[2px] my-[30px] h-[40px]">
              <CiLock className="h-[30px] w-[45px]" />
              <input type="text" placeholder="  Password" className="bg-transparent focus:outline-none focus:shadow-none" />
            </div>
            <div className="flex justify-center items-center bg-blue1 rounded-[20px] p-[2px] my-[30px] h-[40px]">
              <CiLock className="h-[30px] w-[45px]" />
              <input type="text" placeholder="  Confirm Password" className="bg-transparent focus:outline-none focus:shadow-none" />
            </div>
            <div className="flex justify-center items-center mt-[20px]">
              <Link to='/login' className="bg-green-500 rounded-[10px] h-[40px] w-[1200px] flex justify-center items-center">Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
