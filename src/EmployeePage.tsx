import Container from "./components/employee-home/Container";
import MainBar from "./components/employee-home/MainBar";
import Layout from "./Layout";
import './EmployeePage.css'
import Content from "./components/employee-home/Content";
import { useLocation } from "react-router";


function EmployeePage() {
    const {state} = useLocation();
    const employee = state ?? {
        "name": "",
        "joining": "",
        "id": "",
        "experience": "",
        "addressLine1": "",
        "city": "",
        "country": "",
        "postalCode": "",
        "op": "create",
        "role": ""
    }
    return <Content employee={employee}/>
}

export default EmployeePage;