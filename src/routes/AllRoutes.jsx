
import { Route, Routes } from "react-router-dom";
import { Home , About } from "../pages/compiler";



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}>
                
            </Route>
            <Route path="/about" element={<About />}>
                
            </Route>
        </Routes>
    </div>
  )
}

export default AllRoutes