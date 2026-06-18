
const RestaurantCard =(props) => {
    const {restaurant} = props;
    const{restaurantName, address, type, parkingLot} = restaurant
    return <>
    <div className="border border-gray-300 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100">
        <h1 className="font-bold text-lg">{restaurantName}</h1>
        <p className="text-gray-400 text-indigo-400 text-sm">{address}</p>
        <p className="text-gray-400">{type}</p>
        <p className="text-gray-400">{parkingLot ? "Has Parking Lot" : "No Parking Lot"}</p>
        <button className="bg-yellow-500 text-white p-2 rounded-md hover:bg-green-500">Order Now</button>
    </div>
    </>
}

export default RestaurantCard;