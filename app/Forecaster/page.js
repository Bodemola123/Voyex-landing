"use client"
import StarsCanvas from '@/components/common/StarBackground';
import Header from '@/components/Header/Header';
import FirstModal from '@/components/Modals/FirstModal';
import LoadingModal from '@/components/Modals/LoadingModal';
import ResultsModal from '@/components/Modals/ResultsModal';
import React, { useState } from 'react'

const page = () => {

    const [showFirstModal, setShowFirstModal] = useState(true);
    const [showLoadingModal, setShowLoadingModal] = useState(false);
    const [showResultsModal, setShowResultsModal] = useState(false);
      // New state to hold the analytics payload
      const [analyticsPayload, setAnalyticsPayload] = useState(null);
        const [apiResult, setApiResult] = useState(null);

            // Updated handler to accept payload
  const handleGetAnalytics = (payload) => {
    setAnalyticsPayload(payload);  // Save payload to state
    setShowFirstModal(false);
    setShowLoadingModal(true);

    // // Simulate loading, then show results modal
    // setTimeout(() => {
    //   setShowLoadingModal(false);
    //   setShowResultsModal(true);
    // }, 3000);
  };

    const handleLoadingComplete = (result) => {
    setApiResult(result);
    setShowLoadingModal(false);
    setShowResultsModal(true);
  };

      const restartModal = () => {
        setShowResultsModal(false)
        setShowFirstModal(true)
    } 
  return (
    <div className='flex flex-col md:h-screen gap-7 w-full pb-7 overflow-y-auto scrollbar-hide'>
        <Header/>
        <div className='flex items-center justify-center'>
                        {showFirstModal && (
  <FirstModal
          onClose={() => setShowFirstModal(false)}
          onGetAnalytics={handleGetAnalytics}  // pass handler with payload
        />
)}

{showLoadingModal && <LoadingModal 
                payload={analyticsPayload} 
                onComplete={handleLoadingComplete} // pass the payload here
                />}

{showResultsModal && (
  <ResultsModal onClose={() => restartModal()} results={apiResult} />
)}
        </div>
                <div className="absolute inset-0 pointer-events-none z-[-1] flex items-center justify-center transform scale-90 filter">
            {/* <CircularRings /> */}
           <StarsCanvas />
           </div>
    </div>
  )
}

export default page
