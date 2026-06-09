import SingleItem from "./utils/SingleItem";
import '../../EmployeePage.css'
import AttachIcon from "../../assets/attach-icon.png"
import { useEffect, useState } from "react";
import UploadProofModal from "../../UploadProofModal";
import { EMPLOYEE_ACTION_TYPES, type Employee } from "../../store/employeeReducer";
import { useDispatch } from "react-redux";

function Content({employee}){
    const [showUploadModal, setShowUploadModal] = useState(false);
    const dispatch = useDispatch();

    let operation;
    if(employee.op === "create"){
        operation = "Create"
    }else{
        operation = "Edit"
    }

    // useEffect(()=>{

    // }, [])

    const handleCreateEmployee = () => {
        
    const employeeObject: Employee = {
            name: (
                document.getElementById("name") as HTMLInputElement
            ).value,

            id: (
                document.getElementById("employee_id") as HTMLInputElement
            ).value,

            joining: (
                document.getElementById("joining_date") as HTMLInputElement
            ).value,

            role: (
                document.getElementById("role") as HTMLSelectElement
            ).value,

            status: (
                document.getElementById("status") as HTMLSelectElement
            ).value,

            experience: (
                document.getElementById("experience") as HTMLInputElement
            ).value,

            addressLine1: (
                document.getElementById("address") as HTMLInputElement
            ).value,

            city: (
                document.getElementById("City") as HTMLInputElement
            ).value,

            country: (
                document.getElementById("Country") as HTMLInputElement
            ).value,

            postalCode: (
                document.getElementById("Postal Code") as HTMLInputElement
            ).value,
        };

        console.log(employeeObject);

        dispatch({
            type: EMPLOYEE_ACTION_TYPES.ADD,
            payload: employeeObject}
        );
    };

    return (
        <>
            <div className="content">

                <div className="create_employee">
                    <h2>{operation} Employee</h2>
                </div>

                <div className="form-list">
                    
                    <div className="list-1">
                        <SingleItem type="text" id="name" name="name" content="Employee Name" placeholder="Enter employee name" defaultvalue={employee.name}/>
                        <SingleItem type="text" id="employee_id" name="employee_id" content="Employee ID" placeholder="Enter employee ID" defaultvalue={employee.id}/>
                        <SingleItem type="date" id="joining_date" name="joining_date" content="Joining Date" placeholder="Enter joining date" defaultvalue={employee.joining}/>
                    </div>

                    <div className="list-2">
                        <div className="single-item">
                            <label htmlFor="Role">Role</label><br/>

                            <select id="role" name="role" defaultValue={employee.role}>
                                <option value="">Select Role</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="manager">Manager</option>
                                <option value="tester">Tester</option>
                                <option value="fullstack">Full Stack</option>
                                <option value="uiengineer">UI Engineer</option>
                                <option value="devops">Devops</option>
                            </select><br/><br/>
                        </div>

                        <div className="single-item">
                            <label htmlFor="Status">Status</label><br/>

                            <select id="status" name="status">
                                <option value="">Select Status</option>
                                <option value="active">Active</option>
                                <option value="probation">Probation</option>
                                <option value="inactive">Inactive</option>
                                
                                
                            </select><br/><br/>
                        </div>
                        <SingleItem type="text" id="experience" name="experience" content="Experience" placeholder="Enter experience" defaultvalue={employee.experience}/>
                    </div>

                    <div className="isolate-last-row">

                        <div className="isolate-item">
                            <label htmlFor="Address">Address</label><br/>
                            <input type="text" id="address" name="address" placeholder="Address" defaultValue={employee.addressLine1}/><br/><br/>
                        </div>

                        <div className="isolate-item" onClick={() => setShowUploadModal(true)}>
                            <label htmlFor="upload_proof">
                                Upload ID Proof
                            </label>

                            <label
                                htmlFor="upload_proof"
                                className="upload-proof-container"
                            >
                                <img
                                    src={AttachIcon}
                                    alt="attach"
                                    className="attach-icon"
                                />

                                <span>Attach files</span>
                            </label>

                            <input
                                type="file"
                                id="upload_proof"
                                className="hidden-file-input"
                            />
                        </div>

                    </div>

                    <div className="isolate-last-row">

                        <div className="isolate-item-sub">
                            <input type="text" id="City" name="City" placeholder="City" defaultValue={employee.city}/>
                        </div>

                        <div className="isolate-item-sub">
                            <input type="text" id="Country" name="Country" placeholder="Country" defaultValue={employee.country} style={{ margin: '7px 0 0 -30px' }}/>
                        </div>

                    </div>

                    <div className="isolate-last-row">

                        <div className="isolate-item-sub">
                            <input type="text" id="Postal Code" name="Postal Code" defaultValue={employee.postalCode}
                                placeholder="Postal Code"/><br/><br/>
                        </div>

                    </div>

                    <div className="button-space">
                        <button className="create" onClick={handleCreateEmployee}>Create</button>
                        <button className="Cancel">Cancel</button>
                    </div>
                    {showUploadModal && (
                        <UploadProofModal
                            onClose={() => setShowUploadModal(false)}
                        />
                    )}

                </div>
            </div>
        </>
    )
}

export default Content;

