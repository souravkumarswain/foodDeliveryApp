import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { lazy, Suspense, useState } from "react";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";


const DeliveryAppLayout = () => {
    const [name, setName] = useState('jewel');

    return <>
    <Provider store={appStore}>
    <UserContext value={{name,setName}}>
        <Header /> 
        <Outlet />
    </UserContext> 
    </Provider>
        {/* <Footer/> */}
    </>
}

const DineIn = lazy(() => import ("./src/components/DineIn"))

const application = createBrowserRouter([
    {
        path: '/',
        element: <DeliveryAppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/dinein',
                element: <Suspense fallback = {<Shimmer />}><DineIn /></Suspense>
            },
            {
                path:'/rescard/:resid',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <ErrorPage />
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={application} />)