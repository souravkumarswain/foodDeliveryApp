import {RES_LOGO_URL} from "../utils/constants";

const RestaurantCard =(props) => {
    const {restaurant} = props;
    const{name, cloudinaryImageId, cuisines,avgRating, costForTwo} = restaurant?.info
    return <>
    <div className="restaurant-card">
        <img src={RES_LOGO_URL+cloudinaryImageId} alt="Restaurant"/>
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <button>Order Now</button>
    </div>
    </>
}

export default RestaurantCard;