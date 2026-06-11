import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router";

const Header = () =>{
    const [btnReact,setBtnReact] = useState("Login");
    return <>
        <div className = "header">
            <div className="logo">
                <img src= {LOGO_URL}  alt="Logo"/>
            </div>
            <ul>
                <li><Link to='./'>Home</Link></li>
                <li><Link to='./about'>About</Link></li>
                <li><Link to='./contact'>Contact</Link></li>
                <button className = "login-button" onClick= {()=> {
                    btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login")
                }}>{btnReact}</button>
            </ul>
        </div>
    </>
}

export default Header;