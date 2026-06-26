import { useDispatch, useSelector } from "react-redux";
import { clearitem, removeItem } from "../utils/cartSlice";
import CartItems from "./CartItems";
import { useEffect, useState } from "react";


const Cart = () => {
    const dispatch = useDispatch()
    const items = useSelector((store)=> store.cart.items)
    // console.log(items)

    const onClickClearCart = () => {
        dispatch(clearitem())
    }

    const onClickMinus = (index) => {
        dispatch(removeItem(index))
    }

    
    return(
        <div className=" flex bg-gray-300 p-4 space-between">
            <div className="ml-6 mr-2 w-6/12">
                <div className="flex align-center ml-3 items-start bg-white p-3 rounded-lg">
                    <img className = "w-10 mr-6 h-10" src ="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"/>
                    <span>
                        <h1 className="font-bold text-3xl text-gray-900 mb-2">Welcome</h1>
                        <h2 className="text-lg mb-3 w-full">To place your order now, log in to your account</h2>
                        <div className="flex items-center mb-3">
                            <p className="flex items-center border border-gray-200 p-1">
                                <img className="w-6 h-6" src="https://icon2.cleanpng.com/20180405/zsq/avbdja881.webp"/>
                                <span>+91</span>
                            </p>
                            <input className="border border-grey-200 p-1 ml-2 hover:border-blue-600" type='number' placeholder="Enter your Ph. number"/>
                        </div>
                        <button className="mb-3 w-full bg-indigo-600 font-bold text-white text-xl border-none mt-3 p-2 rounded-lg hover:cursor-pointer">Continue</button>
                    </span>
                </div>
                <div className="flex align-center ml-3 mt-4 items-start bg-white p-4 rounded-lg">
                    <img className="w-8 mr-8 h-8 rounded-full" src="https://www.pngitem.com/pimgs/m/94-941550_location-icon-png-grey-transparent-png-location-icon.png"/>
                    <p className="text-gray-600 text-center text-lg">Choose delivery address</p>
                </div>
                <div className="flex align-center ml-3 mt-4 items-start bg-white p-4 rounded-lg">
                    <img className="w-10 mr-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-GFWiEpRONi-stRy9P0sgZoRu5zqV6gbUIJ5ByWV4_j5KMPXMJDI4dw&s=10"/>
                    <p className="text-gray-600 text-center text-lg">Choose payments</p>
                </div>
            </div>
            <div className="w-5/12 bg-gray-100 rounded ml-3">
                <div className="bg-white rounded-lg flex justify-between p-3 items-center">
                    <h1 className="text-3xl font-bold p-3">Cart Summary</h1>
                    <button onClick={onClickClearCart} className="text-sm items-right font-bold rounded-lg  border border-blue-400 w-20 h-10 hover:cursor-pointer">Clear cart</button>
                </div>
                {items.map((i,index)=>  
                    <CartItems items={i} key = {index} index = {index} onClickMinus={onClickMinus}/>
                )}   
            </div>
        </div>
    )
}

export default Cart;