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
            { index: true, element: <Home /> },
            {
                path: "products",
                element: <List />,          // /products → 全部
            },
            {
                path: "products/:category",
                element: <List />,          // /products/christmas-hats → 分类筛选
            },
            {
                path: "products/:category/:slug",
                element: <Detail />,        // /products/christmas-hats/xxx → 详情
            },
            { path: "gallery", element: <Gallery /> },
        ],
    },
]);
export default router;