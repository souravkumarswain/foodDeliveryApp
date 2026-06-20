import { useEffect, useState } from "react";
import { ITEM_MENU_URL } from "./constants";

const useFetchMenu = (resid)  => {
    const [resMenu,setResMenu] = useState(null)

    useEffect(() => {
        fetchData()
    },[resid])

    const fetchData = async () => {
        const data = await fetch(`${ITEM_MENU_URL}${resid}/store_id/10173/source_id/13?is_preorder=true&start_time_slot=2026-06-20T13%3A00%3A00&end_time_slot=2026-06-20T14%3A00%3A00`)
        const json = await data.json()
        setResMenu(json?.data?.collections)
    }


    return resMenu;
}

export default useFetchMenu