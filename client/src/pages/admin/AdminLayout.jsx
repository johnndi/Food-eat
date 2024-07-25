import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import "./admin.css";

const AdminLayout = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [menuItemsCount, setMenuItemsCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [usersResponse, menuItemsResponse, ordersResponse] = await Promise.all([
          fetch('http://localhost:3000/user/'),
          fetch('http://localhost:3000/menu/'),
          fetch('http://localhost:3000/order/getall')
        ]);

        const usersData = await usersResponse.json();
        const menuItemsData = await menuItemsResponse.json();
        const ordersData = await ordersResponse.json();
console.log(usersData)
        setUsersCount(usersData.user.length);
        setMenuItemsCount(menuItemsData.menu.length);
        setOrdersCount(ordersData.message.length);
        console.log(ordersData)
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <Dashboard />
      </aside>
      <main className="content">
        <div className="cont">
          <h2>admin</h2>
          <div className="first">
            <div className="cards">
              <h3>users</h3>
              <p>{usersCount}</p>
            </div>
            <div className="cards">
              <h3>menu items</h3>
              <p>{menuItemsCount}</p>
            </div>
            <div className="cards">
              <h3>orders</h3>
              <p>{ordersCount}</p>
            </div>
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
