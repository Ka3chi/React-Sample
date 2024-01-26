import Header from '../../Components/Header-Footer/Header'
import Footer from '../../Components/Header-Footer/Footer'

export const Dashboard = () => {
  return (
      <div className="grid  grid-cols h-[1500px] w-screen overflow-x-hidden">
        <Header/>
        {/* Image here */}
        <div className='home bg-violet-500 h-[800px]' >
        </div>
        <div className=" bg-sky-500 h-[773px] p-6 ">
          {/* //grid start here */}
          <div className="grid grid-cols-4 gap-5 h-[600px] w-[1490px] mx-[20px] mb-[20px] p-[20px] mt-[90px]">
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Best Seller</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Family Meals</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Breakfast</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Chickenjoy</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Burgers</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Jolly Spaghetti</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Burger steak</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Super Meals</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Chicken Sandwhich</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Spaghetti</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Desserts</span>
            </div>
            <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
              <span>Beverages</span>
            </div>
          </div>
        </div>
        <div className='grid grid-col '>
        <Footer/>
        </div>
      </div>
  )
}
