import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Login from "../Component/LoginComponent";
import ProductPage from "../Page/ProductPage/Index";
import Home from "../Page/HomePage";
import PrivateComponent from "../Component/PrivateComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/admin",
        children: [
            {
                path: "",
                element: <PrivateComponent component={ProductPage}/>,
            },
            {
                path: "product",
                element: <PrivateComponent component={ProductPage}/>,
            },

            {
                path: "brand",
                element: <PrivateComponent component={()=>(<h1>brand</h1>)}/>,
            },

            {
                path: "os",
                element: <PrivateComponent component={()=>(<h1>os</h1>)}/>,
            },
        ],
    },

    {
        path: "/login",
        element: <Login />,
    },
]);

export default router