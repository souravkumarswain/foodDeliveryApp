import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useFetchMenu from "../utils/useFetchMenu";
import { VEG_LOGO, NON_VEG_LOGO } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {
    const { resid } = useParams()
    const resMenu = useFetchMenu(resid);
    // console.log(resMenu);
    const [isVeg, setIsVeg] = useState(false);
    const [isNonVeg, setIsNonVeg] = useState(false);
    const [allDishes, setAllDishes] = useState(true);
    const [filteredMenu, setFilteredMenu] = useState();
    

    useEffect(() => {
        setFilteredMenu(resMenu)
    },[resMenu])

     const onClickVegSwitch = () => {
        setIsVeg(true);
        setAllDishes(false);
        setIsNonVeg(false);

       const filtered = resMenu?.map(category => ({
            ...category,
            products: category.products?.filter(p => p.is_veg === 1)
        })).filter(category => category.products?.length > 0);
        setFilteredMenu(filtered);
    }
    const onClickNonvegSwitch = () => {
        setIsNonVeg(true);
        setAllDishes(false);
        setIsVeg(false);
        const filtered = resMenu?.map(category => ({
            ...category,
            products: category.products?.filter(p => p.is_veg === 0)
        })).filter(category => category.products?.length > 0);

        setFilteredMenu(filtered);
    }
    const onClickAllResSwitch = () => {
        setAllDishes(true);
        setIsVeg(false);
        setIsNonVeg(false);
        setFilteredMenu(resMenu);
    }
    

    !filteredMenu || filteredMenu.length === 0 ? <Shimmer /> : null

    return (
        <><div className="flex justify-between space-x-4 p-4">
                <div className="flex space-x-4">
                    <p className={`flex items-center font-bold justify-center cursor-pointer ${isVeg ? "text-green-800" : "text-gray-500"}`} onClick={onClickVegSwitch}><img src={VEG_LOGO} alt="VEG" className="h-4 mr-2" />Veg</p>
                    <p className={`flex items-center font-bold justify-center cursor-pointer ${isNonVeg ? "text-red-800" : "text-gray-500"}`} onClick={onClickNonvegSwitch}><img src={NON_VEG_LOGO} alt="NON-VEG" className="h-4 mr-2" />Non-Veg</p>
                    <p className={`flex items-center font-bold justify-center cursor-pointer ${allDishes ? "text-gray-800" : "text-gray-500"}`} onClick={onClickAllResSwitch}>All</p>
                </div>
                <div>
                    <select onChange={(e) => {
                        const value = e.target.value;
                        if (value === "rating") {
                            const sorted = [...filteredMenu].map((category) => ({
                                ...category,
                                products: category.products?.sort((a, b) => b.rating - a.rating)
                            }));
                            setFilteredMenu(sorted);
                        }
                    } } className="font-bold text-base outline-none">
                        <option value="">Sort By</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div> 
            <div>
                <div>
                    <ul>
                        {filteredMenu?.map((category)=>{
                            return <li key={category.collection_id}><RestaurantCategory category={category} /></li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RestaurantMenu;