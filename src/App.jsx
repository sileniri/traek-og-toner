import {useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/404";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/om",
                element: <About />,
            },
            {
                path: "/kontakt",
                element: <Contact />,
            },
        ],
    },
]);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
