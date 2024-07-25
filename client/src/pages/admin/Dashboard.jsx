import { Link , useNavigate} from "react-router-dom";
import useUserStore from "../../store/user.store";
import "./dashboard.css"
const Dashboard=()=>{
    const { user ,clearUser} = useUserStore();
const navigate= useNavigate();
    const handleLogoutClick = () => {
      clearUser();
      navigate("/");
    };
    return(
<div>
    
    <div className="dashboard">
    <h2>Admin Dashboard</h2>
        <p>Welcome, {user?.data?.fullName}</p>
        <nav className="navs">
          <ul className="list">
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
            <li>
              <Link to="/Admin/viewmenu">view menu</Link>
            </li>
          </ul>
        </nav>
<button className="logout" onClick={handleLogoutClick}>log out</button>
       
    </div>
   
</div>
    );
}
export default Dashboard