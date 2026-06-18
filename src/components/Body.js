import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurant from "../utils/useFetchRestaurant";

const Body = () => {
    const fetchedResList = useFetchRestaurant();
    const masterList = fetchedResList?.[0] || [];

    const [resList, setResList] = useState([]);
    const [searchText, setSearchText]= useState("");
    const [errorMsg, setErrMSg] = useState("");

    useEffect(() => {
        if(masterList.length > 0){
            setResList(masterList)
        }
    },[fetchedResList]) 

    //for initial rendering fetchedResList comes as empty array so we can not directly assign the array
    // value to resList. So here again useEffect is used to update the state when the data is fetched

    const handleChange = (event) => {
        if (event.target.value === "parking_lot") {
            let filteredList = masterList.filter((res) => res.parkingLot === true);
            setResList(filteredList);
        } if(event.target.value === "all"){ 
            setResList(masterList);
        }
    };

    const handleOnClickSearch = () => {
        let filteredList = masterList.filter((res) => res.restaurantName.toLowerCase().includes(searchText.toLowerCase()));
        filteredList.length === 0 ? setTimeout(() => setErrMSg('No Restaurant Found !!'), 1000) && setTimeout(() => setErrMSg(''), 4000) : setErrMSg("");
        setResList(filteredList?.length > 0 ? filteredList : masterList);
        setSearchText("");
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus ===  false) {
        return <h1>No Internet Connection!!</h1>;
    }

    if(resList.length === 0){
        return <Shimmer/>
    }

    return <>
        <div className="flex space-x-4 justify-between items-center p-4 bg-gradient-to-r from-gray-100 to-gray-300 border-b border-gray-300">
            <div className="flex space-x-4 items-center">
                <input className="border border-gray-300 p-2 rounded-md" type="text" placeholder="Search your Restaurant.." value={searchText} 
                onChange = {(e) => setSearchText(e.target.value)}></input>
                <img className="w-6 h-6 cursor-pointer grayscale-400 hover:grayscale-0 transition-all duration-300" src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="searchIcon" onClick={handleOnClickSearch}/>
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="sorting-filter">Sort By:</label>
                <select id="sorting-filter" onChange={handleChange} className="border border-gray-600 p-2 rounded-md">
                    <option value="">Select</option>
                    <option value="all">All Restaurants</option>
                    <option value="parking_lot">Restaurant with Parking Lot</option>
                </select>
            </div>
        </div>
        <div>
            {errorMsg && <h2 className="text-red-500 text-center">{errorMsg}</h2>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {
                resList.map((restaurant) => {
                    return <Link to={`/rescard/${restaurant.restaurantID}`} key={restaurant.restaurantID}>
                        <RestaurantCard restaurant={restaurant} />
                    </Link>
                })
            }
        </div>
    </>
}

export default Body;