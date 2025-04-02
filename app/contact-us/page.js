"use client"
import Main from '@/components/contact-us-page/Main'
import Header from '@/components/Header/Header'
import React from 'react'

const page = () => {
  return (
    <div className='relative flex flex-col w-full h-full'>
      <Header/>
      <Main/>
    </div>
  )
}

export default page