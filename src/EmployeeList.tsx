import "./EmployeeList.css";
import { useNavigate } from "react-router";
import DeleteIcon from "./assets/delete-icon.png";
import EditIcon from "./assets/edit-icon.png";
import { useState } from "react";
import HelpDeskChat from "./HelpDesk.tsx";
import HelpDeskIcon from "./assets/help-desk-icon.png"
import DeleteConfirmation from "./DeleteConfirmation";
import { useSelector } from "react-redux";


function EmployeeList() {
    const navigate = useNavigate();
    const [showChat, setShowChat] = useState(false);
    const [filterCategory, setFilterCategory] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const employees = useSelector((state: any) => state.employee.employeeList)
    // const employees = [
    //     {
    //         name: "Vishal M",
    //         id: "E6385",
    //         joining: "12.04.2021",
    //         role: "Full Stack",
    //         status: "probation",
    //         experience: "5 Years",
    //         addressLine1: "12 Green Meadows",
    //         city: "Kochi",
    //         country: "IN",
    //         postalCode: "682030",
    //     },
    //     {
    //         name: "Susan Kurian",
    //         id: "E9152",
    //         joining: "12.04.2021",
    //         role: "UI Engineer",
    //         status: "probation",
    //         experience: "7 Years",
    //         addressLine1: "45 Palm Residency",
    //         city: "Thrissur",
    //         country: "IN",
    //         postalCode: "680001",
    //     },
    //     {
    //         name: "Yugesh",
    //         id: "E0183",
    //         joining: "12.04.2021",
    //         role: "Devops",
    //         status: "active",
    //         experience: "6 Years",
    //         addressLine1: "78 Lake View Apartments",
    //         city: "Bengaluru",
    //         country: "IN",
    //         postalCode: "560034",
    //     },
    //     {
    //         name: "Midhun",
    //         id: "E8001",
    //         joining: "12.04.2021",
    //         role: "Full Stack",
    //         status: "active",
    //         experience: "5 Years",
    //         addressLine1: "21 Hilltop Residency",
    //         city: "Kozhikode",
    //         country: "IN",
    //         postalCode: "673001",
    //     },
    //     {
    //         name: "Abhijith",
    //         id: "E6153",
    //         joining: "12.04.2021",
    //         role: "UI Engineer",
    //         status: "inactive",
    //         experience: "7 Years",
    //         addressLine1: "9 River Side Villas",
    //         city: "Thiruvananthapuram",
    //         country: "IN",
    //         postalCode: "695001",
    //     },
    // ];
    const filteredEmployees =
    filterCategory === ""
        ? employees
        : employees.filter(
            (employee) =>
            employee.status.toLowerCase() === filterCategory.toLowerCase()
        );

    return (
        <div className="content">
            <div className="employee-list-container">

                {/* Top Header */}
                <div className="page-header">

                    <h2>Employee List</h2>

                    <div className="header-actions">

                        <span className="filter-text">
                            Filter By
                        </span>

                        <select
                            className="status-filter"
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            >
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="probation">Probation</option>
                        </select>

                        <button
                            className="create-btn"
                            onClick={() =>
                                navigate("/employee/create")
                            }
                        >
                            <div id="create-button-round">+</div>
                            Create employee
                        </button>

                    </div>

                </div>

                {/* Table Header */}
                <div className="table-header">
                    <div>Employee Name</div>
                    <div>Employee ID</div>
                    <div>Joining Date</div>
                    <div>Role</div>
                    <div>Status</div>
                    <div>Experience</div>
                    <div>Action</div>
                </div>

                {/* Employee Rows */}
                {filteredEmployees.map((employee, index) => (
                    <div
                        key={index}
                        className="employee-row"
                        onClick={() =>
                            navigate("/employee/details/" + employee.id, {
                                state: employee,
                            })
                        }
                    >
                        <div>{employee.name}</div>

                        <div>{employee.id}</div>

                        <div>{employee.joining}</div>

                        <div>{employee.role}</div>

                        <div>
                            <span
                                className={`status ${employee.status}`}
                            >
                                {employee.status}
                            </span>
                        </div>

                        <div>{employee.experience}</div>

                        <div className="actions">

                            <img
                                src={DeleteIcon}
                                alt="delete"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowDeleteModal(true);
                                }}
                            />

                            <img
                                src={EditIcon}
                                alt="edit"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // employee["op"] = "edit"
                                    navigate(
                                        "/employee/edit/" + employee.id,
                                        {
                                            state: employee,
                                        }
                                    );
                                }}
                            />

                        </div>
                    </div>
                ))}
                {showChat && (
                    <HelpDeskChat
                        onClose={() => setShowChat(false)}
                    />
                )}

                <button
                    className="fab"
                    onClick={() => setShowChat(prev => !prev)}
                >
                    <img src={HelpDeskIcon} alt="" />
                </button>
                {showDeleteModal && (
                    <DeleteConfirmation
                        onCancel={() => setShowDeleteModal(false)}
                        onConfirm={() => {
                            console.log("Delete employee");
                            setShowDeleteModal(false);
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default EmployeeList;