import React, { useState } from 'react';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file); // Create a URL for the selected image
    setSelectedImage(imageUrl); // Set the selectedImage state to the image URL
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Uploaded Food" />} {/* Render the selected image */}
    </div>
  );
}

export default ImageUpload;
