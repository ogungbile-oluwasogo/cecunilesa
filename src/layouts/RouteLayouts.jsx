import { Outlet } from "react-router-dom"
import Header from "../components/home/Header"
import Footer from "../components/home/Footer"
import SubHeader from "../components/SubHeader"

const RouteLayouts = () => {
  return (
    <div>
        <Header />
        <SubHeader />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default RouteLayouts
