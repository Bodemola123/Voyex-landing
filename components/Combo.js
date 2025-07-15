import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';

const Combo = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      <div className="flex justify-center items-center h-screen w-full -mt-12">
        <Hero />
      </div>
    </div>
  );
};

export default Combo;
