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

const updateTitle = () => {
    let docTitle;
    docTitle = decodeURI(document.location.pathname).toString();
    docTitle = docTitle.replace("-", " ");
    docTitle = docTitle.replace("/", "");
    console.log(docTitle);
    docTitle = docTitle.charAt(0).toUpperCase() + docTitle.slice(1);
    docTitle ? (docTitle = docTitle) : (docTitle = "Hjem");
    document.title = docTitle + " | Træk og Toner";
};

window.addEventListener("load", () => {
    console.log("SITE MADE WITH LOVE BY SIGUR LEO NIILAS RINNAN");

    updateTitle();
    let oldHref = document.location.href;
    const body = document.querySelector("body");
    const observer = new MutationObserver((mutations) => {
        if (oldHref !== document.location.href) {
            oldHref = document.location.href;
            updateTitle();
        }
    });
    observer.observe(body, {childList: true, subtree: true});
});

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
