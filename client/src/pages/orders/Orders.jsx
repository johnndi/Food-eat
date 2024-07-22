import { useEffect, useState } from "react";
import useOrderStore from "../../store/orders.store.js";


const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const removeItem = useOrderStore((state) => state.deleteOrder);
 
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:3000/order/${userid}`,{
        credentials:"include"
        });
        setOrderData(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDeleteItem = (item) => {
    removeItem(item.id);
    setOrderData((prevData) => prevData.filter((order) => order.id !== item.id));
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
            <img src={order.imgurl} alt={order.foodTitle} />
            <p>{order.foodTitle}</p>
            <p>{order.description}</p>
            <p>Your order will be delivered within 30 minutes</p>
            <button className="cancel" onClick={() => handleDeleteItem(order)}>Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders










