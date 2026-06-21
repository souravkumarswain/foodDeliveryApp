import ItemCard from "./ItemCard";
import { useState } from "react";

const RestaurantCategory = (props) => {
    const {category,showItems, setShowIndex} = props;

    const [isCategoryOpen, setCategoryOpen] = useState(true)

    const onClickCategory = () => {
        setCategoryOpen(!isCategoryOpen);
        setShowIndex();
    }

    return (
        <>   
            <div className="flex">
                <div onClick= {onClickCategory} className="w-160 font-bold mb-3 text-gray-700 text-lg hover:border-l-4 p-2 border-blue-600 cursor-pointer">
                    <span>
                        <h2 className="p-4">{category.collection_name} ({category.products.length})</h2>
                    </span>
                </div>

                <div className="flex flex-wrap gap-4 p-4">
                    {isCategoryOpen && showItems ? category.products.map((item) => { return <ItemCard key={item.product_id} items={item} /> }) : null}
                </div>
            </div>
        </>
    )
}

export default RestaurantCategory;