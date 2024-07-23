import "./Porders.css"

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
    <div className="placed">
      {orders.map((order) => (
        <div className="menucard" key={order.id}>
          <p><img src={order.foodImg} alt={order.foodTitle} /></p>
          <p>{order.foodTitle}</p>
          <p>{order.foodDescription}</p>
          <p>to be delivered{order.location}</p>
          <p>call {order.phoneNumber}</p>
          <p>{order.userid.fullNme}</p>
          <p>Awaiting delivery</p>
          <button className="deliver">delivered</button>
        </div>
      ))}
    </div>
  );
};

export default Porders;
