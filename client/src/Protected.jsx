import { Outlet, Navigate } from "react-router-dom";
import useUserStore from "./store/user.store";
const Protected = ()=>{
    const { user } = useUserStore();
    return user ? <Outlet/> : <Navigate to="/"/>
}
export default Protected