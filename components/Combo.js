import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'

const Combo = () => {
  return (
    <div className='flex flex-col bg-black bg-cover bg-center bg-no-repeat '
    style={{ backgroundImage: "url('/background.png')" }}
    >
      <Header/>
      <Hero/>
      
    </div>
  )
}

export default Combo
