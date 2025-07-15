import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';

const Combo = () => {
  return (
    <div className="relative min-h-screen overflow-visible flex flex-col">
      <Header />

      <div className="flex-grow flex justify-center items-center">
        <Hero />
      </div>
    </div>
  );
};

export default Combo;
