import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import mockData from "../utils/mockData";


const Body = () => {
    const [resList, setResList] = useState(mockData);
    const handleChange = (event) => {
        if (event.target.value === "best_rated") {
            let filteredList = mockData.filter((res) => res.info.avgRating >= 4);
            setResList(filteredList);
        } else {
            setResList(mockData);
        }
    };

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