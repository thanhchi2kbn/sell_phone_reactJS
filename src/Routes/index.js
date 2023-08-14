import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Login from "../Component/LoginComponent";
import ProductPage from "../Page/ProductPage/Index";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: "product",
                element: <ProductPage/>,
            },

            {
                path: "brand",
                element: <h1>brand</h1>,
            },

            {
                path: "os",
                element: <h1>os</h1>,
            },
        ],
    },

    {
        path: "/login",
        element: <Login />,
    },
]);

export default router