import { Route , Routes} from "react-router-dom";
import { Dashboard , Login , Register } from "../Compiler";

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="Register" element={<Register/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes