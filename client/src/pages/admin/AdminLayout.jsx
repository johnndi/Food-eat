import {  Outlet } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import "./admin.css";

const AdminLayout = () => {
  

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <Dashboard/>
      </aside>
      <main className="content">
      <div className="cont">
        <h2>admin</h2>
      </div>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
