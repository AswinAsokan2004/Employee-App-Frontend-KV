import { useRef, useState, } from 'react';
import '../../../LoginPage.css'
import { Link, useNavigate } from 'react-router-dom';
function LoginForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameField, setNameField] = useState("Please enter a username");
    const [emailField, setEmailField] = useState("Please enter an email address");
    const emailFocus = useRef<HTMLInputElement | null>(null);
    const navigator = useNavigate()
    return (
    <>
        <form className="login-form">
            <label htmlFor="Username">Username:</label>
            <input type="text" id="Username" name="Username" placeholder="Username" value={name} onChange={(e) => {
                if (e.target.value.length <= 10) {
                    setName(e.target.value);
                    if (e.target.value.length === 0) {
                        setNameField("Username cannot be empty");
                    } else {
                        setNameField(e.target.value + " is a valid username");
                    }
                    // emailFocus.current?.focus()
                }else if(e.target.value.length > 10){
                    setNameField("Username cannot exceed 10 characters");
                }
            }} />
            <p>{nameField}  </p>
            <br />
            <label htmlFor="email">Email:</label>
            <input ref={emailFocus} type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value.includes("@")) {
                    
                    if (e.target.value.split("@")[1].includes(".")) {
                        setEmailField("");
                    } else {
                        setEmailField("Please enter a valid email address");
                    }
                } else {
                    setEmailField("Please enter a valid email address");
                }
            }} />
            <p>{emailField}</p>
            <br />
            <button type="submit" onClick={ (e) => {
                e.preventDefault();
                console.log("Login button clicked");
                console.log("Username:", (document.getElementById("Username") as HTMLInputElement).value);
                console.log("Email:", (document.getElementById("email") as HTMLInputElement).value);
                localStorage.setItem("username", (document.getElementById("Username") as HTMLInputElement).value);
                localStorage.setItem("email", (document.getElementById("email") as HTMLInputElement).value);
                navigator('/employee')
            }
            }>Login</button>
            {/* <Link to='employee'>Employee Page</Link> */}
        </form>
    </>
    )
}

export default LoginForm;