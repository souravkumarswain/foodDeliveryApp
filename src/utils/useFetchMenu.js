import { useEffect, useState } from "react";
import { ITEM_MENU_URL } from "./constants";

const useFetchMenu = (resid)  => {
    const [resMenu,setResMenu] = useState(null)

    useEffect(() => {
        fetchData()
    })

    const fetchData = async () => {
        const data = await fetch(`${ITEM_MENU_URL}${resid}/menu`)
        const json = await data.json()
        setResMenu(json)
    }


    return resMenu;
}

export default useFetchMenu