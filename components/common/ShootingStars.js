import React from "react";
import { GoStar } from "react-icons/go"; // Import the star icon
import "./ShootingStars.css";

const ShootingStars = () => {
  const stars = Array.from({ length: 10 }, (_, index) => index); // Create 20 stars

  return (
    <div className="shooting-stars">
      {stars.map((star) => (
        <div key={star} className="shooting-star">
          <GoStar className="star-icon" />
        </div>
      ))}
    </div>
  );
};

export default ShootingStars;
