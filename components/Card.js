'use client'
// Card Component with Animations
import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const products = [
    { id: 1, title: 'How to Create UI/UX Content', rating: 9, users: '5M+', buttonText: 'Takeoff to App' },
    { id: 2, title: 'ChatGPT', buttonText: 'Takeoff to App' },
    { id: 3, title: 'ChatGPT',  buttonText: 'Takeoff to App' },
    { id: 4, title: 'ChatGPT',  buttonText: 'Takeoff to App' },
    { id: 5, title: 'ChatGPT',  buttonText: 'Takeoff to App' },
    { id: 6, title: 'ChatGPT',  buttonText: 'Takeoff to App' },
  ];

  return (
    <div className="md:grid md:grid-cols-3 sm:grid sm:grid-cols-1 lg:gap-4 md:gap-[11.42px] sm:gap-[11.42px] w-[100%]">
      {products.map((product, index) => (
        <div key={product.id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Card;