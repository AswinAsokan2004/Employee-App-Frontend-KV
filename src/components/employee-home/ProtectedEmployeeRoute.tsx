
import { Navigate, Outlet } from "react-router";

function ProtectedEmloyeeRoute(prop: {children: React.ReactNode}){
    if (!localStorage.getItem("username") && !localStorage.getItem("gmail")){
        return <Navigate to="/" />
    }
    return <>{prop.children}</>
}

export default ProtectedEmloyeeRoute
