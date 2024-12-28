import React from "react";
import { IoSnow } from "react-icons/io5"; // Import the snowflake icon
import './SnowFall.css'

const Snowfall = () => {
  const snowflakes = Array.from({ length: 150 }, (_, index) => index); // Create 150 snowflakes

  return (
    <div className="snowfall">
      {snowflakes.map((flake) => (
        <div key={flake} className="snowflake">
          <IoSnow className="snowflake-icon" />
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
