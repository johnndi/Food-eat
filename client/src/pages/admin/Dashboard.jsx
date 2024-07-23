import { Link } from "react-router-dom";
import useUserStore from "../../store/user.store";
const Dashboard=()=>{
    const { user } = useUserStore();
    return(
<div>
    
    <div className="dashboard">
    <h2>Admin Dashboard</h2>
        <p>Welcome, {user?.data?.fullName}</p>
        <nav>
          <ul>
            <li>
              <Link to="/Admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/Admin/Addadmin"> add admin</Link>
            </li>
            <li>
              <Link to="/Admin/Porders">available Orders</Link>
            </li>
            <li>
              <Link to="/Admin/Addmenu">add menu</Link>
            </li>
          </ul>
        </nav>

       
    </div>
   
</div>
    );
}
export default Dashboard