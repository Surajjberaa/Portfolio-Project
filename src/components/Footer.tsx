import React from 'react'

function Footer() {
  return (
    <div className='bg-[#121212] '>
      <div className='border rounded-full border-[#ADB7BE] mx-5'></div>
        <div className=" flex justify-between p-4 px-10 ">
            <h1 className='font-light text-2xl'>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
                <path d="M12 17L12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="8" r="1" fill="currentColor"/>
              </svg>
              Made with passion by Suraj Bera
            </div>
            </h1>
            <p className='text-[#ADB7BE] mb-8'>All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer