import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const[fetchedResList, setFetchedResList] = useState([]);
    
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
            let filteredList = resList.filter((res) => res.info.avgRating >= 4);
            setResList(filteredList);
        } if(event.target.value === "all"){ 
            setResList(fetchedResList);
        }
    };

    if(resList.length === 0){
        return <Shimmer/>
    }

    return <>
        <div className="search-and-filter">
            <input className="search-bar" type="text" placeholder="Search your Food.."></input>

            <div className="filter">
                <label htmlFor="sorting-filter">Sort By:</label>
                <select id="sorting-filter" onChange={handleChange}>
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