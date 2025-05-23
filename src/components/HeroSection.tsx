'use client'
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { ShinyButton } from './magicui/shiny-button';
import { ShimmerButton } from './magicui/shimmer-button';


function HeroSection() {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/resume.pdf'
    link.download = 'resume.pdf'
    link.click();
  };

  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12 mt-20'>
            <div className='block sm:hidden place-self-center mb-8 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  flex relative shadow-[rgba(0,0,12,0.5)_5px_5px_4px_0px]'>
                  <Image 
                  priority={true}
                  src="/images/boy-4.png" 
                  alt='Hero Image' 
                  width={300} 
                  height={300} 
                  className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  '/>
                </div>
            </div>
            <div className='col-span-7  place-self-center text-center sm:text-left'>
                <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-slate-300'>
                  Hello, I&apos;m {""}
                    <br />
                  </span>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Suraj',
                        1000,
                        'Web Developer',
                        1000,
                      ]}
                      wrapper="span"
                      speed={30}
                      style={{ fontSize: 'xl', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                    </h1>
                <p className='text-xl lg:text-xl'>Passionate web developer crafting seamless digital experiences. Committed to innovation and growth while embracing challenges in the tech world.</p>
                <div className='mt-4 flex justify-center sm:justify-start gap-5 sm:gap-0'>
                  <Link href='#contact'>
                  <button className='px-6 py-3 m-2 rounded-full font-semibold w-full sm:w-fit bg-gradient-to-br from-blue-500 to-black hover:bg-gradient-to-br hover:from-blue-800 text-white'>Hire Me</button>
                  </Link>
                  {/* <button className='px-6 py-3 m-1 rounded-full bg-transparent border-2 border-white hover:bg-[#181818] hover:text-white font-semibold w-full sm:w-fit'>Download CV</button> */}
                  <ShimmerButton className=' m-2 rounded-full font-semibold   hover:bg-gradient-to-br hover:from-blue-900 text-white' background='#121212' onClick={downloadCV}>Download CV</ShimmerButton>
                </div>
            </div>
            <div className='col-span-5 sm:block hidden place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  flex relative shadow-[rgba(0,0,12,0.5)_5px_5px_4px_0px]'>
                  <Image 
                  priority={true}
                  src="/images/boy-4.png" 
                  alt='Hero Image' 
                  width={300} 
                  height={300} 
                  className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  '/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection