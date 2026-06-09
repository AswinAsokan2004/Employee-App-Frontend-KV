import MainBar from "./components/employee-home/MainBar";
import SideBar from "./components/employee-home/utils/SideBar";
import { Outlet } from "react-router";
function Layout(){ 
    return (
        <>
            <MainBar />
            <div className="container">
                <SideBar/>
                {/* {children}   */}
                <Outlet />
            </div>
        </>
    )
}

export default Layout;