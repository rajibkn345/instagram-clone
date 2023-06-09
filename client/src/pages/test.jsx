import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs as needed
  ];

  useEffect(() => {
    // Update the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="bg-cover bg-center h-64"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Rest of your component */}
    </div>
  );
};

export default MyComponent;
