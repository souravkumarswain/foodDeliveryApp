import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [resList, setResList] = useState([]);
    const[fetchedResList, setFetchedResList] = useState([]);
    const [searchText, setSearchText]= useState("");
    const [errorMsg, setErrMSg] = useState("");
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        let data = await fetch("https://fakerestaurantapi.runasp.net/api/Restaurant");
        let json = await data.json();
        console.log(json)
        setFetchedResList(json);
        setResList(json);
    }

    const handleChange = (event) => {
        if (event.target.value === "parking_lot") {
            let filteredList = fetchedResList.filter((res) => res.parkingLot === true);
            setResList(filteredList);
        } if(event.target.value === "all"){ 
            setResList(fetchedResList);
        }
    };

    const handleOnClickSearch = () => {
        let filteredList = fetchedResList.filter((res) => res.restaurantName.toLowerCase().includes(searchText.toLowerCase()));
        filteredList.length === 0 ? setTimeout(() => setErrMSg('No Restaurant Found !!'), 1000) && setTimeout(() => setErrMSg(''), 4000) : setErrMSg("");
        setResList(filteredList?.length > 0 ? filteredList : fetchedResList);
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
        <div className="search-and-filter">
            <div className="search-container">
                <input className="search-bar" type="text" placeholder="Search your Restaurant.." value={searchText} 
                onChange = {(e) => setSearchText(e.target.value)}></input>
                <button className="login-button" onClick = {handleOnClickSearch}>Search</button>
            </div>
            <div className="filter">
                <label htmlFor="sorting-filter">Sort By:</label>
                <select id="sorting-filter" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="all">All Restaurants</option>
                    <option value="parking_lot">Restaurant with Parking Lot</option>
                </select>
            </div>
        </div>
        <div>
            {errorMsg && <h2>{errorMsg}</h2>}
        </div>

        <div className="restaurant-list">
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