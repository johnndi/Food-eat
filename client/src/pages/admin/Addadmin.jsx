import "./addadmin.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Dashboard from "./Dashboard"
const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  role: Yup.string().required('Role is required')
});

const Addadmin = () => {
  const add = async (values) => {
    try {
      const response = await fetch("http://localhost:3000/user/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Failed to add admin');
      }

      alert('Admin added successfully');
    } catch (error) {
      console.error('Error adding admin:', error);
      alert(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      role: ''
    },
    validationSchema,
    onSubmit: add
  });

  return (
    <div className="order">

<div className="dash"><Dashboard/></div>

      <div className='addadmin'>
        <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
        className="input"
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.errors.fullName && formik.touched.fullName && (
          <div>{formik.errors.fullName}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
        className="input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div>{formik.errors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
        className="input"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <div>{formik.errors.password}</div>
        )}
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <input
        className="input"
          id="role"
          name="role"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.role}
        />
        {formik.errors.role && formik.touched.role && (
          <div>{formik.errors.role}</div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
    
  );
};

export default Addadmin;
