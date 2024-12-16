'use client'
import React, { useState } from 'react'

import { FaRegStar, FaStar } from "react-icons/fa";
import { PiAirplaneBold } from "react-icons/pi";
import Image from "next/image";
import Link from 'next/link';
import '../app/globals.css'

const ProductCard = ( {product} ) => {

    const [hovered, setHovered] = useState(false);

  return (
    <div className='w-auto rounded-3xl flex flex-col gap-4 p-6 bg-custom-gradient backdrop-blur-custom text-white'
    style={{
      background: 'linear-gradient(90.83deg, rgba(192, 136, 251, 0.1) 0%, rgba(192, 136, 251, 0.042) 100%)',
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
        <div className='flex justify-between flex-row'>
            <div className='flex flex-col gap-2.5'>
            <Image src={'/chatgpt.svg'} alt='chatgpt' width={52} height={52}/>
            <h1 className="text-base font-bold">{product.title}</h1>
            </div>
            <FaRegStar/>
        </div>
        <div className='text-sm font-normal '>
            <p>Supports GPT-4 and GPT-3.5. OpenAI&apos;s</p>
            <p className='truncate'>next-generation conversational AI, using intelligent Q&A capabilities to solve your tough questions.</p>
        </div>
        {!hovered && (
        <div className='flex flex-row items-center truncate gap-2 mt-4'>
         <span className="text-xs capitalize px-2 py-1 rounded-[21px] border border-card">
          chatbot
        </span>
        <span className="text-xs capitalize px-2 py-1 rounded-[21px] border border-card">
          writing
        </span>
        <span className="text-xs capitalize px-2 py-1 rounded-[21px] border border-card">
          sales
        </span>
        <span className="text-xs capitalize px-2 py-1 rounded-[21px] border border-card">
          models
        </span>
        <span className="text-xs capitalize px-2 py-1 rounded-[21px] border border-card">
          Research
        </span>
        </div>
        )
        }
        {hovered && (
            <div>
                <Link href='/galactimart/Aidescription' passHref>
                <button className="w-full bg-[#c088fb] py-2 px-4 gap-2.5 rounded-3xl flex items-center flex-row justify-center">
                        <PiAirplaneBold className='text-[#032400]'/>
                        <p className=' text-base font-medium text-[#032400]'>{product.buttonText}</p>
                </button>
                </Link>
            </div>
        )
        }
    </div>
  )
}

export default ProductCard