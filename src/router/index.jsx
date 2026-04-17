import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";
import Gallery from "../pages/Gallery";
import Test from "../pages/Test";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "products",
                element: <List />,
            },
            {
                path: "product/:slug",
                element: <Detail />,
            },
            {
                path: "gallery",
                element: <Gallery />,
            },
            {
                path: "test",
                element: <Test />,
            },
        ],
    },
]);

export default router;