import React from 'react'
import AllRoutes from './routes/AllRoutes'
import Footer from './Components/Header-Footer/Footer'
import Header from './Components/Header-Footer/Header'
import "./index.css"

function App() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <Header />
      <AllRoutes/>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default App