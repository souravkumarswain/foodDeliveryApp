
const RestaurantCard =(props) => {
    const {restaurant} = props;
    const{restaurantName, address, type, parkingLot} = restaurant
    return <>
    <div className="restaurant-card">
        <h1>{restaurantName}</h1>
        <p>{address}</p>
        <p>{type}</p>
        <p>{parkingLot ? "Has Parking Lot" : "No Parking Lot"}</p>
        <button>Order Now</button>
    </div>
    </>
}

export default RestaurantCard;