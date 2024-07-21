import  { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useUserStore from "../../../store/user.store.js";
import "./header.css";

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const setUser = useUserStore((state) => state.setUser)
const navigate=useNavigate();
  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
    setShowLoginForm(false);
  };

  const handleCloseClick = () => {
    setShowLoginForm(false);
    setShowSignUpForm(false);
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const signUpValidationSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleLoginSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setUser(data); 
      // console.log(data.data.role)

      if (data.data.role==="admin"){
      navigate("/Admin")
      }
      else{
        navigate("/")
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
      handleCloseClick();
    }
  };

  const handleSignUpSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
      handleCloseClick();
    }
  };

  return (
    <section className="headsec">
      <div className="Header">
        <h1 className="headertitle">foodeat</h1>
        <nav className="HeaderNavList">
          <ul className="NavList-items">
            <li className="navItem">
              <Link to="/">home</Link>
            </li>
            <li className="navItem">
              <Link to="/Orders"> your orders</Link>
            </li>
          </ul>
        </nav>
        <div className="operation">
          <button className="login" onClick={handleLoginClick}>log in</button>
          <button className="login" onClick={handleSignUpClick}>sign up</button>
        </div>
      </div>

      {showLoginForm && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Log In</h2>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginValidationSchema}
              onSubmit={handleLoginSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <label>Email:</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  
                  <label>Password:</label>
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                  
                  <button type="submit" disabled={isSubmitting}>Submit</button>
                  <button type="button" onClick={handleCloseClick}>Close</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}

      {showSignUpForm && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Sign Up</h2>
            <Formik
              initialValues={{ fullName: "", email: "", password: "" }}
              validationSchema={signUpValidationSchema}
              onSubmit={handleSignUpSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <label>Full Name:</label>
                  <Field type="text" name="fullName" />
                  <ErrorMessage name="fullName" component="div" />
                  
                  <label>Email:</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  
                  <label>Password:</label>
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                  
                  <button type="submit" disabled={isSubmitting}>Submit</button>
                  <button type="button" onClick={handleCloseClick}>Close</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
