import React, { useState } from 'react';
import ImageUpload from './ImageUpload';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    // Code to send the image to the API
    console.log("Submit the image:", selectedImage);
  };

  return (
    <div>
      <h1>Image to Calories</h1>
      <ImageUpload onImageSelect={handleImageSelect} />
      {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
