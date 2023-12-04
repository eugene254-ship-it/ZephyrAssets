'use client'
import React, { useState, useEffect } from "react";

const PromotionalSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // The section will appear after 3000 milliseconds (3 seconds)

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  if (!isVisible) return null; // Don't render the section until it's set to visible

  return (
    <section className={`overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 ${isVisible ? 'animate-fadeIn' : 'hidden'}`}>
      {/* Close Button */}
      <button
        className="absolute top-0 right-0 m-4 text-black "
        onClick={() => setIsVisible(false)}
      >
        ✖
      </button>
      
      {/* Image and content here */}
      {/* ... */}
    </section>
  );
};

export default PromotionalSection;
