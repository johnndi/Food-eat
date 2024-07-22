import { Link, Outlet } from "react-router-dom";
import useUserStore from "../../store/user.store";
import "./admin.css";

const AdminLayout = () => {
  const { user } = useUserStore();

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <p>Welcome, {user?.data?.fullName}</p>
        <nav>
          <ul>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/users"> Users</Link>
            </li>
            <li>
              <Link to="/Porders"> Orders</Link>
            </li>
            <li>
              <Link to="/Addmenu">add menu</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
