const ItemCard = (props) => {
    const {itemName, itemDescription, itemPrice, imageUrl} = props.items;
    return(
        <>
            <div className="item-card">
                <div>
                    <img className="item-image" src = {imageUrl} alt="ItemImg"/>
                </div>
                <div>
                    <h3>{itemName}</h3>
                    <p>{itemDescription}</p>
                    <p>{itemPrice} for two</p>
                </div>
            </div>
        </>
    )
}


export default ItemCard;