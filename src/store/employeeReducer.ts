// import {EMPLOYEE_ACTION_TYPES, type Employee} from "./employee.types";

export interface Employee {
    name: string;
    id: string;
    joining: string;
    status: string;
    role: string;
    experience: string;
    addressLine1: string;
    city: string;
    country: string;
    postalCode: string;
}

interface EmployeeList {
    employeeList: Employee[];
    currentEmployee: Employee
}

export const initialState = {
 employeeList: [
        {
            name: "Vishal M",
            id: "E6385",
            joining: "12.04.2021",
            role: "Full Stack",
            status: "probation",
            experience: "5 Years",
            addressLine1: "12 Green Meadows",
            city: "Kochi",
            country: "IN",
            postalCode: "682030",
        },
        {
            name: "Susan Kurian",
            id: "E9152",
            joining: "12.04.2021",
            role: "UI Engineer",
            status: "probation",
            experience: "7 Years",
            addressLine1: "45 Palm Residency",
            city: "Thrissur",
            country: "IN",
            postalCode: "680001",
        },
        {
            name: "Yugesh",
            id: "E0183",
            joining: "12.04.2021",
            role: "Devops",
            status: "active",
            experience: "6 Years",
            addressLine1: "78 Lake View Apartments",
            city: "Bengaluru",
            country: "IN",
            postalCode: "560034",
        },
        {
            name: "Midhun",
            id: "E8001",
            joining: "12.04.2021",
            role: "Full Stack",
            status: "active",
            experience: "5 Years",
            addressLine1: "21 Hilltop Residency",
            city: "Kozhikode",
            country: "IN",
            postalCode: "673001",
        },
        {
            name: "Abhijith",
            id: "E6153",
            joining: "12.04.2021",
            role: "UI Engineer",
            status: "inactive",
            experience: "7 Years",
            addressLine1: "9 River Side Villas",
            city: "Thiruvananthapuram",
            country: "IN",
            postalCode: "695001",
        },
    ],
    currentEmployee: {
            name: "Abhijith",
            id: "E6153",
            joining: "12.04.2021",
            role: "UI Engineer",
            status: "inactive",
            experience: "7 Years",
            addressLine1: "9 River Side Villas",
            city: "Thiruvananthapuram",
            country: "IN",
            postalCode: "695001",
    }
}

export const EMPLOYEE_ACTION_TYPES = {
    ADD: "employee/ADD",
    DELETE: "employee/DELETE",
    UPDATE: "employee/UPDATE"
} as const;

// export const addEmployeeActionCreator = (employee:Employee) => {
//     return (
//         type: EMPLOYEE_ACTION_TYPES.ADD,
//         payload: employee,);
        
// }

type AddEmployeeAction = {
    type: typeof EMPLOYEE_ACTION_TYPES.ADD;
    payload: Employee;
};

type EmployeeAction = | AddEmployeeAction  

export const EmployeeReducer = (
    state: EmployeeList = initialState,
    action: EmployeeAction
): EmployeeList => {
    switch(action.type) {
        case EMPLOYEE_ACTION_TYPES.ADD: {
            // const record = employeeFromFormToRecord(
            //     action.payload,
            //     nextEmployeeId(state.employees)
            // );
            return {...state, employeeList: [...state.employeeList, action.payload]}
        }
        default: {
            return state
        }
    }
}
