import { useEffect, useState } from "react";
import "./orders.css";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/order/getall", {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        console.log(data);
        setOrderData(data.message);
      } catch (error) {
        setError(error);
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDeleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/order/:id`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setOrderData((prevData) => prevData.filter((order) => order.id !== id));
      } else {
        console.error("Failed to delete order:", response.statusText);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="orders">
      <div>
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3>There was an error fetching data</h3>
        ) : (
          <h2>Your Orders</h2>
        )}
      </div>
      <div className="order">
        {orderData.map((order) => (
          <div className="ordercard" key={order.id}>
            <h4>Orders can only be cancelled within 5 min of order placement</h4>
            <img src={order.foodImg} alt={order.foodTitle} className="img" />
            <p>{order.foodTitle}</p>
            <p>Your bill: KES {order.price}</p>
            <p>Your order will be delivered within 30 minutes</p>
            <button className="cancel" onClick={() => handleDeleteItem(order.id)}>
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;



