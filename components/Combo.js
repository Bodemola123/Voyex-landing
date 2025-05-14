import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';

const Combo = () => {
  return (
    <div className='relative h-screen'>
      <Header />

      <div className='absolute top-1/2 w-full -translate-y-1/2'>
        <Hero />
      </div>
    </div>
  );
};

export default Combo;
