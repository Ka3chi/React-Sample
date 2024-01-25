import Sidenav from '../../Components/Header-Footer/Sidenav'
import Header from '../../Components/Header-Footer/Header'


export const Dashboard = () => {
  return (
    <div className='h-screen grid grid-cols-[auto,1fr]'>
      <Sidenav />
      <div className="grid grid-rows-[auto,1fr]">

        <Header />
        <div className=" bg-black w-[1358px] p-6 ">
          {/* //grid start here */}
          <div className="grid grid-cols-3 gap-5 h-[200px] w-[1250px] mx-[20px] mb-[20px]">
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Stocks</span>
              <span>0</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-red-500">
              <span>User</span>
              <span>0</span>
            </div>
            <div className="rounded-[30px] flex  flex-col justify-center items-center bg-green-500 ">
              <span>Stocks</span>
              <span>0</span>
            </div>
          </div>
          <div className="flex flex-row gap-[50px] p-[15px] pl-[20px]">
            <div className="bg-blue-500 h-[410px] w-[700px] rounded-[20px] flex justify-center items-center">graph chart</div>
            <div className="bg-white h-[410px] w-[500px] rounded-[20px] flex justify-center items-center">
              <span>pie chart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
