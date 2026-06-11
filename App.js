import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";


const DeliveryAppLayout = () => {
    return <>
        <Header />
        <Outlet />

        {/* <Footer/> */}
    </>
}

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
            }
        ],
        errorElement: <ErrorPage />
    },
    // {
    //     path: '/about',
    //     element: <About />
    // },
    // {
    //     path: '/contact',
    //     element: <Contact />
    // }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={application} />)