'use client'
import React, { useState }  from 'react'
import ProductCard from './ProductCard';


const Card = () => {


const [products] = useState([
    { id: 1, title: 'How to Creat UI/UX Content', rating: 9, users: '5M+', buttonText: 'Takeoff to App' },
    { id: 2, title: 'ChatGPT', buttonText: 'Takeoff to App' },
    { id: 3, title: 'ChatGPT',  buttonText: 'Takeoff to App' },
    { id: 4, title: 'ChatGPT',  buttonText: 'Takeoff to App' },
    { id: 5, title: 'ChatGPT',  buttonText: 'Takeoff to App' },
    { id: 6, title: 'ChatGPT',  buttonText: 'Takeoff to App' },

      ]);
    


  return (
    <div className="grid grid-cols-3 gap-4 w-[100%] ">
        {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Card