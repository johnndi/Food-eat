


import { useState } from "react"

function ImageUpload({setFoodImg}) {
 
  const [image,setImage] = useState("")
  //const img_url = ""
  const [uploading,setUploading] = useState(false)
  
  const [preview,setPreview]=useState("")
  
  const handleUpload = async (e) => {
    e.preventDefault()


      const file = e.target.files[0]

    if (!file) return
    setImage(file)

    setUploading(true)


  
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "blog-image")

    console.log("uploading to cloudinary ...")

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dxwlzto9h/image/upload", {
        method: "POST",
        body: formData,
      })
      
     
      const data = await res.json()
      console.log("response from cloudinary",res)

      setUploading(false)
      console.log(data)
      
      if (!data.secure_url) 
       res.status(500).json("failed to upload image")
        setPreview(data.secure_url)
    setFoodImg(data.secure_url)


    } catch (err) {
        setUploading(false)
        setFoodImg("")
      console.error("Error uploading image", err)
    //   setImg_url("")
    }
  }

  return (
    <div >
    {/* image preview component */}
    {image ?(
        <div className="previewContainer">
            { uploading ? (
                <p>Uploading...</p>
            )
            : (
              <img src={preview} alt="preview" className="previewImage" />  
            )
            }
        </div>
        
    ) : (
        <input type="file" id="image" accept="image/*" required onChange={handleUpload}/>
    )}
    
    </div>
  )
}

export default ImageUpload