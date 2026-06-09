import { useParams } from "react-router";
import EmployeeDetails from "./EmployeeDetails";

function EmployeeIDDetails(){
    const params = useParams()
    console.log(params)

    return <EmployeeDetails/>
}

export default EmployeeIDDetails