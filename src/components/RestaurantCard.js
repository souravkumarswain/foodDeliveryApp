
const RestaurantCard = (props) => {
    const { restaurant } = props;
    const { background_url, banner_image_es, brand_name, description} = restaurant
    const {coupon_short_description} = restaurant.discount_info
    return <>
        <div className="relative shadow-md hover:scale-105 transition-transform duration-300">
            <div>
                <img className="w-full h-full object-cover mb-4 rounded-md" src={background_url} alt="bg-img" />
            </div>
            <div className="h-30 border border-gray-300 p-4 rounded-md shadow-md absolute inset-x-0 bottom-2 right-2 left-2 bg-gray-900/70 opacity-100">
                <div className="flex items-start space-x-4">
                    <img className="w-15 h-15 object-cover mb-4 rounded-md" src={banner_image_es} alt="banner-img" />
                    <div>
                        <h1 className="text-lg font-semibold text-white">{brand_name.length > 17 ? brand_name.slice(0, 17) + "..." : brand_name}</h1>
                        <p className="text-white text-sm">{description}</p>
                    </div>
                </div>
                <p className="text-white text-sm text-center">{coupon_short_description}</p>
            </div>

        </div>
    </>
}

// export const restaurantWithPromo = (RestaurantCard) => {
//     return (props) => {
//         return (
//             <div className="relative">
//                 <img className="w-10 h-10 object-cover mb-2 rounded-md absolute -top-2 -right-2" src="https://cdn-icons-png.flaticon.com/512/3448/3448549.png" alt="Promoted" />
//                 <RestaurantCard {...props} />
//             </div>
//         )

//     }
// }

export default RestaurantCard;