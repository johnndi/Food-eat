import "./Porders.css";
import Dashboard from "./Dashboard";
import { useEffect, useState } from 'react';
import { useFormik } from "formik";

const Viewmenu = () => {
  const [menu, setMenu] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const handleDeleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/menu/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });

      if (response.ok) {
        setMenu((prevData) => prevData.filter((menu) => menu.id !== id));
      } else {
        console.error("Failed to delete order:", response.statusText);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/menu/');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setMenu(data.menu);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleUpdate = async (update) => {
    try {
      const response = await fetch(`http://localhost:3000/menu/${update.id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify(update)
      });
      const data = await response.json();
      if (response.ok) {
        setMenu((prevData) => prevData.map((item) => (item.id === data.id ? data : item)));
        setEditingItem(null);
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      foodImg: editingItem ? editingItem.foodImg : '',
      foodTitle: editingItem ? editingItem.foodTitle : '',
      foodDescription: editingItem ? editingItem.foodDescription : '',
      special: editingItem ? editingItem.special : '',
      price: editingItem ? editingItem.price : ''
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      handleUpdate({ ...values, id: editingItem.id });
    }
  });

  return (
    <div className="porderr">
      <div className="dash"><Dashboard /></div>
      <div className="placed">
        {menu.map((menu) => (
          <div className="menucard" key={menu.id}>
            <p><img src={menu.foodImg} alt={menu.foodTitle} /></p>
            <h3>{menu.foodTitle}</h3>
            <p>{menu.foodDescription}</p>
            <p>:kes{menu.price}</p>
            <div className="menus">
              <button className="deliver" onClick={() => setEditingItem(menu)}>Update</button>
              <button className="deliver" onClick={() => handleDeleteItem(menu.id)}>Delete</button>
            </div>
          </div>
        ))}

        {editingItem && (
          <form onSubmit={formik.handleSubmit} className="edit-form">
            <label>
              Image URL:
              <input
                type="text"
                name="foodImg"
                value={formik.values.foodImg}
                onChange={formik.handleChange}
              />
            </label>
            <label>
              Title:
              <input
                type="text"
                name="foodTitle"
                value={formik.values.foodTitle}
                onChange={formik.handleChange}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="foodDescription"
                value={formik.values.foodDescription}
                onChange={formik.handleChange}
              />
            </label>
            <label>
              Special:
              <input
                type="text"
                name="special"
                value={formik.values.special}
                onChange={formik.handleChange}
              />
            </label>
            <label>
              Price:
              <input
                type="text"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
              />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditingItem(null)}>Cancel</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Viewmenu;
