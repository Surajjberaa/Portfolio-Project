import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}: any) =>{
  return (
    <div> 
        <div className='h-32 w-full md:h-52 relative rounded-t-xl group m-0'
        style={{background: `url(${imgUrl})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}
        >
            <div className='overlay items-center justify-center absolute top-0 left-0 h-full w-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-600'>
                <Link target='blank' href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white justify-center items-center flex group/link'>
                    <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer group-hover/link:text-white '/>
                </Link>
                <Link target='blank' href={previewUrl} className='h-14 w-14 m-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white justify-center items-center flex group/link'>
                    <EyeIcon className='h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer group-hover/link:text-white '/>
                </Link>
            </div>
        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4 mt-0 mb-8'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE] '>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard 