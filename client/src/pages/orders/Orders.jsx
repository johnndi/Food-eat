import { data } from "../home/data.js";
import useOrderStore from "../../store/orders.store.js";
// import "./Orders.css"; // Assuming you have an Orders.css for styling

const Orders = () => {
  const orders = useOrderStore((state) => state.orders);
  const removeItem = useOrderStore((state) => state.deleteOrder);

  const handleDeleteItem = (item) => {
    removeItem(item.id);
  };

  return (
    <div className="orders">
      <div>
        <h2>Your Orders</h2>
      </div>
      <div className="order">
        {data.map((special) => (
          <div className="ordercard" key={special.id}>
            <p>{special.imgurl}</p>
            <p>{special.foodTitle}</p>
            <p>{special.description}</p>
            <p>Your order will be delivered within 30 minutes</p>
            <button className="cancel" onClick={() => handleDeleteItem(special)}>Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
