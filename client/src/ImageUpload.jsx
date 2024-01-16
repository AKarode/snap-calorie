// In src/ImageUpload.jsx
import React from 'react';

const ImageUpload = ({ onImageSelect }) => {
  return (
    <input type="file" onChange={onImageSelect} accept="image/*" />
  );
};

export default ImageUpload;
