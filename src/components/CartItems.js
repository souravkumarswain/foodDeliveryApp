import { useDispatch } from "react-redux"
import { clearitem, removeItem } from "../utils/cartSlice"

const CartItems = ({items,index,onClickMinus}) => {
    const {productId,brandName,itemName,itemPrice} = items

    return(
        <div className="bg-white m-3 rounded p-3">
                   <div>
                     <span>
                        <h2 className="text-lg font-bold">{brandName}</h2>
                        <h2 className="font-bold">{itemName}</h2>
                    </span>
                    <span>
                        <h2 className="font-bold text-sm text-right">₹ {itemPrice}</h2>
                    </span>
                   </div>
                   <button className="flex justify-between text-lg items-right font-bold rounded-lg p-2 border border-blue-400 w-25 hover:cursor-pointer">
                    <span onClick={() => onClickMinus(index)} className="font-bold text-lg">-</span>
                    1
                    <span className="font-bold text-lg">+</span></button>
                </div>
    )
}

export default CartItems;