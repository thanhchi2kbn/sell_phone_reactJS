import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../Component/LoginComponent";
import ProductPage from "../Page/ProductPage/Index";
import Home from "../Page/HomePage";
import PrivateComponent from "../Component/PrivateComponent";
import UserPage from "../Page/UserPage";
import ProductDetail from "../Page/ProductDetail";
import CartPage from "../Page/CartPage";

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

    {
        path: "/cart",
        element: <CartPage />,
    },
], {basename: '/'});

export default router