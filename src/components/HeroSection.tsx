import React from 'react'
import Image from 'next/image'

function HeroSection() {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center'>
                <h1 className='mb-4 text-4xl lg:text-6xl font-extrabold '>Hello I'm Judy</h1>
                <p className='text-xl lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci natus laborum corrupti sed sit, voluptate quae eos illo molestias.</p>
            </div>
            <div className='col-span-5'>
                <Image src="/images/boy-4.png" alt='Hero Image' width={500} height={500}/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection