import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return <>
    <input className= "search-bar" type="text" placeholder="Search your Food.."></input>
    <div className="restaurant-list">
        {
            resList.map((restaurant) => {
                return <RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>
            })
        }
    </div>
    </>
}

export default Body;