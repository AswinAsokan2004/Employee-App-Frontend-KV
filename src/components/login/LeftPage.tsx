import teamImage from '../../assets/team.png'
import '../../LoginPage.css'
function LeftPage(){
    return (
        
        <div className="left">
            <div className="logo-circle">
                <img src={teamImage} alt="Sample Image"/>
            </div>

        </div>
    )
}

export default LeftPage;