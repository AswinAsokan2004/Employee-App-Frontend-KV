import Layout from "./Layout";
import "./EmployeeDetails.css";
import TextInput from "./Test";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import PencilEditIcon from "./assets/pencil-edit-icon.png";
import DeleteConfirmation from "./DeleteConfirmation";
import { useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";

function EmployeeDetails() {
    const {state: employee} = useLocation();
    const navigate = useNavigate();
    const data = useSelector((state: any) => state.employee.employeeList)
    console.log(data)
    return (
        <>
        {/* <Layout> */}
            <div className="content">

                <div className="page-container">

                    <div className="page-header">
                        <h2>Employee Details</h2>
                        <button
                            className="create-btn"
                            onClick={(e) =>
                                navigate("/employee/edit/" + employee.id, {
                                    state: employee,
                                })
                                }
                        >
                            <div className="create-button-round">
                                <img
                                src={PencilEditIcon}
                                onClick={() =>
                                navigate("/employee/details", {
                                    state: employee,
                                })
                                }
                            />
                            </div>
                            <span>Edit Details</span>
                        </button>
                    </div>

                    <div className="employee-card">

                        <div className="employee-top">

                            <div className="info-item">
                                <span className="label">Employee Name</span>
                                <span className="value">{employee.name}</span>
                            </div>

                            <div className="info-item">
                                <span className="label">Joining Date</span>
                                <span className="value">{employee.joining}</span>
                            </div>

                            <div className="info-item">
                                <span className="label">Experience</span>
                                <span className="value">2 Yrs</span>
                            </div>

                            <div className="info-item">
                                <span className="label">Role</span>
                                <span className="value">{employee.role}</span>
                            </div>

                            <div className="info-item">
                                <span className="label">Status</span>
                                <span className={`status ${employee.status}`}>
                                    {employee.status}
                                </span>
                            </div>

                            <div className="info-item">
                                <span className="label">Total Experience</span>
                                <span className="value">{employee.experience}</span>
                            </div>

                        </div>

                        <div className="divider"></div>

                        <div className="employee-bottom">

                            <div className="info-item address">
                                <span className="label">Address</span>
                                <span className="value">
                                    {employee.addressLine1}, {employee.city}, <br />{employee.country}, {employee.postalCode}
                                    {/* No:C-9, T.V.K Industrial Estate,<br />
                                    Estate, Kerala 600032 */}
                                </span>
                                
                            </div>

                            <div className="info-item">
                                <span className="label">Employee ID</span>
                                <span className="value">E34656767</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            {/* <TextInput /> */}
        {/* // </Layout> */}
        </>
    );
}

export default EmployeeDetails;