import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/404";
import Contact from "./pages/Contact";
import Meet from "./pages/Meet";

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
                path: "/om-os",
                element: <About />,
            },
            {
                path: "mød-os",
                element: <Meet />,
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
