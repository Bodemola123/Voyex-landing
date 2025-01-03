import React from 'react'

const Header1 = () => {
  return (
    <div className='flex flex-row lg:px-[96px] md:px-[46px] sm:px-[30px] justify-between mt-6 items-center'>
      <h1>Voyex</h1>
      <button className='sm:hidden bg-[#c088fb] lg:rounded-3xl md:flex lg:flex md:rounded-[27px] border-[1.5px] text-[#0a0a0b] border-[#c088fb] flex gap-2 lg:py-2.5 lg:px-9 md:py-[6px] md:px-9'>
        Go to App
      </button>
    </div>
  )
}

export default Header1
