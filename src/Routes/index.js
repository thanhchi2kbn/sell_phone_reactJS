import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Login from "../Component/LoginComponent";
import ProductPage from "../Page/ProductPage/Index";
import Home from "../Page/HomePage";
import PrivateComponent from "../Component/PrivateComponent";
import UserPage from "../Page/UserPage";
import ProductDetail from "../Page/ProductDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/detail/:id", // Thêm :id để truyền giá trị ID từ đường dẫn URL
        element: <ProductDetail />,
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
                path: "user",
                element: <PrivateComponent component={UserPage}/>,
            },
        ],
    },

    {
        path: "/login",
        element: <Login />,
    },
]);

export default router