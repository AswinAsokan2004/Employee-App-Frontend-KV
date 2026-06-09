import {combineReducers} from "redux";
import { EmployeeReducer } from "./employeeReducer";

export const reducer = combineReducers({
    employee: EmployeeReducer,
    // department: departmentReducer,
})