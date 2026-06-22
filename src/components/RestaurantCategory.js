import ItemCard from "./ItemCard";
import { useState } from "react";
import { itemCardWithPromo } from "./ItemCard";

const RestaurantCategory = (props) => {
    const { category, showItems, setShowIndex } = props;

    const [isCategoryOpen, setCategoryOpen] = useState(true)

    const onClickCategory = () => {
        setCategoryOpen(!isCategoryOpen);
        setShowIndex();
    }

    const PromotedItems = itemCardWithPromo(ItemCard)

    return (
        <>
            <div className="flex">
                <div onClick={onClickCategory} className="w-160 font-bold mb-3 text-gray-700 text-lg hover:border-l-4 p-2 border-blue-600 cursor-pointer">
                    <span>
                        <h2 className="p-4">{category.collection_name} ({category.products.length})</h2>
                    </span>
                </div>

                <div className="flex flex-wrap gap-4 p-4">
                    {isCategoryOpen && showItems ? category.products.map((item) =>  item.offer_tags[0] === 'BUY_1_GET_1' ? (<PromotedItems key={item.product_id} items={item} />) : (<ItemCard key={item.product_id} items={item} />) 
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default RestaurantCategory;