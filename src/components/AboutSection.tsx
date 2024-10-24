"use client"
import Image from 'next/image'
import { useTransition, useState } from 'react'
import React from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
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
            <ul>
                <li>FreeCodeCamp</li>
                <li>100xDevs</li>
                <li>University of Calcutta</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li></li>
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
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id: any) => {
        startTransition(() => {
          setTab(id);
        });
      };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className=' h-full rounded '>

            <Image className='rounded-xl shadow-[rgba(0,0,12,0.5)_8px_5px_4px_0px]' src={"/images/pc2.png"} alt='' height={400} width={400} />
            </div>
            <div  className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                <p className='text-base md:text-lg '>Lorem ipsum dolor . Prariam mollitia esse tenetur molestiae numquam eveniet.Ipsum illo culpa quos expedita praesentium magni earum, numquam corporis dolor ipsa Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab odit sint, ipsa iure quas nobis, quia aperiam minima exercitationem deleniti necessitatibus amet dignissimos enim provident a saepe labore sit ea?</p>
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