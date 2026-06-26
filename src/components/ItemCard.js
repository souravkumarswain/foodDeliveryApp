import { useDispatch } from "react-redux";
import { VEG_LOGO, NON_VEG_LOGO, RATING_STAR } from "../utils/constants";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";

const ItemCard = (props) => {
    const { product_name, small_description, rating, price, is_veg, image_es, brand_display_name, product_id } = props.items;
    console.log(props)
    const dispatch = useDispatch()

    const onClickAdd = () => {
        dispatch(addItem({productId: product_id,brandName:brand_display_name,itemName:product_name, itemPrice:price}))
    }

    // const products = Array.isArray(props?.items?.products) ? props.items.products : [];

    // if(products.length === 0) {
    //     return <Shimmer />;
    // }

    return (      
            <div>
                <div className="w-60 m-4 p-4 border border-gray-300 rounded-md shadow-md hover:hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div>
                        <img className="w-50 h-48 object-cover mb-4" src={image_es} alt="ItemImg" />
                    </div>
                    <div className="h-46">
                        <h1 className="font-bold text-xl items-baseline">{is_veg ? <img src={VEG_LOGO} className="inline-block mr-2 h-4 mb-0.5" alt="Veg" /> : <img src={NON_VEG_LOGO} className="inline-block mr-2 h-4" alt="Non-Veg" />}{product_name.length > 28 ? product_name.slice(0, 28) + "..." : product_name}</h1>
                        <p className="text-gray-400 h-20">{small_description.length > 70 ? small_description.slice(0, 70) + "..." : small_description}</p>
                        <span className="flex justify-between items-center mt-2 mb-2">
                            <p className=" text-xs text-green-800 font-bold items-center align-center bg-green-100 w-16 h-8 p-2"><img src={RATING_STAR} className="inline-block mr-2 h-3 mb-0.5" alt="Rating" />{rating} </p>
                        </span>
                    </div>
                    <hr className="my-2 -ml-4 -mr-4 opacity-10" />
                    <div className="flex justify-between items-center h-10">
                        <p className="font-bold text-lg">₹ {price}</p>
                        <button onClick = {onClickAdd}className="bg-transparent border border-indigo-500 text-indigo-500 p-2 rounded-md hover:border-green-500 hover:text-green-500 w-24 cursor-pointer">Add</button>
                    </div>

                </div>
            </div>
    )
}
export const itemCardWithPromo = (ItemCard) => {
    return (props) => {
        return (
            <div className="relative">
                <p className="absolute text-white text-sm font-bold left-4 top-4 bg-gradient-to-b from-green-300 to-green-600 rounded-lg p-1">BUY1GET1</p>
                <ItemCard {...props} />
            </div>
        )
    }
}

export default ItemCard;