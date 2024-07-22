import { useFormik } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';

const validationSchema = Yup.object({
  foodImg: Yup.mixed().required('Food image is required'),
  foodTitle: Yup.string().required('Food title is required'),
  foodDescription: Yup.string().required('Food description is required'),
  special: Yup.boolean(),
  price: Yup.number().required('Price is required').positive('Price must be positive'),
});

const Addmenu = () => {

  const handleCreate = async (values) => {
    try {
      const payload = new FormData();
      const cloudName = "dnpgfry7i";
      const uploadPreset="foodapp"
      payload.append('file', values.foodImg);
      payload.append('upload_preset', uploadPreset);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,{
      method:"POST",
       payload
        }
        
      );
      // if (!response.ok) {
      //   alert('Failed to upload image to Cloudinary');
      // }
    
      const data = await response.json();
      console.log(data)
      const imgurl = data.secure_url;

      await fetch('http://localhost:3000/menu/', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          foodImg: imgurl,
          foodTitle: values.foodTitle,
          foodDescription: values.foodDescription,
          special: values.special,
          price: values.price
        })
      });

      alert('Food item added successfully');
    } catch (error) {
      console.error('Error adding food item:', error);
      alert(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      foodImg: null,
      foodTitle: '',
      foodDescription: '',
      special: false,
      price: '',
    },
    validationSchema,
    onSubmit: handleCreate
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="foodImg">Food Image</label>
        <input
          id="foodImg"
          name="foodImg"
          type="file"
          onChange={(event) => formik.setFieldValue('foodImg', event.currentTarget.files[0])}
        />
        {formik.errors.foodImg && formik.touched.foodImg && (
          <div>{formik.errors.foodImg}</div>
        )}
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
      <div>
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Addmenu;
