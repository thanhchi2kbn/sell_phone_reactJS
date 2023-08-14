import AdminLayout from "../../Layout/AdminLayout"

const PrivateComponent = (Component) => {
    return (
        <AdminLayout>
            <Component/>
        </AdminLayout>
    )
}

export default PrivateComponent