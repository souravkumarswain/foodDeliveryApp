import {LOGO_URL} from "../utils/constants";
import {useState} from "react";

const Header = () =>{
    const [btnReact,setBtnReact] = useState("Login");
    return <>
        <div className = "header">
            <div className="logo">
                <img src= {LOGO_URL}  alt="Logo"/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <button className = "login-button" onClick= {()=> {
                    btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login")
                }}>{btnReact}</button>
            </ul>
        </div>
    </>
}

export default Header;