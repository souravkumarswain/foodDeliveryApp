import {LOGO_URL} from "../utils/constants";

const Header = () =>{
    return <>
        <div className = "header">
            <div className="logo">
                <img src= {LOGO_URL}  alt="Logo"/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </>
}

export default Header;