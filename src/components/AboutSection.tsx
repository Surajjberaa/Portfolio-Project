"use client"
import Image from 'next/image'
import { useTransition, useState } from 'react'
import React from 'react'
import TabButton from './TabButton'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import { Particles } from './magicui/particles'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node JS</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>NextJS</li>
                <li>Python</li>
                <li>Github</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>FreeCodeCamp</li>
                <li>100xDevs</li>
                <li>Sheryians Coding School</li>
                <li>University of Calcutta</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Full Stack Web Development by 100xDevs</li>
                <li>Scientific Computing with Python by FreeCodeCamp</li>
                <li>Data Analysis with Python by FreeCodeCamp</li>
                <li>Foundation of Digital Marketing and E-commerce by Google</li>
            </ul>
        )
    },
]

function AboutSection() {

    const [tab, setTab] = useState("skills")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id: any) => {
        startTransition(() => {
          setTab(id);
        });
      };

  return (
    <section className='text-white relative overflow-hidden' id='about' >
         <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}  
        refresh
      />
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className=' h-full rounded '>
                <CardContainer className='inter-var'>
                    <CardBody className='bg-[#121212] relative group/card  dark:hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6  '>
                        <CardItem translateZ="80" className="w-full">
                            <Image className='rounded-xl shadow-[rgba(0,0,12,0.5)_8px_5px_4px_0px]' src={"/images/pc2.png"} alt='' height={370} width={370} />
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
            <div  className='mt-4 md:mt-0 text-left flex flex-col h-full z-20'>
                <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                <p className='text-base md:text-lg  text-[#ADB7BE]'>Hi, I'm Suraj — a web developer passionate about crafting modern and interactive web experiences.
                I’ve built projects like a 3D car studio and dynamic websites using React, Three.js, and am expanding my full-stack knowledge to build complete, scalable solutions. Always learning and experimenting with new technologies, I’m focused on improving my skills and creating better, more engaging digital products.</p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                    selectTab={()=> handleTabChange("skills")}
                    active={tab === "skills"}>
                        {""}Skills{""}
                     </TabButton>
                    <TabButton 
                    selectTab={()=> handleTabChange("education")}
                    active={tab === "education"}>
                        {""}Education{""}
                     </TabButton>
                    <TabButton 
                    selectTab={()=> handleTabChange("certifications")}
                    active={tab === "certifications"}>
                        {""}Certifications{""}
                     </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content} </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection