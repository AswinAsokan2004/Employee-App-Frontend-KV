import LoginForm from './components/login/utils/form'
import LeftPage from './components/login/LeftPage';
import RightPage from './components/login/RightPage';
import './LoginPage.css'
function LoginPage() {
  
  return (
        <div className="container">
            <LeftPage />
            <RightPage />
        </div>
  )
}

export default LoginPage;