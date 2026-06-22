import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [fetchedResList, setFetchedResList] = useState([])
    const [resList, setResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [errorMsg, setErrMSg] = useState("");
    const {name, setName} = useContext(UserContext)
    const [typedName, setTypedName] = useState('Pradhan');

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.eatsure.com/v1/api/get_all_brands?&store_id=10173&city_id=7322&is_preorder=true&start_time_slot=2026-06-20T12:00:00&end_time_slot=2026-06-20T13:00:00');
        const json = await data.json();
        setFetchedResList(json.data.data);
        setResList(json.data.data);
    }

    const handleOnClickSearch = () => {
        let filteredList = fetchedResList.filter((res) => res.brand_name
            .toLowerCase().includes(searchText.toLowerCase()));
        filteredList.length === 0 ? setTimeout(() => setErrMSg('No Restaurant Found !!'), 1000) && setTimeout(() => setErrMSg(''), 4000) : setErrMSg("");
        setResList(filteredList?.length > 0 ? filteredList : fetchedResList);
        setSearchText("");
    }

    const onClickEnter = (e) => {
        if(e.key === 'Enter'){
            {setName(e.target.value)}
            setTypedName('')
        }
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>No Internet Connection!!</h1>;
    }

    if (resList.length === 0) {
        return <Shimmer />
    }

    return <>
        <div className="flex space-x-4 justify-between items-center p-4 bg-gradient-to-r from-gray-100 to-gray-300 border-b border-gray-300">
            <div className="flex space-x-4 items-center">
                <input className="border border-gray-300 p-2 rounded-md" type="text" placeholder="Search your Restaurant.." value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}></input>
                <img className="w-6 h-6 cursor-pointer grayscale-400 hover:grayscale-0 transition-all duration-300" src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="searchIcon" onClick={handleOnClickSearch} />
            </div>
            <div>
                <input  value={typedName} type='text' className="border border-gray-600 p-1" onChange={(e) => setTypedName(e.target.value)} onKeyDown={onClickEnter}></input>
            </div>
        </div>
        <div>
            {errorMsg && <h2 className="text-red-500 text-center">{errorMsg}</h2>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {
                resList.map((restaurant) => {
                    return <Link to={`/rescard/${restaurant.brand_id}`} key={restaurant.brand_id}>
                        <RestaurantCard restaurant={restaurant} />
                    </Link>
                })
            }
        </div>
    </>
}

export default Body;