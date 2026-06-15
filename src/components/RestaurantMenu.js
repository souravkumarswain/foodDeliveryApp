import ItemCard from "./ItemCard";
import { useParams } from "react-router";
import useFetchMenu from "../utils/useFetchMenu";

const RestaurantMenu = () =>{
    const {resid} = useParams()
    const resMenu = useFetchMenu(resid);

    return (
        <>
        {resMenu?.map((item) => {
            return <ItemCard key={item.itemID} items={item}/>
        })}
        </>
    )
}

export default RestaurantMenu;