import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';

const Combo = () => {
  return (
    <div className="relative min-h-screen overflow-visible">
      <Header />
      
      <div className="flex justify-center items-center w-full h-screen -mt-14">
        <Hero />
      </div>
    </div>
  );
};

export default Combo;
