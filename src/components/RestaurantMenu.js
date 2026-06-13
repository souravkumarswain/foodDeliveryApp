import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { ITEM_LOGO_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () =>{
    const [resMenu, setResMenu] = useState([])
    const {resid} = useParams()

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async() =>{
        let data = await fetch(`${ITEM_LOGO_URL}${resid}/menu`);
        let json = await data.json();
        setResMenu(json);
    }

    return (
        <>
        {resMenu?.map((item) => {
            return <ItemCard key={item.itemID} items={item}/>
        })}
        </>
    )
}

export default RestaurantMenu;