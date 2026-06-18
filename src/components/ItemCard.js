const ItemCard = (props) => {
    const {itemName, itemDescription, itemPrice, imageUrl} = props.items;
    return(
        <>
            <div className="border border-gray-300 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 mb-3 hover:bg-gray-100">
                <div>
                    <img className="w-50 h-48 object-cover mb-4" src = {imageUrl} alt="ItemImg"/>
                </div>
                <div>
                    <h3 className="font-bold text-lg">{itemName}</h3>
                    <p className="text-gray-400">{itemDescription}</p>
                    <p className="text-gray-400">{itemPrice} for two</p>
                </div>
            </div>
        </>
    )
}


export default ItemCard;