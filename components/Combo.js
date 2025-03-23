import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'

const Combo = () => {
  return (
    <div className='flex flex-col h-screen gap-8 relative'>
      <Header/>
      <Hero/>
    </div>
  )
}

export default Combo
