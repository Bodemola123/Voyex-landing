'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

const Final = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [isInView, setIsInView] = useState(false); // State to track if the Bolt image is in view
    const boltRef = useRef(null); 
    const [success, setSuccess] = useState(''); // State to track if the form submission was successful

    // Set up the IntersectionObserver to detect when the Bolt SVG is in the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting); // Set isInView to true when the image is in the viewport
            },
            { threshold: 0.1 } // Trigger when 10% of the image is in view
        );

        if (boltRef.current) {
            observer.observe(boltRef.current); // Observe the Bolt image
        }

        // Cleanup observer when the component is unmounted
        return () => {
            if (boltRef.current) {
                observer.unobserve(boltRef.current);
            }
        };
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setIsSubmitting(true);
        setError('');
        setSuccess(''); // Reset success message on new submission
    
        try {
          const response = await fetch('https://xi92wp7t87.execute-api.eu-north-1.amazonaws.com/default/voyex_otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              service: 'invite',
              email: email,
            }),
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            // Handle non-200 responses
            setError(data?.message || 'Something went wrong. Please try again.');
          } else {
            setEmail('');
            setSuccess('Sent! Check your email.');
          }
        } catch (err) {
          setError('Network error. Please try again later.');
        }
    
        setIsSubmitting(false);
      } else {
        setError('Please enter a valid email address');
      }
    };
    


  return (
    <div className='-mt-38 flex flex-col lg:px-[120px] md:px-[10px] sm:px-[16px]'>
        <div className='flex flex-row sm:gap-[40px] justify-center items-center sm:mx-auto'>
            <Image src={'/Chart.svg'} alt='chart' width={263} height={263} className='relative lg:top-[36px] md:top-[-136px] lg:left-0 md:right-[0px] sm:hidden lg:flex md:hidden message-bubble'/>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='md:font-bold sm:font-normal md:text-[54px] sm:text-[32px] mt-[100px] text-center text-[#ffffff]'>Get instant access</h1>
                <p className='text-[#bbbbbb] text-base sm:w-auto md:w-[447px] font-normal text-center'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                <form onSubmit={handleSubmit} className='flex md:flex-row sm:flex-col justify-center gap-2.5 items-center'>
                    <div className='relative flex items-center justify-center'>
                        <input
                            type='email'
                            id='emailInput'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@email.com"
                            required
                            className='px-3 py-2.5 rounded-[27px] flex gap-2.5 bg-white/20 placeholder:text-white/50 text-[#f4f4f4] items-center sm:w-[266px] focus:ring-2 focus:ring-[#C088fb] focus:outline-none'
                        />
                        {error ? (
                <div className="absolute text-sm text-red-500 top-full mt-1">
                  {error}
                </div>
              ) : success ? (
                <div className="absolute text-sm text-green-500 top-full mt-1">
                  {success}
                </div>
              ) : null}
                    </div>
                    <button
                        type='submit'
                        className={`py-2.5 px-[15px] flex gap-1 bg-[#ffffff] text-[#000000] font-medium md:text-base sm:text-sm rounded-[27px] sm:w-[136px] md:w-auto items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f1f1f1]'} `}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                          <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-[#000000] rounded-full"></div>
                        ) : (
                          'Get Access'
                        )}
                    </button>
                </form>
            </div>
            <Image
                src={'/Bolt.svg'}
                alt='bolt'
                width={225}
                height={225}
                className={`relative lg:top-[35px] md:top-[38px] lg:left-0 md:left-[0px] sm:hidden lg:flex md:hidden ${isInView ? 'rotate-infinite' : ''}`} 
                ref={boltRef}
            />
        </div>
        <div className='md:mt-[40px] sm:mt-[72px] border-t border-white/20 flex md:flex-row sm:flex-col md:px-[40px] md:py-[20px] sm:py-[50px] md:justify-between sm:justify-center sm:items-center sm:gap-3 md:gap-0'>
        <p className='text-sm font-normal text-center text-[#808080]'>@ 2025 VOYEX, Inc. All rights reserved</p>
        {/* Privacy Policy & Terms */}
        
        <div className='flex flex-row lg:gap-[16px] md:gap-[15px] sm:gap-[15px] justify-center items-center'>
          <div className="social-icon hover:scale-125 transition-transform duration-200 cursor-pointer"><Image src={'/X.svg'} alt='X' width={16} height={14}/></div>
          <div className="social-icon hover:scale-125 transition-transform duration-200 cursor-pointer "><Image src={'/Linkedin.svg'} alt='LinkedIn' width={16} height={16}/></div>
        </div>
        </div>
    </div>
  );
}

export default Final;