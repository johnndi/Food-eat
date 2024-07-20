import {data} from "../home/data.js"
import useOrderStore from "../../store/orders.store.js"
const Orders =()=>{
    const orders = useOrderStore((state) => state.orders)
    const removeItem = useOrderStore((state) => state.deleteOrder)

    const handleDeleteItem = (item) => {
        removeItem(item.id)
    return(
<div className="orders">
<div>
    <h2>your orders</h2>
</div>
      <div className="order">
{data.map((special)=>(
  <div className="ordercard" key={special.id}>
    <p>{special.imgurl}</p>
       <p>{special.foodTitle}</p>
        <p>{special.description}</p>
        <p>your order will be delivered within 30min</p>
    <button className="cancel">cancel</button>
  </div>
))}
    </div>
</div>
    );
}
export default Orders