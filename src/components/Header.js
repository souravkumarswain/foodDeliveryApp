import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useContext} from 'react';
import { useSelector } from "react-redux";

const Header = () => {
    const [btnReact, setBtnReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {name} = useContext(UserContext);
    const items = useSelector((store) => store.cart.items)

    return <>
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-100 to-purple-300 border-b border-gray-300">
            <div className="w-1/6 rounded-xl overflow-hidden">
                <img src={LOGO_URL} alt="Logo" className="w-30" />
            </div>
            <ul className="flex items-center space-x-4">
                <li className="font-bold text-gray-600">Status: {onlineStatus ? "🟢" : "🔴"}</li>
                <li className="font-bold text-gray-600 hover:text-yellow-800"><Link to='./'>Home</Link></li>
                <li className="font-bold text-gray-600 hover:text-yellow-800"><Link to='./about'>About</Link></li>
                <li className="font-bold text-gray-600 hover:text-yellow-800"><Link to='./contact'>Contact</Link></li>
                <li className="font-bold text-gray-600 hover:text-yellow-800"><Link to='./dinein'>DineIn</Link></li>
                <div className="relative">
                    <img className="w-8 bg-transparent" src="https://www.freeiconspng.com/uploads/cart-icon-14.png" alt="cart"/>
                    <label className=" absolute w-5 h-5 text-center -left-1 -top-2 text-sm font-bold bg-green-600 rounded-full">{items.length}</label>
                </div>
                <div>
                    <button className="bg-yellow-500 text-white p-2 rounded-lg w-24 h-10 text-center hover:bg-green-500"
                        onClick={() => {
                            btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login")
                        }}>{btnReact}</button>
                    <li className="font-bold text-gray-600">{name}</li>
                </div>
            </ul>
        </div>
    </>
}

export default Header;