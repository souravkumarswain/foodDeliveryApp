import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const[fetchedResList, setFetchedResList] = useState([]);
    const [searchText, setSearchText]= useState("");
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        setFetchedResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const handleChange = (event) => {
        if (event.target.value === "best_rated") {
            let filteredList = fetchedResList.filter((res) => res.info.avgRating >= 4.2);
            setResList(filteredList);
        } if(event.target.value === "all"){ 
            setResList(fetchedResList);
        }
    };

    const handleOnClickSearch = () => {
        let filteredList = fetchedResList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setResList(filteredList);
        setSearchText("");
    }

    if(resList.length === 0){
        return <Shimmer/>
    }

    return <>
        <div className="search-and-filter">
            <div className="search-container">
                <input className="search-bar" type="text" placeholder="Search your food.." value={searchText} 
                onChange = {(e) => setSearchText(e.target.value)}></input>
                <button className="login-button" onClick = {handleOnClickSearch}>Search</button>
            </div>

            <div className="filter">
                <label htmlFor="sorting-filter">Sort By:</label>
                <select id="sorting-filter" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="all">All Restaurants</option>
                    <option value="best_rated">Best Rated</option>
                </select>
            </div>
        </div>

        <div className="restaurant-list">
            {
                resList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                })
            }
        </div>
    </>
}

export default Body;