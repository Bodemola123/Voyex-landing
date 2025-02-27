import React from 'react'
import Header from '../Header/Header'
import Hero from './Hero'


const Combo = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <div className='my-auto mx-auto'>
        <Hero/>
        </div>
    </div>
  )
}

export default Combo
