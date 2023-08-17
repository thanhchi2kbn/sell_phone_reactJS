import { Navigate } from "react-router-dom"
import AdminLayout from "../../Layout/AdminLayout"

const PrivateComponent = ({component: Component}) => {
    const isAuthenticated = localStorage.getItem("token")
    return (

        isAuthenticated ? (
        <AdminLayout>
            <Component/>
        </AdminLayout>): (
        <Navigate to="/login"/>)
    )
}

export default PrivateComponent