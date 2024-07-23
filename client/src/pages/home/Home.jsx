import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./home.css";

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [special, setSpecial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/menu/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data4 = await response.json();
        console.log(data4);

        const specialItems = [];
        const menuItems = [];

        data4.menu.forEach((item) => {
          if (item.special === true) {
            specialItems.push(item);
          } else {
            menuItems.push(item);
          }
        });

        setSpecial(specialItems);
        setMenu(menuItems);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleOrderClick = (item) => {
    setSelectedItem(item);
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    try {
      const response = await fetch("http://localhost:3000/order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          foodImg: selectedItem.foodImg,
          foodTitle: selectedItem.foodTitle,
          ...values,
          
          foodDescription: selectedItem.foodDescription,
        }),
      });

      

      const result = await response.json();
      console.log(result);

      resetForm();
      setSelectedItem(null);
      alert("Order placed successfully!");
    } catch (error) {
      console.error(error.message);
      alert("Failed to place the order. Please try again.");
    }
  };

  return (
    <div>
      <div className="herosection">
        <div className="herotext">
          <h2>order from us</h2>
          <p>we offer a variety of delicacies</p>
        </div>
        <div className="buttons">
          <div className="btn">
            <p>orders</p>
          </div>
          <div className="btn">
            <p>menu</p>
          </div>
        </div>
      </div>
      <div className="aboutus">
        <div className="aboutheader">
          <h2>about us</h2>
          <h3>welcome</h3>
        </div>
        <div className="aboutustext">
          <p>
            Ipsum no lorem et stet clita et nonumy. Ipsum magna invidunt labore
            amet diam et clita duo, sit accusam sit.
          </p>
        </div>
      </div>
      <div className="specials">
        <div className="specialheader">
          <h2>our weekly specials</h2>
        </div>
        <div className="thespecials">
          {special.map((item) => (
            <div className="specialcard" key={item.id}>
              <img src={item.foodImg} alt="food" className="img" />
              <p>{item.foodTitle}</p>
              <p>{item.foodDescription}</p>
              <p>{item.price}</p>
              <button className="order" onClick={() => handleOrderClick(item)}>
                order
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="menu">
        <div className="menutitle">
          {loading ? <p>loading...</p> : <h2>our menu</h2>}
        </div>
        <div className="themenu">
          {menu.map((item) => (
            <div className="menucard" key={item.id}>
              <img src={item.foodImg} alt="food" className="img" />
              <p>{item.foodTitle}</p>
              <p>{item.foodDescription}</p>
              <p>{item.price}</p>
              <button className="order" onClick={() => handleOrderClick(item)}>
                order
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedItem(null)}>
              &times;
            </span>
            <h2>Order {selectedItem.foodTitle}</h2>
            <Formik
              initialValues={{ location: "", phoneNumber: "" }}
              validationSchema={Yup.object({
                location: Yup.string().required("Location is required"),
                phoneNumber: Yup.string().required("Phone number is required"),
              })}
              onSubmit={handleSubmit}
            >
              <Form>
                <div>
                  <label htmlFor="location">Location</label>
                  <Field name="location" type="text" />
                  <ErrorMessage name="location" component="div" />
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <Field name="phoneNumber" type="number" />
                  <ErrorMessage name="phoneNumber" component="div" />
                </div>
                <button type="submit">Submit</button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;



