import ItemCard from "./ItemCard";
import { useParams } from "react-router";
import useFetchMenu from "../utils/useFetchMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const {resid} = useParams()
    const resMenu = useFetchMenu(resid);

    resMenu?.length === 0 ? <Shimmer/> : null

    return (
        <>
        {resMenu?.map((item) => {
            return <ItemCard key={item.itemID} items={item}/>
        })}
        </>
    )
}

export default RestaurantMenu;