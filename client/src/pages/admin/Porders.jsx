import "./Porders.css"
import Dashboard from "./Dashboard";
import { useEffect, useState } from 'react';

const Porders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/order/getall');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        console.log(data.message)
        setOrders(data.message);
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
          <p>to be delivered{order.location}</p>
          <p>call :{order.phoneNumber}</p>
          <p>to be delivered to:{order.fullName}</p>
          <p>location:{order.location}</p>
          <p>number of orders:{order.numberOfOrders} servings</p>
          <p>price to be paid:kes{order.price}</p>
          <p>Awaiting delivery</p>
          <button className="deliver">delivered</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Porders;
