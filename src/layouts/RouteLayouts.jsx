import { Outlet } from "react-router-dom"
import Header from "../components/home/Header"

const RouteLayouts = () => {
  return (
    <div>
        <Header />
        <Outlet/>
    </div>
  )
}

export default RouteLayouts
