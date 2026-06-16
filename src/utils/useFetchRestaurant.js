import { useState, useEffect } from "react";

const useFetchRestaurant = () => {
    const[fetchedResList, setFetchedResList] = useState([])
    
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch('https://fakerestaurantapi.runasp.net/api/Restaurant')
        const json = await data.json();
        setFetchedResList(json);
    }
    
    return [fetchedResList];
}

export default useFetchRestaurant;