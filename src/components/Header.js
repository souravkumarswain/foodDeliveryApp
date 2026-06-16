import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const [btnReact,setBtnReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return <>
        <div className = "header">
            <div className="logo">
                <img src= {LOGO_URL}  alt="Logo"/>
            </div>
            <ul>
                <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
                <li><Link to='./'>Home</Link></li>
                <li><Link to='./about'>About</Link></li>
                <li><Link to='./contact'>Contact</Link></li>
                <li><Link to='./dinein'>DineIn</Link></li>
                <button className = "login-button" onClick= {()=> {
                    btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login")
                }}>{btnReact}</button>
            </ul>
        </div>
    </>
}

export default Header;