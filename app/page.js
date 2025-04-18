// 'use client'
// import Companies from '@/components/Companies/Companies'
// import Everythingyouneed from '@/components/Everythingyouneed'
// import CTA from '@/components/Play/CTA'
// import Blogpage from '@/components/Play/Blogpage'
// import Playmode from '@/components/Play/Playmode'
// // import Rectangle from '@/components/Rectangle'
// import Templates from '@/components/Templates'
// import React from 'react'
// import '../app/globals.css'
// import FAQ from '@/components/FAQ'
// import Final from '@/components/Play/Final'
// import Combo from '@/components/Combo'


// const page = () => {
//   return (
//     <div className='relative flex flex-col w-full h-full'>
//       <Combo/>
//       <Playmode/>
//       <Everythingyouneed/>
//       {/* <Rectangle/> */}
//       <Templates/>
//       <Companies/>
// <div className='relative lg:w-[786px] lg:h-[270px] md:w-[478.15px] md:h-[110px] sm:w-[226.29px] sm:h-[90px] lg:mt-[200px] md:mt-[200px] sm:mt-[220px] opacity-100 rounded-b-full mx-auto '>
// </div>
//     <div className='px-[1.5px] md:px-0'><CTA/></div>
//     <Blogpage />
      
//       <FAQ/>
//       <Final/>
//     </div>
//   )
// }

// export default page




'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';

import Companies from '@/components/Companies/Companies';
import Everythingyouneed from '@/components/Everythingyouneed';
import CTA from '@/components/Play/CTA';
import Blogpage from '@/components/Play/Blogpage';
import Playmode from '@/components/Play/Playmode';
import Templates from '@/components/Templates';
import FAQ from '@/components/FAQ';
import Final from '@/components/Play/Final';
import Combo from '@/components/Combo';

const Page = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      console.log('✅ Session exists:', session);

      // Store session in sessionStorage
      sessionStorage.setItem('userSession', JSON.stringify(session));

      // Dummy analytics event
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'landing_page_visited',
          email: session.user.email,
          timestamp: Date.now(),
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log('📊 Analytics sent:', data));
    } else {
      console.log('❌ No session found');
    }
  }, [session]);

  return (
    <div className="relative flex flex-col w-full h-full">
      <Combo />
      <Playmode />
      <Everythingyouneed />
      <Templates />
      <Companies />
      <div className="relative lg:w-[786px] lg:h-[270px] md:w-[478.15px] md:h-[110px] sm:w-[226.29px] sm:h-[90px] lg:mt-[200px] md:mt-[200px] sm:mt-[220px] opacity-100 rounded-b-full mx-auto"></div>
      <div className="px-[1.5px] md:px-0">
        <CTA />
      </div>
      <Blogpage />
      <FAQ />
      <Final />
    </div>
  );
};

export default Page;
