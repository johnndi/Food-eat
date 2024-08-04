import { Outlet, Navigate } from "react-router-dom";
import useUserStore from "./store/user.store";

const Protected = () => {
    const { user, role } = useUserStore();

    if (!user) {
        return <Navigate to="/" />;
    }

    if (role !== "admin") {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}

export default Protected;
