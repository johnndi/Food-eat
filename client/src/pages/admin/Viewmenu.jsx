import "./Porders.css"
import Dashboard from "./Dashboard";
import { useEffect, useState } from 'react';

const Viewmenu = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/menu/');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        console.log(data.message)
        setOrders(data.menu);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="porderr">
      <div className="dash"><Dashboard/></div>
      <div className="placed">
      {orders.map((order) => (
        <div className="menucard" key={order.id}>
          <p><img src={order.foodImg} alt={order.foodTitle} /></p>
          <h3>{order.foodTitle}</h3>
          <p>{order.foodDescription}</p>
          
          
          <p>:kes{order.price}</p>
         
          <div className="menus">
          <button className="deliver">update</button>
          <button className="deliver">delete</button>
          </div>
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default Viewmenu;
