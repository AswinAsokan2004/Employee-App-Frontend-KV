
import '../../LoginPage.css'
import KeyValueImage from '../../assets/image.png' 
import LoginForm from './utils/form';
function KeyBox() {
    return (
        <div className="keybox">
            <img id="key-value-image" src={KeyValueImage} alt="KeyValue"></img>
            <LoginForm />
        </div>
    )
}
export default KeyBox;