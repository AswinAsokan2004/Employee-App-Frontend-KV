
import ContactIcon from "../../../assets/contact-icon.png"
import '../../../EmployeePage.css'
function SideBar(){
    return (
        <div className="sidebar">
            <div className="menu">
                <div className="icon-circle">
                    <img src={ContactIcon} alt="contact-icon" width="20px" />
                </div>

                <span>Employee List</span>
            </div>
        </div>
    )
}

export default SideBar;