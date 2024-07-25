import  { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './addmenu.css';
import Dashboard from './Dashboard';
// eslint-disable-next-line react/prop-types
function ImageUpload({ setFoodImg }) {
  const [preview, setPreview] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'blog-image');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dxwlzto9h/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setUploading(false);

      if (data.secure_url) {
        setPreview(data.secure_url);
        setFoodImg(data.secure_url);
      } else {
        console.error('Failed to upload image');
      }
    } catch (err) {
      setUploading(false);
      setFoodImg('');
      console.error('Error uploading image', err);
    }
  };

  return (
    <div>
      {uploading ? (
        <p>Uploading...</p>
      ) : (
        <input type="file" accept="image/*" onChange={handleUpload} />
      )}
      {preview && <img src={preview} alt="preview" className="previewImage" />}
    </div>
  );
}

const validationSchema = Yup.object({
  foodTitle: Yup.string().required('Food title is required'),
  foodDescription: Yup.string().required('Food description is required'),
  special: Yup.boolean(),
  price: Yup.number().required('Price is required').positive('Price must be positive'),
});

const Addmenu = () => {
  const [foodImg, setFoodImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      foodTitle: '',
      foodDescription: '',
      special: false,
      price: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await fetch('http://localhost:3000/menu/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...values, foodImg }),
        });
        alert('Food item added successfully');
      } catch (error) {
        console.error('Error adding food item:', error);
        alert(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
   <div className='addorder'>
    <div className='dash'><Dashboard/></div>
    <div className="addmenu">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <ImageUpload setFoodImg={setFoodImg} />
        </div>
        <div>
          <label htmlFor="foodTitle">Food Title</label>
          <input
            id="foodTitle"
            name="foodTitle"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.foodTitle}
          />
          {formik.errors.foodTitle && formik.touched.foodTitle && (
            <div>{formik.errors.foodTitle}</div>
          )}
        </div>
        <div className="description">
          <label htmlFor="foodDescription">Food Description</label>
          <textarea
            id="foodDescription"
            name="foodDescription"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.foodDescription}
          />
          {formik.errors.foodDescription && formik.touched.foodDescription && (
            <div>{formik.errors.foodDescription}</div>
          )}
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.errors.price && formik.touched.price && (
            <div>{formik.errors.price}</div>
          )}
        </div>
        <div>
          <label htmlFor="special">
            <input
              id="special"
              name="special"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.special}
            />
            Special
          </label>
        </div>
        {loading ? <p>Loading...</p> : <button type="submit">Submit</button>}
      </form>
    </div>
   </div>
  );
};

export default Addmenu;
