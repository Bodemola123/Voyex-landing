import React from 'react'

const Conclusion = ({results}) => {
  return (
         <div className='p-6 bg-[#131314] rounded-3xl border border-[#D0D5DD1A] flex flex-col gap-6 justify-center text-[#f4f4f4]'>
            <div className='flex flex-col justify-center gap-4'>
                <h1 className='text-2xl font-bold text-left'>Conclusion</h1>
                <p className='text-left text-sm font-normal'><span className='capitalize'>{results?.name || 'N/A'}</span>, as an AI product, demonstrates high capability and reliability, positioning it as a high performer in the AI landscape. Its advanced natural language understanding, multimodal capabilities, and adaptability across various tasks make it a powerful tool for users and businesses.</p>
            </div>
            <div className='flex flex-col justify-center items-start gap-4'>
                <h1 className='text-xl font-bold text-left'>Key insights</h1>
                <ul style={{ listStyleType: 'disc' }} className='text-[#f4f4f4] text-base font-normal ml-4'>
                    <li><span className='font-bold'>Performance Strengths:</span> <span className='capitalize'>{results?.name || 'N/A'}</span> excels in complex reasoning, code generation, and multimodal AI tasks, making it a strong competitor in the AI space.</li>
                    <li><span className='font-bold'>Reliability & Consistency: </span>The model delivers stable and high-quality responses, ensuring dependability across different use cases.</li>
                    <li><span className='font-bold'>Potential Limitations: </span>While highly capable, performance may vary based on input complexity, real-world application constraints, and evolving AI competition.</li>
                </ul>
            </div>
            <div className='flex flex-col justify-center items-start gap-4'>
                <h1 className='text-xl font-bold text-left'>Final Verdict:</h1>
                <p className='text-left text-sm font-normal'>{results?.name || 'N/A'} has the potential to become a top-tier AI tool, offering cutting-edge performance and reliability. However, its success will depend on future development, optimization, and user feedback to ensure it meets evolving industry demands.</p>
            </div>
            <div className='flex items-center justify-center'>
                <a href="https://voyex-app-dev-delta.vercel.app/auth/organization" target="_blank" rel="noopener noreferrer" className='w-[378px] h-[52px] px-5 py-4 border text-center border-[#FFFFFF26] bg-[#c088fb] rounded-3xl text-[#0A0A0B] font-medium hover:scale-105'>Sign Up</a>
            </div>
            
        </div>
  )
}

export default Conclusion
